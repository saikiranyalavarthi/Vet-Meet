import { useState, useEffect } from "react";

import image1 from "../assets/banner/image1.png";
import image2 from "../assets/banner/image2.png";
import image3 from "../assets/banner/image3.png";
import image4 from "../assets/banner/image4.png";
import image5 from "../assets/banner/image5.png";
import image6 from "../assets/banner/image6.png";

function BannerSection() {
  const banners = [image1, image2, image3, image4, image5, image6];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next banner
  const nextBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  // Function to go to the previous banner
  const prevBanner = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  // Auto play using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      nextBanner();
    }, 3000); // Change every 3 seconds

    // Clear interval on unmount
    return () => clearInterval(interval);
  }, [currentIndex]); // You can also just use [] to run once

  return (
    <div className="relative">
      {/* Banner image */}
      <div
        className="w-full h-110 bg-cover
         bg-center mt-5 bg-no-repeat"
        style={{ backgroundImage: `url(${banners[currentIndex]})` }}
      >
        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex justify-between items-center px-4">
          {/* Previous Button */}
          <button
            className="bg-white text-black p-2 rounded-full shadow-lg lg:block hidden"
            onClick={prevBanner}
            aria-label="Previous Banner"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7M19 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            className="bg-white text-black p-2 rounded-full shadow-lg lg:block hidden"
            onClick={nextBanner}
            aria-label="Next Banner"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;
