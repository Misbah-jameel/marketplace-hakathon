// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// // Secret Key from .env
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

// export async function POST(request: Request) {
//   try {
//     const { amount, currency } = await request.json();

//     // Create PaymentIntent
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency,
//       automatic_payment_methods: { enabled: true },
//     });

//     return NextResponse.json({ clientSecret: paymentIntent.client_secret });
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (err: any) {
//     return NextResponse.json(
//       { error: err.message || "Failed to create PaymentIntent" },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia", // Check your Stripe API version
});

export async function POST(req: Request) {
  try {
    const { amount, currency } = await req.json();

    if (!amount || !currency) {
      throw new Error("Amount and currency are required.");
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ["card"],
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("🚨 Stripe Error:", error);
    return NextResponse.json({ error: "An error occurred during checkout." }, { status: 500 });
  }
}
