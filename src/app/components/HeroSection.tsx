import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900"
          >
            Discover Sustainable <span className="text-pink-600">Lifestyle</span> Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600"
          >
            Shop our curated collection of eco-friendly and high-quality products that make a difference in your life and the environment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              href="/shop"
              className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition duration-200"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="bg-black text-pink-300 px-6 py-3 rounded-full hover:bg-gray-900 hover:text-pink-500 transition duration-200"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="md:w-1/2 w-full"
        >
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/hero6.jpg"
              alt="Eco-friendly products"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
