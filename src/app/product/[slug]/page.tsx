/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Caveat } from "next/font/google";
import { Star, Loader, AlertCircle } from "lucide-react";
import AddToCartButton from "@/app/components/AddToCardButton";
import AddToWishlistButton from "@/app/components/AddToWishlist";
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group";
import { products } from "@/app/data/products";

const caveat = Caveat({ subsets: ["latin"] });

interface PageProps {
  params: { slug: string };
  searchParams?: Record<string, string | string[] | undefined>;
}

export default function ProductPage({ params }: PageProps) {
  const [product, setProduct] = useState<(typeof products)[0] | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>(""); 
  const [selectedSize, setSelectedSize] = useState<string>(""); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 

  const productSlug = params.slug;

  useEffect(() => {
    const fetchProduct = () => {
      setIsLoading(true);
      setError(null);

      try {
        const foundProduct = products.find((p) => p.slug === productSlug);

        if (foundProduct) {
          setProduct(foundProduct);
          setSelectedColor(foundProduct.colors[0]);
          setSelectedSize(foundProduct.availableSizes[0]);
        } else {
          throw new Error("Product not found");
        }
      } catch (err) {
        setError("An error occurred while loading the product. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    if (productSlug) {
      fetchProduct();
    }
  }, [productSlug]);

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
        />
      ));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="w-10 h-10 animate-spin text-pink-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
        <p className="text-red-500 mb-4 text-center">{error}</p>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center mt-8">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="md:w-1/2">
          <div className="relative h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={product.image || "/22.avif"}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="hover:scale-110 transition-transform duration-200"
            />
          </div>
        </div>
        <div className="md:w-1/2 space-y-6">
          <h1 className={`${caveat.className} text-4xl font-bold text-purple-800`}>{product.name}</h1>
          <div className="flex items-center gap-2">
            {renderStars(product.rating)}
            <span className="text-gray-600">({product.reviews} reviews)</span>
          </div>
          <p className="text-2xl font-bold text-purple-600">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Color</h3>
              <RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
                {product.colors.map((color) => (
                  <RadioGroupItem key={color} value={color}>
                    {color}
                  </RadioGroupItem>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Size</h3>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                {product.availableSizes.map((size) => (
                  <RadioGroupItem key={size} value={size}>
                    {size}
                  </RadioGroupItem>
                ))}
              </RadioGroup>
            </div>
          </div>

          <div className="flex space-x-4">
            <AddToCartButton product={product} />
            <AddToWishlistButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
