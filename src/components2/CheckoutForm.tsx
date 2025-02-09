"use client";
import { useState, useEffect } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import convertToSubCurrency from "@/app/lib/ConvertToSubCurrency";

type Props = {
  amount: number;
  currency?: string;
};

export default function CheckoutForm({ amount, currency = "usd" }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const amountInSubunits = convertToSubCurrency(amount, currency);

        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: amountInSubunits,
            currency: currency.toLowerCase(),
          }),
        });

        const data = await response.json();

        if (!response.ok || !data.clientSecret) {
          throw new Error(data.error || "Payment initialization failed");
        }if (isNaN(amount) || amount <= 0) {
          throw new Error("Invalid amount. Amount must be a positive number.");
        }
        // if (!supportedCurrencies.includes(currency.toLowerCase())) {
        //   throw new Error(`Unsupported currency: ${currency}`);
        // }

        setClientSecret(data.clientSecret);
      } catch (err) {
        setErrorMessage(
          err instanceof Error ? err.message : "Payment failed to initialize"
        );
      }
    };

    fetchClientSecret();
  }, [amount, currency]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return setErrorMessage("Payment system not ready");
    }

    setIsProcessing(true);
    setErrorMessage("");

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/payment-success`,
        },
        redirect: "if_required",
      });

      if (error) throw error;

      window.location.href = "/payment-success";
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Payment failed"
      );
    } finally {
      setIsProcessing(false);
    }
  };

  if (!clientSecret) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        {errorMessage ? (
          <div className="text-red-600 p-4 bg-red-50 rounded-lg">
            {errorMessage}
          </div>
        ) : (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Initializing payment...</p>
          </>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <PaymentElement
        options={{
          layout: "tabs",
          fields: {
            billingDetails: {
              address: {
                country: "never",
                postalCode: "auto",
              },
            },
          },
        }}
        className="p-4 border rounded-lg bg-white"
      />

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className={`mt-6 w-full py-3 px-6 rounded-lg transition-colors ${
          isProcessing ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        } text-white font-medium disabled:opacity-50`}
      >
        {isProcessing
          ? "Processing..."
          : `Pay ${currency.toUpperCase()} ${amount.toFixed(2)}`}
      </button>

      {errorMessage && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg">
          {errorMessage}
        </div>
      )}
    </form>
  );
}