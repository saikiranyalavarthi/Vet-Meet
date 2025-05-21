import React from "react";

// Import images

import dog2 from "../assets/dogs/dog2.png";
import dog3 from "../assets/dogs/dog3.png";
import dog4 from "../assets/dogs/dog4.png";
import dog5 from "../assets/dogs/dog5.png";
import dog6 from "../assets/dogs/dog6.png";
import dog7 from "../assets/dogs/dog7.jpg";

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
    <div className="p-6 mx-22">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Explore by Pets
      </h1>

      <div className="overflow-x-auto">
        <div className="whitespace-nowrap">
          {dogImages.map((dog, index) => (
            <div
              key={index}
              className="inline-block w-[200px] mr-4 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={dog.src}
                alt={dog.title}
                className="w-full h-60 object-cover"
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
