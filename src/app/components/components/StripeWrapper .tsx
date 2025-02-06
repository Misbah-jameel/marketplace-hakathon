"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import convertToSubCurrency from "@/app/lib/ConvertToSubCurrency";

const stripePromise = loadStripe("pk_test_51QmBnPCcZIekufMkZWyWHKZOMGoxm7WXgWoLE6VtOnDNRrpEBmYtZu6D8i4nKeyWNAbBrcQD3Jg3YqaDmrCIFuIp00fgXSyqL6");

export default function StripeWrapper({ amount, currency = "usd" }: { 
  amount: number; 
  currency?: string 
}) {
  const normalizedCurrency = currency.toLowerCase();
  const supportedCurrencies = ["usd", "eur", "jpy", "inr", "gbp", "aud"];

  if (!supportedCurrencies.includes(normalizedCurrency)) {
    throw new Error(`Unsupported currency: ${currency}`);
  }

  let stripeAmount: number;
  try {
    stripeAmount = convertToSubCurrency(amount, normalizedCurrency);
  } catch (error) {
    throw new Error(`Currency conversion failed: ${(error as Error).message}`);
  }

  if (stripeAmount < 1) {
    throw new Error('Amount too small');
  }if (isNaN(amount) || amount <= 0) {
    throw new Error("Invalid amount. Amount must be a positive number.");
  }
  if (!supportedCurrencies.includes(currency.toLowerCase())) {
    throw new Error(`Unsupported currency: ${currency}`);
  }

  const options = {
    mode: "payment" as const,
    amount: stripeAmount,
    currency: normalizedCurrency,
    appearance: {
      theme: "stripe" as const,
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={stripeAmount} currency={normalizedCurrency} />
    </Elements>
  );
}