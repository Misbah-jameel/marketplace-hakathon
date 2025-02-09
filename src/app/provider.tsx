"use client"


import { useAuth } from "@clerk/nextjs"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import React from 'react'
import { ThemeWrapper } from "@/app/components1/ui/themeWraper"
import { WishlistProvider } from "./contexts/WishlistContext"
import { CartProvider } from "./contexts/CartContext"

function AuthCheck({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (isLoaded && !isSignedIn && pathname !== "/login") {
      router.push("/login")
    }
  }, [isLoaded, isSignedIn, pathname, router])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <WishlistProvider>
        <AuthCheck>
          <ThemeWrapper>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeWrapper>
        </AuthCheck>
      </WishlistProvider>
    </CartProvider>
  )
}