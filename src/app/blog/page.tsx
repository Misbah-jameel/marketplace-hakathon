"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Exploring the Future of E-commerce",
    image: "/online.avif",
    snippet: "The world of e-commerce is evolving rapidly, with AI and augmented reality changing how we shop...",
  },
  {
    id: 2,
    title: "5 Tips for Effective Web Design",
    image: "/5step.avif",
    snippet: "Web design is more than just aesthetics; it's about creating an experience that resonates with users...",
  },
  {
    id: 3,
    title: "How AI is Revolutionizing Shopping",
    image: "/org.avif",
    snippet: "AI technology is changing how consumers make purchasing decisions, and businesses are adopting this rapidly...",
  },
  {
    id: 4,
    title: "The Importance of Mobile-First Design",
    image: "/mbl2.avif",
    snippet: "With more users browsing and shopping on mobile, responsive design is essential for your website's success...",
  },
  {
    id: 5,
    title: "The Rise of Blockchain in Retail",
    image: "/block.avif",
    snippet: "Blockchain technology is transforming the way we handle transactions and logistics in retail...",
  },
  {
    id: 6,
    title: "Understanding Artificial Intelligence in Retail",
    image: "/robot.avif",
    snippet: "AI is playing a significant role in optimizing inventory management and personalized shopping experiences...",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gradient-to-r from-white via-pink-800 to-pink text-white py-16">
      <h1 className="text-5xl font-bold text-center mb-12 text-white">Our Latest Blog Posts</h1>

      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <Image src={post.image} alt={post.title} width={500} height={500} className="w-full h-60 object-cover" />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">{post.title}</h3>
                <p className="text-gray-700">{post.snippet}...</p>
                <motion.a
                  href={`/blog/${post.id}`}
                  className="text-black font-semibold hover:text-pink-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Read More
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
