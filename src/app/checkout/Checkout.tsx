"use client";
import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

export default function CheckoutPage() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");


    const res = await fetch("/api/create-payment", {
      method: "POST",
      body: JSON.stringify({ amount: 1000, currency: "usd" }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    if (!data.clientSecret) {
      setError("Failed to create Payment Intent");
      setLoading(false);
      return;
    }

   
    const cardElement = elements?.getElement(CardElement);
    if (!cardElement) {
      setError("Payment element not found");
      setLoading(false);
      return;
    }

    
    const result = await stripe?.confirmCardPayment(data.clientSecret, {
      payment_method: { card: cardElement },
    });

   
    if (result?.error) {
      setError(result.error.message || "An error occurred during payment");
    } else {
      alert("Payment Successful!");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Complete Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <CardElement className="p-3 border rounded-md" />
        <button
          type="submit"
          disabled={!stripe || loading}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
