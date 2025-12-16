"use client";

import { Auth0Provider } from "@auth0/nextjs-auth0/client";
import { CartProvider } from "../components/cart/CartProvider";

export default function Providers({ children }) {
  return (
    <Auth0Provider>
      <CartProvider>{children}</CartProvider>
    </Auth0Provider>
  );
}
