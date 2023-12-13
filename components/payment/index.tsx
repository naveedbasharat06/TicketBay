import { Stripe, loadStripe } from "@stripe/stripe-js";

export async function Payment({
  lineItems,
  id,
}: {
  lineItems: any[];
  id: any;
}) {
  let stripePromise: Promise<Stripe | null> | null = null;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(
        "pk_test_51O05ZfDouCITlfo8svg45jhb7vdfPLZ09PUpfuAawxdUqNTTAqqIX3sZAAz2mvituf9nmfPADfs4kYLwClkG0UsY00YMOJutSo"
      );
    }
    return stripePromise;
  };

  const stripe = await getStripe();

  if (stripe) {
    const encodedId = encodeURIComponent(id);

    await stripe.redirectToCheckout({
      mode: "payment",
      lineItems,
      successUrl: `${window.location.origin}/events/booking?id=${encodedId}`,
      cancelUrl: window.location.origin,
    });
  } else {
    console.error("Stripe.js has not loaded yet.");
  }
}
