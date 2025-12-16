"use client";

import CheckoutButton from "./CheckoutButton";

export default function CartDrawer({ open, onClose, cart, remove, clear }) {
  if (!open) return null;

  const itemCount = cart.items.reduce((sum, it) => sum + (it.qty || 0), 0);

  // Optional subtotal (only works later when you add priceCents)
  const subtotalCents = cart.items.reduce((sum, it) => {
    const price = typeof it.priceCents === "number" ? it.priceCents : 0;
    return sum + price * (it.qty || 0);
  }, 0);

  const subtotalLabel =
    subtotalCents > 0 ? `$${(subtotalCents / 100).toFixed(2)}` : "—";

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <button
        aria-label="Close cart"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      {/* Panel */}
      <aside className="absolute right-0 top-0 h-full w-full max-w-md border-l border-white/10 bg-hooded-charcoal">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div>
              <p className="font-heading text-2xl leading-none">Cart</p>
              <p className="mt-1 text-sm text-hooded-ice/70">
                {itemCount} item{itemCount === 1 ? "" : "s"}
              </p>
            </div>

            <button
              onClick={onClose}
              className="rounded-xl border border-white/10 bg-hooded-midnight px-3 py-2 text-sm hover:border-white/20 transition"
            >
              Close
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-auto px-5 py-4">
            {cart.items.length === 0 ? (
              <div className="rounded-xl2 border border-white/10 bg-hooded-midnight/40 p-6">
                <p className="font-semibold">Your cart is empty</p>
                <p className="mt-1 text-sm text-hooded-ice/70">
                  Add something from the shop and it’ll show up here.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.items.map((it) => (
                  <div
                    key={it.id}
                    className="rounded-xl2 border border-white/10 bg-hooded-midnight/40 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-semibold truncate">{it.title}</p>
                        <p className="mt-1 text-sm text-hooded-ice/70">
                          Qty: {it.qty}
                          {typeof it.priceCents === "number" ? (
                            <>
                              {" • "}
                              ${(it.priceCents / 100).toFixed(2)}
                            </>
                          ) : null}
                        </p>
                      </div>

                      <button
                        onClick={() => remove(it.id)}
                        className="shrink-0 rounded-xl border border-white/10 bg-hooded-charcoal px-3 py-2 text-sm hover:border-white/20 hover:text-hooded-neon transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 px-5 py-4">
            <div className="flex items-center justify-between text-sm text-hooded-ice/70">
              <span>Subtotal (est.)</span>
              <span className="text-hooded-ice">{subtotalLabel}</span>
            </div>

            <div className="mt-4 space-y-3">
              <CheckoutButton />
              <button
                onClick={clear}
                disabled={cart.items.length === 0}
                className="w-full rounded-xl2 border border-white/15 bg-hooded-midnight px-6 py-3 font-semibold
                           disabled:opacity-50 disabled:cursor-not-allowed hover:border-white/25 hover:text-hooded-neon transition"
              >
                Clear cart
              </button>
            </div>

            <p className="mt-3 text-xs text-hooded-ice/60">
              Pricing will finalize at checkout once variants + shipping are selected.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
