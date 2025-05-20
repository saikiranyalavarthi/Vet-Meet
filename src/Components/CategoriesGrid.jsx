import React from "react";

// Import images
import food1 from "../assets/Food/food1.png";
import food2 from "../assets/Food/food2.png";
import food3 from "../assets/Food/food3.png";
import food4 from "../assets/Food/food4.png";
import food5 from "../assets/Food/food5.png";
import food6 from "../assets/Food/food6.png";
import food7 from "../assets/Food/food7.png";
import food8 from "../assets/Food/food8.png";
import food9 from "../assets/Food/food9.png";
import food10 from "../assets/Food/food10.png";
import food11 from "../assets/Food/food11.png";
import food12 from "../assets/Food/food12.png";
import food13 from "../assets/Food/food13.png";
import food14 from "../assets/Food/food14.png";

const categories = [
  { title: "Dog Food", image: food1 },
  { title: "Cat Food", image: food2 },
  { title: "Dog Treats", image: food3 },
  { title: "Cat Treats", image: food4 },
  { title: "Fresh Food", image: food5 },
  { title: "Ice Creams", image: food6 },
  { title: "Prescription Diet", image: food7 },
  { title: "Premium Food", image: food8 },
  { title: "Litter Supplies", image: food9 },
  { title: "Toys", image: food10 },
  { title: "Grooming", image: food11 },
  { title: "Health Care", image: food12 },
  { title: "Walk & Travel", image: food13 },
  { title: "Accessories", image: food14 },
];

const CategoriesGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-6 text-center">
        Popular categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className=" bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition transform duration-200"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-46 object-cover"
            />
            <div className="p-2 text-center">
              <p className="text-sm font-bold font-serif">{category.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesGrid;
