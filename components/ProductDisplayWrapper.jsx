'use client';

import React, { useState } from 'react';
import ProductGrid from "./ProductGrid";
import ProductDetailPopup from "./ProductDetailPopup";

export default function ProductDisplayWrapper({ items }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const openProductPopup = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const closeProductPopup = () => {
    setSelectedProduct(null);
    setShowPopup(false);
  };

  return (
    <>
      <ProductGrid openProductPopup={openProductPopup} items={items} />
      {showPopup && selectedProduct && (
        <ProductDetailPopup product={selectedProduct} onClose={closeProductPopup} />
      )}
    </>
  );
}
