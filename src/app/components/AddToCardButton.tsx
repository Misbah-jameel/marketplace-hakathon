"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import { useCart } from "../contexts/CartContext"
import { Button } from "../../../components/ui/button"

type Product = {
  id: number
  name: string
  price: number
  image: string
}

export default function AddToCartButton({ product }: { product: Product }) {
  const [isAdded, setIsAdded] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        onClick={handleAddToCart}
        className={`flex items-center justify-center px-4 py-2 rounded-full ${
          isAdded ? "bg-pink-500 text-white" : "bg-black text-pink-300"
        } hover:bg-gray-900 hover:text-pink-500 transition-colors duration-200`}
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        {isAdded ? "Added to Cart!" : "Add to Cart"}
      </Button>
    </motion.div>
  )
}

