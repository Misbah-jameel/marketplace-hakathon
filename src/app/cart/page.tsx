"use client";

import { useCart, type CartItem } from "../contexts/CartContext";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingCost = totalPrice > 50 ? 0 : 10;
  const totalWithShipping = totalPrice + shippingCost;

  const handleRemoveItem = (id: number) => {
    const confirmRemove = window.confirm("Are you sure you want to remove this item?");
    if (confirmRemove) {
      removeFromCart(id);
    }
  };

  const handleUpdateQuantity = (item: CartItem, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(item.id, newQuantity);
  };

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
      // Simulate an API call or redirect to a payment gateway
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart }),
      });
      const data = await response.json();
      if (data.success) {
        window.location.href = "/checkout";
      } else {
        alert("Checkout failed. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("An error occurred during checkout.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center font-playfair text-purple-800">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Link
            href="/shop"
            className="inline-block px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center border-b border-gray-200 py-4"
              >
                <Image
                  src={item.image || "/botel.avif"}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md mr-4"
                  priority
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleUpdateQuantity(item, item.quantity - 1)}
                    className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(item, item.quantity + 1)}
                    className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                  aria-label="Remove item"
                >
                  <Trash2 size={20} />
                </button>
              </motion.div>
            ))}
          </div>
          <div className="md:col-span-1">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold  text-pink-500 mb-4 font-playfair">Order Summary</h2>
              <div className="flex text-pink-500 justify-between mb-2">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex text-pink-500 justify-between mb-2">
                <span>Shipping:</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex  justify-between font-semibold">
                  <span>Total:</span>
                  <span>${totalWithShipping.toFixed(2)}</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full mt-6 py-2 px-4 bg-black text-pink-300 rounded-md hover:bg-gray-900 hover:text-pink-500 transition-colors duration-200 ${
                  isCheckingOut ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}