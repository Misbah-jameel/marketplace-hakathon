import Image from "next/image"
import Link from "next/link"
// import Product2 from '@/app/data/product2'

const ecoFriendlyProducts = [
  { id: 1, name: "Bamboo Toothbrush", price: 5, image: "/brush.avif" },
  { id: 2, name: "Reusable Water Bottle", price: 15, image: "/botel.avif" },
  { id: 3, name: "Organic Cotton Tote", price: 10, image: "/cotton.avif" },
  { id: 4, name: "Solar-Powered Charger", price: 30, image: "/solar.avif" },
]

export default function EcoFriendlyPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="font-playfair text-4xl font-bold text-center my-10 text-green-800">Eco-Friendly Products</h1>
      <p className="text-center mb-10 text-gray-600 max-w-2xl mx-auto">
        Our eco-friendly products are designed to help you reduce your environmental impact without compromising on
        quality or style.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {ecoFriendlyProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={product.image || "/data/product"}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-playfair text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-green-600 font-bold">${product.price}</p>
              <Link
                href={`/product2/${product.id}`}
                className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

