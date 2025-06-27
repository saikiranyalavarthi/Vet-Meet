import React from "react";
import { FaAllergies, FaBug, FaCloud } from "react-icons/fa";
import petImage from "../assets/consult/Petbannernew.jpg"; // Your image path
import image1 from "../assets/consult/image1.jpeg"; // Example image path
import image2 from "../assets/consult/image2.png"; // Example image path
import image3 from "../assets/consult/image3.jpeg"; // Example image path

const PetHealthSection = () => {
  return (
    <div className="bg-[#f0fffc] py-10 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Are these issues affecting your pet?
      </h2>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left - Image with tags */}
        <div className="relative flex-1 bg-white shadow-md rounded-xl overflow-hidden max-w-[550px] mx-auto">
          <img src={petImage} alt="Pets" className="w-full object-cover" />

          {/* Shedding Tag */}
          <div className="absolute bottom-10 left-4 bg-[#d1edf1] px-4 py-2 rounded-md flex items-center space-x-2">
            <FaCloud className="text-black text-lg" />
            <span className="font-medium">Shedding</span>
          </div>

          {/* Kennel Cough Tag */}
          <div className="absolute top-10 left-1/6 -translate-x-1/2 bg-[#d1edf1] px-4 py-2 rounded-md flex items-center space-x-2">
            <FaAllergies className="text-black text-lg" />
            <span className="font-medium">Kennel Cough</span>
          </div>

          {/* Fleas Tag */}
          <div className="absolute bottom-10 right-4 bg-[#d1edf1] px-4 py-2 rounded-md flex items-center space-x-2">
            <FaBug className="text-black text-lg" />
            <span className="font-medium">Fleas</span>
          </div>
        </div>

        {/* Right - Articles */}
        <div className="flex-1 space-y-6">
          <h3 className="text-xl font-semibold">
            Explore solutions by our experts
          </h3>

          {/* Article 1 */}
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
            <img
              src={image1}
              alt="Dog 1"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <p className="font-medium text-gray-700">
                Everything you need to know about vaccinating your pet?
              </p>
              <a href="#" className="text-black font-semibold hover:underline">
                Read more
              </a>
            </div>
          </div>

          {/* Article 2 */}
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
            <img
              src={image2}
              alt="Dog 2"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <p className="font-medium text-gray-700">
                How to identify and remove ticks from your dog?
              </p>
              <a href="#" className="text-black font-semibold hover:underline">
                Read more
              </a>
            </div>
          </div>

          {/* Article 3 */}
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
            <img
              src={image3}
              alt="Dog 3"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <p className="font-medium text-gray-700">
                3 best ways to improve the dental health of your pet?
              </p>
              <a href="#" className="text-black font-semibold hover:underline">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetHealthSection;
