import { NextResponse } from "next/server";

const PRINTIFY_API = "https://api.printify.com/v1";

export async function GET() {
  const token = process.env.PRINTIFY_TOKEN;
  const shopId = process.env.PRINTIFY_SHOP_ID;

  if (!token) return NextResponse.json({ ok: false, error: "Missing PRINTIFY_TOKEN" }, { status: 500 });
  if (!shopId) return NextResponse.json({ ok: false, error: "Missing PRINTIFY_SHOP_ID" }, { status: 500 });

  const res = await fetch(`${PRINTIFY_API}/shops/${shopId}/products.json`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  const text = await res.text();

  return NextResponse.json({
    ok: res.ok,
    status: res.status,
    // Return a small slice so you can see it works without dumping everything:
    sample: text.slice(0, 300),
  });
}
