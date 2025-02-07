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
