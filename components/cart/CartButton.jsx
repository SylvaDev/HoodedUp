"use client";

import { useMemo, useState } from "react";
import { useCart } from "./CartProvider";
import CartDrawer from "./CartDrawer";

export default function CartButton() {
  const { cart, remove, clear } = useCart();
  const [open, setOpen] = useState(false);

  const count = useMemo(
    () => cart.items.reduce((sum, it) => sum + (it.qty || 0), 0),
    [cart.items]
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl border border-white/10 bg-hooded-charcoal px-3 py-2 text-sm hover:border-white/20 transition"
      >
        Cart ({count})
      </button>

      <CartDrawer
        open={open}
        onClose={() => setOpen(false)}
        cart={cart}
        remove={remove}
        clear={clear}
      />
    </>
  );
}
