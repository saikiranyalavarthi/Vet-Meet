import React from "react";

import dog2 from "../assets/Dogs/Dog2.png";
import dog3 from "../assets/Dogs/Dog3.png";
import dog4 from "../assets/Dogs/Dog4.png";
import dog5 from "../assets/Dogs/Dog5.png";
import dog6 from "../assets/Dogs/Dog6.png";
import dog7 from "../assets/Dogs/Dog7.jpg";

const dogImages = [
  { src: dog2, title: "Happy Hound" },
  { src: dog3, title: "Curious Canine" },
  { src: dog4, title: "Loyal Friend" },
  { src: dog5, title: "Sunny Stroll" },
  { src: dog6, title: "Park Explorer" },
  { src: dog7, title: "Puppy Eyes" },
];

const DogBreeds = () => {
  return (
    <div className="p-4 md:p-6 mx-4 md:mx-22">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
        Explore by Pets
      </h1>

      <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory">
        <div className="flex space-x-4 md:space-x-10 mx-0.5 md:mx-[200px]">
          {dogImages.map((dog, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-56 md:w-[195px] rounded-xl overflow-hidden shadow-lg "
            >
              <img
                src={dog.src}
                alt={dog.title}
                className="w-full h-65 md:h-60 object-cover"
              />
              <div className="p-2 text-center font-semibold text-sm text-gray-700">
                {dog.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DogBreeds;
