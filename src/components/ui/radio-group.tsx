"use client"

import type React from "react"
import { createContext, useContext } from "react"
import { cn } from "@/lib/utils"

interface RadioGroupContextType {
  value: string
  onChange: (value: string) => void
}

const RadioGroupContext = createContext<RadioGroupContextType | undefined>(undefined)

export interface RadioGroupProps {
  value: string
  onValueChange: (value: string) => void
  children: React.ReactNode
  className?: string
}

export function RadioGroup({ value, onValueChange, children, className = "" }: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={{ value, onChange: onValueChange }}>
      <div className={cn("grid gap-2", className)}>{children}</div>
    </RadioGroupContext.Provider>
  )
}

export interface RadioGroupItemProps {
  value: string
  children?: React.ReactNode
  className?: string
}

export function RadioGroupItem({ value, children, className = "" }: RadioGroupItemProps) {
  const context = useContext(RadioGroupContext)
  if (!context) {
    throw new Error("RadioGroupItem must be used within a RadioGroup")
  }

  const { value: groupValue, onChange } = context

  return (
    <label className={cn("flex items-center", className)}>
      <input
        type="radio"
        checked={value === groupValue}
        onChange={() => onChange(value)}
        className={cn(
          "aspect-square h-4 w-4 rounded-full border border-gray-300 text-pink-600 focus:ring-2 focus:ring-pink-500",
        )}
      />
      <span className="ml-2">{children}</span>
    </label>
  )
}

