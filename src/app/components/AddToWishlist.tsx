"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import { motion } from "framer-motion"
import { useWishlist } from "../contexts/WishlistContext"
import { Button } from "@/app/components1/ui/button"

type Product = {
  id: number
  name: string
  price: number
  image: string
}

export default function AddToWishlistButton({ product }: { product: Product }) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    setIsAdded(isInWishlist(product.id))
  }, [isInWishlist, product.id])

  const handleToggleWishlist = () => {
    if (isAdded) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
    setIsAdded(!isAdded)
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        onClick={handleToggleWishlist}
        variant={isAdded ? "secondary" : "outline"}
        size="icon"
        className="rounded-full"
      >
        <Heart className={`h-5 w-5 ${isAdded ? "fill-current" : ""}`} />
        <span className="sr-only">{isAdded ? "Remove from Wishlist" : "Add to Wishlist"}</span>
      </Button>
    </motion.div>
  )
}