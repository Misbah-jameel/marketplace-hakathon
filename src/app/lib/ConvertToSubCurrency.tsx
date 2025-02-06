// app/lib/convertToSubCurrency.ts

export default function convertToSubCurrency(amount: number, currency: string): number {
  // Stripe requires amounts in subunits
  const subunitMultipliers: { [key: string]: number } = {
    usd: 100,
    eur: 100,
    gbp: 100,
    inr: 100,
    jpy: 1,
    krw: 1,
    // Add more currencies as needed
  };

  const multiplier = subunitMultipliers[currency.toLowerCase()];
  
  if (!multiplier) {
    throw new Error(`Unsupported currency for subunit conversion: ${currency}`);
  }

  if (isNaN(amount) || amount < 0) {
    throw new Error('Invalid amount');
  }

  // Round to nearest integer and convert
  return Math.round(amount * multiplier);
}