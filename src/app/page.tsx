"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components1/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components1/ui/avatar";
import HeroSection from "@/app/components/HeroSection";

const products = [
  {
    id: 1,
    name: "Eco-friendly Water Bottle",
    price: 25,
    image: "/botel.avif",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Organic Cotton T-shirt",
    price: 30,
    image: "/cloth3.avif",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Recycled Plastic Backpack",
    price: 65,
    image: "/plastic.avif",
    rating: 4.8,
  },
];

const testimonials = [
  {
    name: "Alice Johnson",
    avatar: "/alice.jpeg",
    testimonial: "I love the eco-friendly products! They're high quality and make me feel good about my purchases.",
  },
  {
    name: "Bob Smith",
    avatar: "/bob.jpg",
    testimonial: "The customer service is outstanding. They really care about their customers and the environment.",
  },
  {
    name: "Carol Davis",
    avatar: "/Carol.jpg", 
    testimonial: "UniqueShop has become my go-to for sustainable lifestyle products. Highly recommended!",
  },
];

export default function Home() {
  return (
    <div>
 
      <div className="space-y-12">
               <HeroSection /> 
        <section className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-pink-500">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={product.image || "/data/products"} 
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <p className="text-purple-600 font-bold">${product.price}</p>
                  <div className="flex items-center mt-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        className={`w-5 h-5 ${index < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-600">({product.rating})</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/product/${product.id}`}
                    className="w-full text-center bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-200"
                  > View Details
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center text-pink-500">Customer Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.avatar
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.testimonial}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

