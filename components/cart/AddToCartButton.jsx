"use client";

import { useCart } from "./CartProvider";

export default function AddToCartButton({ product }) {
  const { add } = useCart();

  return (
    <button
      onClick={() => add(product)}
      className="w-full rounded-xl bg-hooded-electric py-2 font-semibold text-hooded-charcoal
                 hover:bg-hooded-neon hover:shadow-glow transition"
    >
      Add to cart
    </button>
  );
}
