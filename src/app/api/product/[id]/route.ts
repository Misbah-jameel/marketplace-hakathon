// src/app/api/product/[id]/route.ts

import { NextResponse } from "next/server";


const products = [
  {
    id: 1,
    name: "Bamboo Toothbrush",
    price: 25,
    image: "/brush.avif",
    rating: 4.5,
    reviews: 128,
    description:
      "Feel comfortable and look stylish in our organic cotton t-shirt. It's breathable, soft, and kind to the environment.",
    colors: ["black", "silver", "green"],
    availableSizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Eco-friendly Water Bottle",
    price: 25.0,
    image: "/botel.avif",
    description:
      "Stay hydrated with our eco-friendly water bottle. Made from sustainable materials, it keeps your drinks cold for hours.",
    category: "eco-friendly",
    rating: 4.5,
    reviews: 128,
    colors: ["black", "silver", "green"],
    availableSizes: ["500ml", "750ml", "1L"],
  },
  {
    id: 3,
    name: "Organic Cotton T-shirt",
    price: 30.0,
    image: "/cotton.avif",
    description:
      "Feel comfortable and look stylish in our organic cotton t-shirt. It's breathable, soft, and kind to the environment.",
    category: "eco-friendly",
    rating: 4.2,
    reviews: 95,
    colors: ["white", "blue", "gray"],
    availableSizes: ["S", "M", "L", "XL"],
  },
  // Other unique products...
];

// Map to store products by their id for fast lookup
const productMap = new Map(products.map((product) => [product.id, product]));

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id); // Convert id to number
    if (isNaN(id)) {
      console.error(`Invalid product ID: ${params.id}`);
      return new NextResponse("Invalid product ID", { status: 400 });
    }

    const product = productMap.get(id); // Look up product by id

    if (product) {
      return NextResponse.json(product);
    } else {
      console.error(`Product not found for ID: ${id}`);
      return new NextResponse("Product not found", { status: 404 });
    }
  } catch (error) {
    console.error("Error in product API:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
