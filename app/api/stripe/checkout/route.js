import { NextResponse } from "next/server";
import { stripe } from "../../../../lib/stripe";

export async function POST(req) {
  const { items } = await req.json();

  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (!appUrl) {
    return NextResponse.json({ error: "Missing NEXT_PUBLIC_APP_URL" }, { status: 500 });
  }

  // Placeholder pricing. Replace with server-validated pricing later.
  const line_items = (items || []).map((it) => ({
    quantity: it.qty || 1,
    price_data: {
      currency: "usd",
      unit_amount: 5000,
      product_data: { name: it.title || "Item" },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items,
    success_url: `${appUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl}/checkout/cancel`,
  });

  return NextResponse.json({ url: session.url });
}
