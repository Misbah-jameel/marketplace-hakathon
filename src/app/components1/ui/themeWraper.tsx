"use client"

import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme

  return (
    <div className={currentTheme} style={{ colorScheme: currentTheme as "light" | "dark" }}>
      {children}
    </div>
  )
}