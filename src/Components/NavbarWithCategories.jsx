import React, { useState } from "react";
import {
  FaUser,
  FaShoppingCart,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const categories = [
  {
    name: "Cats",
    subCategories: [
      "Food",
      "Toys",
      "Grooming",
      "Accessories",
      "Creamy Treats",

      "Jerky Treats",
      "Crunchy Treats",
      "Kitty Licks",
      "Kittos",

      "Dry Food",
      "Wet Food",
      "Kitten Food",
      "Premium Food",
      "Cat Treats",
      "Creamy Treats",
      "Jerky Treats",
      "Crunchy Treats",
      "Kitty Licks",
      "Kittos",

      "Litter",
      "Litter Boxes & Toilets",
      "Cleaning & Deodorizers",
      "Scooper & Waste Disposal",
      "Scented Litter",
      "Unscented Litter",
      "Flushable Litter",
      "Scoopy #1 Cat Litter",

      "Cat Teasers",
      "Ball & Chaser Toys",
      "Catnip Toys",
      "Plush Toys",
      "Cat Trees & Scratchers",
      "Smart & Interactive Toys",

      "Dewormer",
      "Tick & Fleas",
      "Skin Care",
      "Joint Care",
      "Gut Health",
      "Cardiac Care",
      "Kidney Care",
      "Liver Care",
      "Eye & Ear",
      "Respiratory",
      "Supplements",
      "Prescription Diet",
      "Calming And Anxiety",
      "Oral Care",
      "GPS Tracker",
      "Collars",
      "Leashes",
      "Harnesses",
      "Bells & Tags",
      "Carriers & Travel Supplies",
      "Cages & Crates",
      "Summer Clothing",
      "IPL Jerseys New",
      "Tshirts & Shirts",
      "Bandanas & Bowties",
      "Bells & Tags",
      "Kurtas",
      "Dresses",
      "Lehangas",
      "Jackets & Sweaters",
      "Hoodies",
    ],
  },

  { name: "Dogs", subCategories: ["Leash", "Food", "Training"] },
  { name: "Henlo", subCategories: ["Bird Feed", "Accessories"] },
  { name: "Pharmacy", subCategories: ["Medicines", "Supplements"] },
  { name: "Shop By Breed", subCategories: ["Labrador", "Persian Cat"] },
  { name: "Consult a Vet", subCategories: ["Book Appointment", "Online Chat"] },
  { name: "Vet&Meet Clinic ", subCategories: ["Health Plans", "Checkups"] },
  { name: "Summer Sale", subCategories: ["Discounted Items", "Bundles"] },
];

export default function NavbarWithCategories() {
  const [showModal, setShowModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleModal = () => setShowModal(!showModal);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleCategory = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <>
      {/* TOP NAVBAR */}
      <div
        style={{ backgroundColor: "#FFA500" }}
        className="shadow-md p-4 flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 md:space-x-4 sticky top-0 z-50"
      >
        {/* Left: Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            onClick={toggleDrawer}
            className="md:hidden mr-4 focus:outline-none"
            aria-label="Open Menu"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <h1 className="text-lg font-bold text-white">Vet&Meet</h1>
        </div>

        {/* Middle: Search */}
        <div className="relative flex items-center w-full md:w-1/2 px-2">
          <input
            type="search"
            placeholder="Search for products & brands"
            className="w-full border border-white rounded-md px-4 py-2 pl-10 focus:outline-none"
          />
          <svg
            className="absolute left-5 w-5 h-5 text-gray-500"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42" />
          </svg>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex justify-around w-full md:w-auto space-x-6 md:space-x-4">
          <button className="flex flex-col items-center text-sm text-white hover:text-black">
            <FaUser className="text-xl" />
            <span>Profile</span>
          </button>
          <button
            onClick={toggleModal}
            className="flex flex-col items-center text-sm text-white hover:text-black"
          >
            <FaMapMarkerAlt className="text-xl" />
            <span>Delivery</span>
          </button>
          <a
            href="tel:+18001026886"
            className="flex flex-col items-center text-sm text-white hover:text-black"
          >
            <FaPhoneAlt className="text-xl" />
            <span>Call</span>
          </a>
          <button className="flex flex-col items-center text-sm text-white hover:text-black relative">
            <FaShoppingCart className="text-xl" />
            <span>Cart</span>
            <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
              0
            </span>
          </button>
        </div>
      </div>

      {/* CATEGORY NAV - DESKTOP - STICKY HOVERABLE DROPDOWNS */}
      <nav className="bg-white shadow-md sticky top-0 z-50 hidden md:block ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between sm">
          <div className="hidden md:flex space-x-20 text-gray-800 font-medium">
            {categories.map((cat, index) => (
              <div key={index} className="relative group">
                <button className="hover:text-blue-600">
                  {cat.name} {/* ✅ changed from cat.category */}
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                  <ul className="py-2 text-sm text-gray-700">
                    {cat.subCategories.map(
                      (
                        item,
                        subIndex // ✅ changed from subcategories
                      ) => (
                        <li
                          key={subIndex}
                          className="px-10 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* CATEGORY DRAWER - MOBILE */}
      <div
        className={`fixed inset-0 z-50 transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-amber-500 bg-opacity-40 md:hidden`}
        onClick={toggleDrawer}
      >
        <div
          className="bg-white w-72 h-full p-6 overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <nav>
            {categories.map((cat, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleCategory(index)}
                  className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-blue-600"
                >
                  {cat.name}
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openIndex === index && (
                  <ul className="mt-2 pl-4 space-y-1 text-gray-700">
                    {cat.subCategories.map((sub, i) => (
                      <li
                        key={i}
                        className="cursor-pointer hover:text-blue-600"
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* DELIVERY MODAL */}
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
    </>
  );
}
