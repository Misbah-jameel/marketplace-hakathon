"use client"

import Link from "next/link"
import { useState } from "react"
import { ShoppingCart, Heart, User, ShoppingBag, ChevronDown, LogOut, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "../contexts/CartContext"
import { useUser, useClerk } from "@clerk/nextjs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu"
import { ThemeToggle } from "../../../components/ui/ThemeToggle"

interface MenuProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any
  cartItemCount: number
  handleLogout: () => void
}

interface MobileMenuProps extends MenuProps {
  closeMenu: () => void
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { cart } = useCart()
  const { user } = useUser()
  const { signOut } = useClerk()

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  const handleLogout = () => {
    signOut()
    setIsOpen(false)
  }

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="bg-black text-pink-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <motion.span
                className="font-bold text-2xl text-pink-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                UniqueShop
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <DesktopMenu user={user} cartItemCount={cartItemCount} handleLogout={handleLogout} />
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-pink-300 hover:text-pink-500 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileMenu user={user} cartItemCount={cartItemCount} handleLogout={handleLogout} closeMenu={closeMenu} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function DesktopMenu({ user, cartItemCount, handleLogout }: MenuProps) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="p-2 rounded-md text-pink-300 hover:text-pink-700 hover:bg-gray-900 transition-colors duration-200">
          Categories <ChevronDown className="inline-block ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/eco-friendly">Eco-Friendly</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/hight-quality">High-Quality</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/customer-first">Customer-First</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link
        href="/shop"
        className="p-2 rounded-md text-pink-300 hover:text-pink-500 hover:bg-gray-900 transition-colors duration-200"
      >
        <ShoppingBag className="h-6 w-6" />
      </Link>

      <Link
        href="/cart"
        className="p-2 rounded-md text-pink-300 hover:text-pink-500 hover:bg-gray-900 transition-colors duration-200 relative"
      >
        <ShoppingCart className="h-6 w-6" />
        {cartItemCount > 0 && (
          <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-pink-500 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {cartItemCount}
          </span>
        )}
      </Link>

      <Link
        href="/"
        className="p-2 rounded-md text-pink-300 hover:text-pink-500 hover:bg-gray-900 transition-colors duration-200"
      >
        <Heart className="h-6 w-6" />
      </Link>

      <ThemeToggle />

      <DropdownMenu>
        <DropdownMenuTrigger className="p-2 flex items-center space-x-2 rounded-md text-pink-300 hover:text-pink-500 hover:bg-gray-900 transition-colors duration-200">
          {user && user.imageUrl ? (
            <img src={user.imageUrl || "/placeholder.svg"} alt="Profile" className="w-8 h-8 rounded-full" />
          ) : (
            <User className="h-6 w-6" />
          )}
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {user ? (
            <>
              <DropdownMenuItem>
                <Link href="/profile" className="flex text-pink-300 items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleLogout}
                className="flex items-center space-x-2 text-red-500 cursor-pointer"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuItem>
              <Link href="/login" className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Login</span>
              </Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

function MobileMenu({ user, cartItemCount, handleLogout, closeMenu }: MobileMenuProps) {
  return (
    <>
      <Link
        href="/shop"
        className="block px-3 py-2 rounded-md text-base font-medium text-pink-300 hover:text-pink-500 hover:bg-gray-900"
        onClick={closeMenu}
      >
        Shop
      </Link>
      <Link
        href="/cart"
        className="block px-3 py-2 rounded-md text-base font-medium text-pink-300 hover:text-pink-500 hover:bg-gray-900"
        onClick={closeMenu}
      >
        Cart ({cartItemCount})
      </Link>
      <Link
        href="/"
        className="block px-3 py-2 rounded-md text-base font-medium text-pink-300 hover:text-pink-500 hover:bg-gray-900"
        onClick={closeMenu}
      >
        Wishlist
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-pink-300 hover:text-pink-500 hover:bg-gray-900">
          Categories
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/eco-friendly" onClick={closeMenu}>
              Eco-Friendly
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/hight-quality" onClick={closeMenu}>
              High-Quality
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/customer-first" onClick={closeMenu}>
              Customer-First
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="px-3 py-2">
        <ThemeToggle />
      </div>
      {user ? (
        <>
          <Link
            href="/profile"
            className="block px-3 py-2 rounded-md text-base font-medium text-pink-300 hover:text-pink-500 hover:bg-gray-900"
            onClick={closeMenu}
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-500 hover:text-red-600 hover:bg-gray-900"
          >
            Logout
          </button>
        </>
      ) : (
        <Link
          href="/login"
          className="block px-3 py-2 rounded-md text-base font-medium text-pink-300 hover:text-pink-500 hover:bg-gray-900"
          onClick={closeMenu}
        >
          Login
        </Link>
      )}
    </>
  )
}

