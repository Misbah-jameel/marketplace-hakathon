// app/payment-success/page.tsx
"use client";

import { useEffect, useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Stripe } from "stripe";

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState<"success" | "processing" | "failed">("processing");
  const [paymentDetails, setPaymentDetails] = useState<Stripe.PaymentIntent | null>(null);

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const paymentIntentId = searchParams.get("payment_intent");
        const clientSecret = searchParams.get("payment_intent_client_secret");

        if (!paymentIntentId || !clientSecret) {
          throw new Error("Invalid payment reference");
        }

        const response = await fetch(`/api/get-payment-details/${paymentIntentId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to verify payment");
        }

        setPaymentDetails(data.paymentIntent);
        setPaymentStatus(data.paymentIntent.status === "succeeded" ? "success" : "failed");
      } catch (err) {
        console.error("Payment verification failed:", err);
        setPaymentStatus("failed");
      }
    };

    checkPaymentStatus();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {paymentStatus === "processing" && (
            <div className="text-center">
              <div className="animate-spin mx-auto h-12 w-12 text-blue-600 mb-4">
                <svg className="h-full w-full" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Verifying Payment...</h2>
              <p className="text-gray-600">Please wait while we confirm your payment details</p>
            </div>
          )}

          {paymentStatus === "success" && paymentDetails && (
            <div className="text-center">
              <CheckCircleIcon className="mx-auto h-16 w-16 text-green-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful!</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <dt className="font-medium text-gray-700">Amount Paid:</dt>
                  <dd className="text-gray-900">
                    {(paymentDetails.amount / 100).toLocaleString(undefined, {
                      style: "currency",
                      currency: paymentDetails.currency.toUpperCase(),
                    })}
                  </dd>

                  <dt className="font-medium text-gray-700">Transaction ID:</dt>
                  <dd className="font-mono text-gray-900">{paymentDetails.id}</dd>

                  <dt className="font-medium text-gray-700">Payment Method:</dt>
                  <dd className="text-gray-900 capitalize">
                    {paymentDetails.payment_method_types?.join(", ")}
                  </dd>

                  <dt className="font-medium text-gray-700">Date:</dt>
                  <dd className="text-gray-900">
                    {new Date(paymentDetails.created * 1000).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </dd>
                </dl>
              </div>

              <div className="flex justify-center gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Return Home
                </Link>
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Print Receipt
                </button>
              </div>
            </div>
          )}

          {paymentStatus === "failed" && (
            <div className="text-center">
              <XCircleIcon className="mx-auto h-16 w-16 text-red-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Failed</h2>
              <p className="text-gray-600 mb-8">
                We could not process your payment. Please check your payment details and try again.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Return Home
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}