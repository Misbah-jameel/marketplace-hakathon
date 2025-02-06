import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-pink-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">UniqueShop</h3>
            <p className="text-sm">
              Your destination for eco-friendly and sustainable lifestyle products. Making a difference, one product at
              a time.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="hover:text-pink-500 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pink-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-pink-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="hover:text-pink-500 transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pink-500 transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-pink-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-500 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                <Twitter />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                <Youtube />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="font-bold mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button className="bg-pink-600 text-white px-4 py-2 rounded-r-md hover:bg-pink-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-pink-900 mt-8 pt-8 text-center">
          <p>&copy; 2024 UniqueShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

