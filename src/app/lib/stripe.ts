// // import Stripe from "stripe"

// // if (!process.env.STRIPE_SECRET_KEY) {
// //   throw new Error("STRIPE_SECRET_KEY is not set in the environment variables")
// // }

// // export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
// //   // apiVersion: "2023-10-16",
// //   typescript: true,
// // })

// import Stripe from "stripe";
// export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2023-08-16",
// });