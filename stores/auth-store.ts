import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getGoogleAuth, type GoogleUser } from "@/lib/google-oauth";
import { siteConfig } from "@/config/site";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  provider?: "email" | "google";
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface AuthActions {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => void;
  setUser: (user: User) => void;
  setLoading: (loading: boolean) => void;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
};

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set, get) => ({
      ...initialState,

      signIn: async (email: string, password: string) => {
        set({ isLoading: true });
        try {
          // Mock authentication - replace with actual API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Mock successful login
          const mockUser: User = {
            id: "1",
            name: email.split("@")[0],
            email,
            avatar: "/placeholder-user.jpg",
            provider: "email",
          };

          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      signUp: async (name: string, email: string, password: string) => {
        set({ isLoading: true });
        try {
          // Mock authentication - replace with actual API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Mock successful signup
          const mockUser: User = {
            id: "1",
            name,
            email,
            avatar: "/placeholder-user.jpg",
            provider: "email",
          };

          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      signInWithGoogle: async () => {
        set({ isLoading: true });
        try {
          const googleAuth = getGoogleAuth(siteConfig.auth.google.clientId);
          const googleUser: GoogleUser = await googleAuth.signInWithPopup();

          // Convert Google user to our User format
          const user: User = {
            id: googleUser.id,
            name: googleUser.name,
            email: googleUser.email,
            avatar: googleUser.picture,
            provider: "google",
          };

          set({
            user,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          console.error("Google sign-in error:", error);
          throw new Error("Failed to sign in with Google. Please try again.");
        }
      },

      signOut: () => {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      },

      setUser: (user: User) => {
        set({
          user,
          isAuthenticated: true,
        });
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);