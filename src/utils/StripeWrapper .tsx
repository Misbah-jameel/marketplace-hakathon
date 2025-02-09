import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components2/CheckoutForm";
import convertToSubCurrency from "@/app/lib/ConvertToSubCurrency";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

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
    if (isNaN(stripeAmount) || stripeAmount < 1) {
      throw new Error('Amount too small or invalid');
    }
  } catch (error) {
    throw new Error(`Currency conversion failed: ${(error as Error).message}`);
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