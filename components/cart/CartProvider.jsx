"use client";

import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";

const CartContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "LOAD":
      return action.payload || state;

    case "ADD": {
      const { item } = action;
      const existing = state.items.find((x) => x.id === item.id);
      const items = existing
        ? state.items.map((x) => (x.id === item.id ? { ...x, qty: x.qty + 1 } : x))
        : [...state.items, { ...item, qty: 1 }];
      return { ...state, items };
    }

    case "REMOVE":
      return { ...state, items: state.items.filter((x) => x.id !== action.id) };

    case "CLEAR":
      return { ...state, items: [] };

    default:
      return state;
  }
}

const initial = { items: [] };

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);
  const [initialized, setInitialized] = React.useState(false);

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem("hooded_cart_v1");
      if (raw) dispatch({ type: "LOAD", payload: JSON.parse(raw) });
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    } finally {
      setInitialized(true);
    }
  }, []);

  React.useEffect(() => {
    if (initialized) {
      try {
        localStorage.setItem("hooded_cart_v1", JSON.stringify(state));
      } catch (e) {
        console.error("Failed to save cart to localStorage", e);
      }
    }
  }, [state, initialized]);

  const api = useMemo(
    () => ({
      cart: state,
      add: (item) => dispatch({ type: "ADD", item }),
      remove: (id) => dispatch({ type: "REMOVE", id }),
      clear: () => dispatch({ type: "CLEAR" }),
    }),
    [state]
  );

  if (!initialized) {
    return null; // Or a loading spinner
  }

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider />");
  return ctx;
}
