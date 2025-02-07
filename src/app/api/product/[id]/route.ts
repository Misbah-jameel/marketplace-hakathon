// src/app/api/product/[id]/route.ts

import { NextResponse } from "next/server";

// Sample product data
const products = [
  { id: 1, name: "Bamboo Toothbrush", price: 25, image: "/brush.avif", rating: 4.5, reviews: 128, description: "Organic toothbrush", colors: ["black", "silver"], availableSizes: ["S", "M"] },
  { id: 2, name: "Eco-friendly Water Bottle", price: 25.0, image: "/botel.avif", rating: 4.5, reviews: 128, description: "Water bottle", colors: ["black"], availableSizes: ["500ml", "750ml"] },
  { id: 3, name: "Organic Cotton T-shirt", price: 30.0, image: "/cotton.avif", rating: 4.2, reviews: 95, description: "Cotton T-shirt", colors: ["white", "blue"], availableSizes: ["S", "M"] },
];

const productMap = new Map(products.map((product) => [product.id, product]));

export async function GET(req: Request, context: { params: { id: string } }) {
  try {
    // Access params from context
    const { id } = context.params; 
    
    // Convert id to number
    const parsedId = Number.parseInt(id);
    if (isNaN(parsedId)) {
      console.error(`Invalid product ID: ${id}`);
      return new NextResponse("Invalid product ID", { status: 400 });
    }

    // Look up product by id
    const product = productMap.get(parsedId);
    
    // Return product or not found
    if (product) {
      return NextResponse.json(product);
    } else {
      console.error(`Product not found for ID: ${parsedId}`);
      return new NextResponse("Product not found", { status: 404 });
    }
  } catch (error) {
    console.error("Error in product API:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
