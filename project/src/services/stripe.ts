import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export async function processPayment(courseId: string, amount: number) {
  const stripe = await stripePromise;
  if (!stripe) throw new Error('Stripe failed to load');

  // In production, this would call your backend to create a payment intent
  const { clientSecret } = await fetch('/api/create-payment-intent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ courseId, amount }),
  }).then(r => r.json());

  const { error } = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement('card'),
      billing_details: {
        name: 'User Name',
      },
    },
  });

  if (error) throw error;
  return true;
}