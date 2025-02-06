// app/lib/convertToSubCurrency.ts

export default function convertToSubCurrency(amount: number, currency: string): number {
  // Stripe requires amounts in subunits
  const subunitMultipliers: { [key: string]: number } = {
    usd: 100, // US Dollar
    eur: 100, // Euro
    gbp: 100, // British Pound
    inr: 100, // Indian Rupee
    jpy: 1,   // Japanese Yen
    krw: 1,   // South Korean Won
    aud: 100, // Australian Dollar
    cad: 100, // Canadian Dollar
    // Add more currencies as needed
  };

  // Normalize currency to lowercase
  const normalizedCurrency = currency.toLowerCase();

  // Check if currency is supported
  if (!subunitMultipliers[normalizedCurrency]) {
    throw new Error(`Unsupported currency for subunit conversion: ${currency}`);
  }

  // Validate amount
  if (isNaN(amount) || amount < 0) {
    throw new Error('Invalid amount. Amount must be a non-negative number.');
  }

  // Get multiplier for the currency
  const multiplier = subunitMultipliers[normalizedCurrency];

  // Convert to subunits and round to nearest integer
  const subunitAmount = Math.round(amount * multiplier);

  // Ensure the converted amount is a valid integer
  if (!Number.isInteger(subunitAmount) || subunitAmount < 0) {
    throw new Error('Failed to convert amount to subunits.');
  }

  return subunitAmount;
}