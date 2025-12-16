const PRINTIFY_API = "https://api.printify.com/v1";

function printifyFetch(path, init = {}) {
  const token = process.env.PRINTIFY_TOKEN;
  if (!token) throw new Error("Missing PRINTIFY_TOKEN");

  return fetch(`${PRINTIFY_API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
    cache: "no-store",
  });
}

export async function listProducts() {
  const shopId = process.env.PRINTIFY_SHOP_ID;
  if (!shopId) throw new Error("Missing PRINTIFY_SHOP_ID");

  const res = await printifyFetch(`/shops/${shopId}/products.json`);
  if (!res.ok) throw new Error(`Printify products error: ${res.status}`);
  return res.json();
}
