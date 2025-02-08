// import { NextRequest, NextResponse } from "next/server";
// // Sample product data
// const products = [
//   { id: 1, name: "Bamboo Toothbrush", price: 25, image: "/brush.avif", rating: 4.5, reviews: 128, description: "Organic toothbrush", colors: ["black", "silver"], availableSizes: ["S", "M"] },
//   { id: 2, name: "Eco-friendly Water Bottle", price: 25.0, image: "/botel.avif", rating: 4.5, reviews: 128, description: "Water bottle", colors: ["black"], availableSizes: ["500ml", "750ml"] },
//   { id: 3, name: "Organic Cotton T-shirt", price: 30.0, image: "/cotton.avif", rating: 4.2, reviews: 95, description: "Cotton T-shirt", colors: ["white", "blue"], availableSizes: ["S", "M"] },
// ];


// const productMap = new Map(products.map((product) => [product.id, product]));

// export async function GET(req: NextRequest) {
//   try {
//     // Extract product ID from URL
//     const id = req.nextUrl.pathname.split("/").pop();

//     // Convert id to number
//     const parsedId = Number(id);
//     if (isNaN(parsedId)) {
//       return new NextResponse("Invalid product ID", { status: 400 });
//     }

//     // Look up product by id
//     const product = productMap.get(parsedId);

//     // Return product or not found
//     if (product) {
//       return NextResponse.json(product);
//     } else {
//       return new NextResponse("Product not found", { status: 404 });
//     }
//   } catch (error) {
//     console.error("Error in product API:", error);
//     return new NextResponse("Internal Server Error", { status: 500 });
//   }
// }
import { NextRequest, NextResponse } from "next/server";

// Sample product data
const products = [
  { id: 1, name: "Bamboo Toothbrush", price: 25, image: "/brush.avif", rating: 4.5, reviews: 128, description: "Organic toothbrush", colors: ["black", "silver"], availableSizes: ["S", "M"] },
  { id: 2, name: "Eco-friendly Water Bottle", price: 25.0, image: "/botel.avif", rating: 4.5, reviews: 128, description: "Water bottle", colors: ["black"], availableSizes: ["500ml", "750ml"] },
  { id: 3, name: "Organic Cotton T-shirt", price: 30.0, image: "/cotton.avif", rating: 4.2, reviews: 95, description: "Cotton T-shirt", colors: ["white", "blue"], availableSizes: ["S", "M"] },
];

// Create a map with string keys
const productMap = new Map(products.map((product) => [String(product.id), product]));

export async function GET(req: NextRequest) {
  try {
    // Extract product slug from URL
    const slug = req.nextUrl.pathname.split("/").pop();

    if (!slug) {
      return new NextResponse("Product slug is required", { status: 400 });
    }

    // Look up product by slug
    const product = productMap.get(slug);

    // Return product or not found
    if (product) {
      return NextResponse.json(product);
    } else {
      return new NextResponse("Product not found", { status: 404 });
    }
  } catch (error) {
    console.error("Error in product API:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
