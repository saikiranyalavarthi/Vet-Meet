import React from "react";
import desktopImage from "../assets/banner/FEED.png";
import mobileImage from "../assets/banner/MFEED.png";

const SingleBanner = () => {
  return (
    <div className="w-full mt-0.5 h-[400px] sm:h-[300px] md:h-[500px] flex items-center justify-center relative overflow-hidden rounded-lg">
      {/* Decorative Circles */}
      <div className="absolute w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white opacity-10 rounded-full -top-8 -left-8"></div>
      <div className="absolute w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white opacity-10 rounded-full -bottom-8 -right-8"></div>

      {/* Mobile Image */}
      <img
        src={mobileImage}
        alt="Mobile Banner"
        className="block md:hidden w-full h-full object-cover px-2"
      />

      {/* Desktop Image */}
      <img
        src={desktopImage}
        alt="Desktop Banner"
        className="hidden md:block w-full h-full object-contain px-4"
      />
    </div>
  );
};

export default SingleBanner;
