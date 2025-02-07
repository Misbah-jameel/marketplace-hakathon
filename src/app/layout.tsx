
// "use client";

// import { CartProvider } from "./contexts/CartContext";
// import { WishlistProvider } from "./contexts/WishlistContext";
// import { useAuth } from "@clerk/nextjs";
// import { useRouter, usePathname } from "next/navigation";
// import { useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import React from 'react'; // Added import for React

// function AuthCheck({ children }: { children: React.ReactNode }) {
//   const { isSignedIn, isLoaded } = useAuth();
//   const router = useRouter();
//   const pathname = usePathname();

//   useEffect(() => {
//     if (isLoaded && !isSignedIn && pathname !== "/login") {
//       router.push("/login");
//     }
//   }, [isLoaded, isSignedIn, pathname, router]);

//   if (!isLoaded) {
//     return <div>Loading...</div>;
//   }

//   return <>{children}</>;
// }

// export function Providers({ children }: { children: React.ReactNode }) {
//   return (
//     <CartProvider>
//       <WishlistProvider>
//         <AuthCheck>
//           <Navbar />
//           <main className="flex-1">{children}</main>
//           <Footer />
//         </AuthCheck>
//       </WishlistProvider>
//     </CartProvider>
//   );
// }

import "./globals.css"
import { Montserrat, Lora, Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "../../components/ui/ThemeProvider"
import { Providers } from "./provider"
import React from "react"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${lora.variable} ${inter.variable} font-sans bg-background min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClerkProvider>
            <Providers>{children}</Providers>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}