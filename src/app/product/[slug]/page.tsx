
"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group";
import AddToCartButton from "@/app/components/AddToCardButton";
import AddToWishlistButton from "@/app/components/AddToWishlist";
import { useState } from "react";
import { products } from "@/app/data/products";

export default function ProductPage() {
 
  const product = products.find((p) => p.id === 1); 

  if (!product) return <p className="text-center text-red-500">Product not found</p>;

  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedSize, setSelectedSize] = useState(product?.availableSizes[0] || "M");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "Black");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.image || "/data/products"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-UniqueShop-pink mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600">({product.rating})</span>
            </div>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-2xl font-bold text-UniqueShop-pink mb-6">${product.price.toFixed(2)}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Size</h3>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex gap-4">
                {product.availableSizes.map((size) => (
                  <RadioGroupItem key={size} value={size}>
                    {size}
                  </RadioGroupItem>
                ))}
              </RadioGroup>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color</h3>
              <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex gap-4">
                {product.colors.map((color) => (
                  <RadioGroupItem key={color} value={color}>
                    {color}
                  </RadioGroupItem>
                ))}
              </RadioGroup>
            </div>
          </div>
          <div className="flex gap-4">
            <AddToCartButton product={product} />
            <AddToWishlistButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
