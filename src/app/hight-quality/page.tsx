import Image from "next/image"
import Link from "next/link"

const highQualityProducts = [
  { id: 1, name: "Premium Leather Wallet", price: 50, image: "/wallet.jpeg" },
  { id: 2, name: "Handcrafted Wooden Watch", price: 100, image: "/watch.jpeg" },
  { id: 3, name: "Artisanal Ceramic Mug", price: 25, image: "/cup.jpeg" },
  { id: 4, name: "Luxury Scented Candle", price: 40, image: "/candel.webp" },
]

export default function HighQualityPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="font-playfair text-4xl font-bold text-center my-10 text-purple-800">High-Quality Products</h1>
      <p className="text-center mb-10 text-gray-600 max-w-2xl mx-auto">
        Our high-quality products are crafted with the finest materials and attention to detail, ensuring long-lasting
        performance and satisfaction.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {highQualityProducts.map((product) => (
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
              <p className="text-purple-600 font-bold">${product.price}</p>
              <Link
                href={`/product/${product.id}`}
                className="mt-4 inline-block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors duration-200"
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

