import React from "react";
import image1 from "../assets/banner/FEED.png"; // Adjust the path as necessary

const SingleBanner = () => {
  return (
    <div className="w-full mt-4 h-[500px] flex items-center justify-center relative overflow-hidden rounded-lg ">
      {/* Decorative Circles */}
      <div className="absolute w-40 h-40 bg-white opacity-10 rounded-full -top-10 -left-10"></div>
      <div className="absolute w-32 h-32 bg-white opacity-10 rounded-full -bottom-10 -right-10"></div>

      {/* Dog Image */}
      <img
        src={image1}
        alt="Descriptive alt text"
        loading="lazy"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default SingleBanner;
