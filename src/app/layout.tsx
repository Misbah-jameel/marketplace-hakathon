"use client";
import "./globals.css";
import { Montserrat, Lora, Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { ThemeProvider } from "../../components/ui/ThemeProvider";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Font configurations
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Auth Check Component
function AuthCheck({ children }: { children: React.ReactNode }) {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/login");
    }
  }, [isSignedIn, router]);

  return <>{children}</>;
}

// Root Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lora.variable} ${inter.variable} font-sans bg-background min-h-screen flex flex-col`}
      >
        <ClerkProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <CartProvider>
              <WishlistProvider>
                <AuthCheck>
                  <Navbar />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </AuthCheck>
              </WishlistProvider>
            </CartProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}