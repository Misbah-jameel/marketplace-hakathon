"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import HeroSection from "./components/HeroSection";

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
// "use client";
// import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

// export default function LoginPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
//         {/* Header Section */}
//         <div className="text-center space-y-2">
//           <h1 className="text-3xl font-bold text-gray-900">Welcome Back! 👋</h1>
//           <p className="text-gray-500">Please sign in to your account</p>
//         </div>

//         {/* Form Section */}
//         <form className="space-y-4">
//           {/* Email Input */}
//           <div className="space-y-1">
//             <label className="text-sm font-medium text-gray-700">Email</label>
//             <div className="relative">
//               <EnvelopeIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//               <input
//                 type="email"
//                 placeholder="name@example.com"
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//               />
//             </div>
//           </div>

//           {/* Password Input */}
//           <div className="space-y-1">
//             <label className="text-sm font-medium text-gray-700">Password</label>
//             <div className="relative">
//               <LockClosedIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//               <input
//                 type="password"
//                 placeholder="••••••••"
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]"
//           >
//             Sign In
//           </button>

//           {/* Forgot Password Link */}
//           <div className="text-center">
//             <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
//               Forgot Password?
//             </a>
//           </div>
//         </form>

//         {/* Social Login Separator */}
//         <div className="relative">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-300"></div>
//           </div>
//           <div className="relative flex justify-center text-sm">
//             <span className="px-2 bg-white text-gray-500">Or continue with</span>
//           </div>
//         </div>

//         {/* Social Login Buttons */}
//         <div className="grid grid-cols-3 gap-3">
//           <button className="flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
//             </svg>
//           </button>
          
//           <button className="flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//             </svg>
//           </button>
          
//           <button className="flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384C19.61 22.952 24 17.988 24 12z"/>
//             </svg>
//           </button>
//         </div>

//         {/* Signup Link */}
//         <p className="text-center text-gray-600">
//           Don t have an account? {' '}
//           <a href="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
//             Register for free
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }