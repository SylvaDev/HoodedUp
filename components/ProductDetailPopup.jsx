'use client';

import React, { useState } from 'react';

const ProductDetailPopup = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const displayedImage = product.images[currentImageIndex]?.src || product.image;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4 ">
      <div className="relative bg-hooded-charcoal rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-hooded-ice/70 hover:text-hooded-neon text-2xl font-bold  "
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 relative  ">
            <img
              src={displayedImage}
              alt={product.title}
              className="w-full h-auto rounded-lg object-cover shadow-lg"
            />
            {product.images.length > 1 && (
              <div className="absolute inset-y-0 left-0 flex items-center  ">
                <button
                  onClick={handlePrevImage}
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full ml-2 hover:bg-opacity-75 transition duration-300"
                >
                  &#10094;
                </button>
              </div>
            )}
            {product.images.length > 1 && (
              <div className="absolute inset-y-0 right-0 flex items-center  ">
                <button
                  onClick={handleNextImage}
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full mr-2 hover:bg-opacity-75 transition duration-300"
                >
                  &#10095;
                </button>
              </div>
            )}
          </div>

          <div className="md:w-1/2 ">
            <h2 className="text-4xl font-bold mb-4 text-hooded-neon ">{product.title}</h2>
            <p className="text-2xl text-hooded-ice/80 mb-4  ">${product.priceLabel.replace("From ", "").replace("XX.XX", "0.00")}</p>
            <p className="text-hooded-ice/70 leading-relaxed mb-6  ">{product.description}</p>
            <button className="bg-hooded-electric text-hooded-charcoal px-6 py-3 rounded-lg shadow-lg hover:bg-hooded-neon transition duration-300 ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPopup;