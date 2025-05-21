import React, { useState } from "react";
import {
  FaUser,
  FaShoppingCart,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div
      style={{ backgroundColor: "#FFA500" }}
      className="shadow-md p-4 flex justify-between items-center"
    >
      {/* Menu Button */}
      <button className="p-2">
        <svg
          className="w-6 h-6 text-black"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 15h51" />
          <path d="M7 32h51" />
          <path d="M7 49h51" />
        </svg>
      </button>

      <img src="../assets/logos/meet.jpg" alt="Vet&Meet" />

      {/* <h1>VET&MEET</h1> */}

      {/* Search Bar */}
      <div className="relative flex items-center w-1/2 mx-4">
        <input
          type="search"
          placeholder="Search for products & brands"
          className="w-full border border-gray-300 rounded-md px-4 py-2 pl-10 focus:outline-none"
        />
        <svg
          className="absolute left-3 w-5 h-5 text-gray-500"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42" />
        </svg>
      </div>

      {/* Action Icons */}
      <div className="flex items-center space-x-4">
        {/* Profile */}
        <button className="flex flex-col items-center text-sm text-white hover:text-black">
          <FaUser className="text-xl" />
          <span>Profile</span>
        </button>

        {/* Delivery */}
        <button
          onClick={toggleModal}
          className="flex flex-col items-center text-sm text-white hover:text-black"
        >
          <FaMapMarkerAlt className="text-xl" />
          <span>Delivery</span>
        </button>

        {/* Call */}
        <a
          href="tel:+18001026886"
          className="flex flex-col items-center text-sm text-white hover:text-black"
        >
          <FaPhoneAlt className="text-xl" />
          <span>Call</span>
        </a>

        {/* Cart */}
        <button className="flex flex-col items-center text-sm text-white hover:text-black relative">
          <FaShoppingCart className="text-xl" />
          <span>Cart</span>
          {/* Optional cart count */}
          <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
            0
          </span>
        </button>
      </div>

      {/* Delivery Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-80">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Enter Pincode</h2>
              <button onClick={toggleModal} className="text-red-500 text-xl">
                &times;
              </button>
            </div>
            <input
              id="pincodeInput"
              type="number"
              placeholder="Enter Pincode"
              className="w-full border border-orange-500 rounded-md px-4 py-2"
            />
            <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
