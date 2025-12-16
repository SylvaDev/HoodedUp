"use client";

import { useCart } from "./CartProvider";

export default function CheckoutButton() {
  const { cart } = useCart();

  async function go() {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart.items }),
    });

    if (!res.ok) return alert("Checkout failed.");
    const data = await res.json();
    if (data?.url) window.location.assign(data.url);
  }

  return (
    <button
      onClick={go}
      disabled={!cart.items.length}
      className="w-full rounded-xl2 bg-hooded-neon px-6 py-3 font-semibold text-hooded-charcoal
                 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-glowStrong transition"
    >
      Checkout
    </button>
  );
}
