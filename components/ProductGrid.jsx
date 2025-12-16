import { listProducts } from "../lib/printify";
import AddToCartButton from "./cart/AddToCartButton";
import CheckoutButton from "./cart/CheckoutButton";

export default async function ProductGrid() {
  const data = await listProducts();

  const items = (data?.data || []).map((p) => ({
    id: p.id,
    title: p.title,
    image: p?.images?.[0]?.src || null,
    priceLabel: "From $XX.XX",
  }));

  return (
    <section className="mx-auto max-w-6xl px-5 pb-14" id="shop">
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-heading text-2xl md:text-3xl">New Drop</h2>
        <div className="w-48">
          <CheckoutButton />
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-xl2 border border-white/10 bg-hooded-charcoal p-4 hover:border-white/20 transition"
          >
            <div className="aspect-square rounded-2xl border border-white/10 bg-black/20 overflow-hidden">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : null}
            </div>

            <div className="mt-4">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-hooded-ice/70">{item.priceLabel}</p>
            </div>

            <div className="mt-4">
              <AddToCartButton product={item} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
