import HomePage from "../components/HomePage";
import { listProducts } from "../lib/printify";
import ProductDisplayWrapper from "../components/ProductDisplayWrapper";

export default async function Page() {
  const data = await listProducts();

  const items = (data?.data || []).map((p) => ({
    id: p.id,
    title: p.title,
    image: p?.images?.[0]?.src || null,
    images: p?.images || [], 
    priceLabel: "From $XX.XX",
    description: p.description || "No description available.",
  }));

  return (
    <>
      <HomePage />
      <ProductDisplayWrapper items={items} />
    </>
  );
}