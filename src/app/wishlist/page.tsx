// "use client"

// import { useState, useEffect } from "react"
// import { Heart } from "lucide-react"
// import { motion } from "framer-motion"
// import { useWishlist } from "../contexts/WishlistContext"
// import { Button } from "../../../components/ui/button"

// type Product = {
//   id: number
//   name: string
//   price: number
//   image: string
// }

// export default function AddToWishlistButton({ product }: { product: Product }) {
//   const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
//   const [isAdded, setIsAdded] = useState<boolean | null>(null)

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setIsAdded(isInWishlist(product.id))
//     }
//   }, [isInWishlist, product.id])

//   if (isAdded === null) return null // Server-side render avoid karne ke liye

//   const handleToggleWishlist = () => {
//     if (isAdded) {
//       removeFromWishlist(product.id)
//     } else {
//       addToWishlist(product)
//     }
//     setIsAdded(!isAdded)
//   }
//   <AddToWishlistButton product={Product} />

//   return (
    
//     <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//       <Button
//         onClick={handleToggleWishlist}
//         variant={isAdded ? "secondary" : "outline"}
//         size="icon"
//         className="rounded-full"
//       >
//         <Heart className={`h-5 w-5 ${isAdded ? "fill-current" : ""}`} />
//         <span className="sr-only">{isAdded ? "Remove from Wishlist" : "Add to Wishlist"}</span>
//       </Button>
//     </motion.div>
//   )
// }
