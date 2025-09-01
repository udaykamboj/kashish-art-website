"use client";

import { useAuthStore } from "@/stores/auth-store";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShoppingCart,  ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/auth/signin");
    }
  }, [isAuthenticated, router]);

  if (!user) return null;

  const sidebarLinks = [
    { label: "Profile", href: "/account/profile" },
    { label: "Orders", href: "/account/orders" },
    { label: "Wishlist", href: "/account/wishlist" },
    { label: "Settings", href: "/account/settings" },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-serif mb-2">Account Dashboard</h1>
          <p className="text-gray-600">Manage your account, shopping cart, and orders</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar/Profile Section */}
          <div className="lg:col-span-1">
            <Card>
            
              <CardContent className="text-center mt-4">
                <div className="relative inline-block mb-4">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src={user.avatar || "/placeholder-user.jpg"} alt={user.name} />
                    <AvatarFallback className="text-2xl bg-teal-600 text-white">
                      {user.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h2 className="text-xl font-bold mb-1">{user.name}</h2>
                <p className="text-sm text-gray-500 mb-6">{user.email}</p>
                <nav className="flex flex-col items-center space-y-2">
                  {sidebarLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`w-full px-4 py-2 rounded text-left transition-colors ${
                        pathname === link.href ? "bg-teal-600 text-white font-semibold" : "hover:bg-gray-100 text-gray-700"
                      }`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Section */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-6 w-6" /> Shopping Cart
                </CardTitle>
                <CardDescription>View and manage your shopping cart</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Shopping cart summary or details can go here */}
                <p className="text-gray-700 mb-4">Welcome to your dashboard, {user.name}! Here you can view your shopping cart, orders, and account details.</p>
                <Link href="/cart" className="inline-block mt-2 px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition">Go to Cart</Link>
              </CardContent>
            </Card>
            {/* Add more dashboard widgets/cards here as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
