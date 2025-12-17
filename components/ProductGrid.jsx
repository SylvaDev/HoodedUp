'use client';

import React from 'react';
import AddToCartButton from "./cart/AddToCartButton";
import CheckoutButton from "./cart/CheckoutButton";

export default function ProductGrid({ items, openProductPopup }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-14 overflow-hidden" id="shop">
      <div className="flex items-end justify-between gap-4 animate-fade-in">
        <h2 className="font-heading text-2xl md:text-3xl animate-fade-in">New Drop</h2>
        <div className="w-48 animate-fade-in delay-100">
          <CheckoutButton />
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`rounded-xl2 border border-white/10 bg-hooded-charcoal p-4 hover:border-white/20 transition cursor-pointer animate-slide-up delay-${index * 100}`}
            onClick={() => openProductPopup(item)}
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