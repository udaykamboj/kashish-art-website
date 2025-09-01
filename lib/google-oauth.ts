// Google OAuth configuration and utilities
declare global {
  interface Window {
    google: any;
    googleOneTapCallback: (response: any) => void;
  }
}

export interface GoogleUser {
  id: string;
  name: string;
  email: string;
  picture: string;
  given_name: string;
  family_name: string;
}

export interface GoogleAuthConfig {
  clientId: string;
  redirectUri?: string;
}

export class GoogleAuth {
  private config: GoogleAuthConfig;
  private isInitialized = false;

  constructor(config: GoogleAuthConfig) {
    this.config = config;
  }

  // Initialize Google Identity Services
  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    return new Promise((resolve, reject) => {
      // Load Google Identity Services script
      if (
        !document.querySelector('script[src*="accounts.google.com/gsi/client"]')
      ) {
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        script.onload = () => {
          this.isInitialized = true;
          resolve();
        };
        script.onerror = () =>
          reject(new Error("Failed to load Google Identity Services"));
        document.head.appendChild(script);
      } else {
        this.isInitialized = true;
        resolve();
      }
    });
  }

  // Sign in with Google popup
  async signInWithPopup(): Promise<GoogleUser> {
    await this.initialize();

    return new Promise((resolve, reject) => {
      if (!window.google?.accounts?.oauth2) {
        reject(new Error("Google Identity Services not loaded"));
        return;
      }

      const client = window.google.accounts.oauth2.initTokenClient({
        client_id: this.config.clientId,
        scope: "email profile",
        callback: async (response: any) => {
          if (response.error) {
            reject(new Error(response.error));
            return;
          }

          try {
            // Get user info from Google API
            const userInfo = await this.getUserInfo(response.access_token);
            resolve(userInfo);
          } catch (error) {
            reject(error);
          }
        },
      });

      client.requestAccessToken();
    });
  }

  // Get user information from Google API
  private async getUserInfo(accessToken: string): Promise<GoogleUser> {
    const response = await fetch(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user info from Google");
    }

    const userInfo = await response.json();
    return {
      id: userInfo.id,
      name: userInfo.name,
      email: userInfo.email,
      picture: userInfo.picture,
      given_name: userInfo.given_name,
      family_name: userInfo.family_name,
    };
  }

  // Alternative: Sign in with One Tap
  async initializeOneTap(callback: (user: GoogleUser) => void): Promise<void> {
    await this.initialize();

    if (!window.google?.accounts?.id) {
      throw new Error("Google Identity Services not loaded");
    }

    // Set global callback
    window.googleOneTapCallback = async (response: any) => {
      try {
        const userInfo = this.parseJwtResponse(response.credential);
        callback(userInfo);
      } catch (error) {
        console.error("One Tap sign-in error:", error);
      }
    };

    window.google.accounts.id.initialize({
      client_id: this.config.clientId,
      callback: window.googleOneTapCallback,
    });

    window.google.accounts.id.prompt();
  }

  // Parse JWT token from One Tap response
  private parseJwtResponse(credential: string): GoogleUser {
    try {
      const payload = JSON.parse(atob(credential.split(".")[1]));
      return {
        id: payload.sub,
        name: payload.name,
        email: payload.email,
        picture: payload.picture,
        given_name: payload.given_name,
        family_name: payload.family_name,
      };
    } catch (error) {
      throw new Error("Failed to parse Google credential");
    }
  }
}

// Default instance
let googleAuth: GoogleAuth | null = null;

export function getGoogleAuth(clientId?: string): GoogleAuth {
  if (!googleAuth) {
    const googleClientId =
      clientId ||
      (typeof window !== "undefined"
        ? (window as any).__NEXT_DATA__?.env?.NEXT_PUBLIC_GOOGLE_CLIENT_ID
        : undefined);

    if (!googleClientId) {
      throw new Error(
        "Google Client ID is required. Pass it as parameter or set NEXT_PUBLIC_GOOGLE_CLIENT_ID"
      );
    }
    googleAuth = new GoogleAuth({ clientId: googleClientId });
  }
  return googleAuth;
}