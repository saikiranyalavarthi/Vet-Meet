import { useState } from "react";

const categories = [
  {
    name: "Cats",
    isCustom: true,
    subCategories: [
      "Cat Food",
      "Cat Toys",
      "Pharmacy",
      "Walk & Travel Essentials",
      "Dog Toys & Clothing",
      "Grooming & Beds",
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

export default function CategoryNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleCategory = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md flex items-center px-4 py-3 md:px-8 md:py-4">
        {/* Hamburger only visible on mobile */}
        <button
          onClick={toggleDrawer}
          className="md:hidden mr-4 focus:outline-none"
          aria-label="Open Menu"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6 text-gray-800"
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

        {/* Categories on desktop */}
        <div className="hidden md:flex gap-12">
          {categories.map((cat, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="text-gray-800 font-medium hover:text-blue-600 focus:outline-none"
              >
                {cat.name}
              </button>
              {openIndex === index && (
                <div className="absolute z-10 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                  <ul className="py-2 text-sm text-gray-700">
                    {cat.subCategories?.map((item, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Drawer for mobile */}
      <div
        className={`fixed inset-0 z-50 transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-black bg-opacity-40 md:hidden`}
        onClick={() => setDrawerOpen(false)}
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
                  className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-blue-600 focus:outline-none"
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
                    {cat.subCategories?.map((sub, i) => (
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
    </>
  );
}
