import React from "react";

import image1 from "../assets/Brands/brand1.png";
import image2 from "../assets/Brands/brand2.png";
import image3 from "../assets/Brands/brand3.png";
import image4 from "../assets/Brands/brand4.png";

const products = [
  { id: 1, image: image1, title: "Brand 1" },
  { id: 2, image: image2, title: "Brand 2" },
  { id: 3, image: image3, title: "Brand 3" },
  { id: 4, image: image4, title: "Brand 4" },
];

const Brands = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Brands of Focus</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500 cursor-pointer"
            tabIndex={0}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 bg-cover bg-center rounded-t-xl"
            />
            <div className="text-center pb-4 text-sm text-gray-700 font-medium">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Brands;
