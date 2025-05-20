import { Link } from "react-router-dom";
import { useState } from "react";

const Catsitems = () => (
  <div className="absolute top-full left-0 w-[1300px] bg-white shadow-xl border rounded-md z-50">
    <div className="max-h-[700px] overflow-y-auto p-6 grid grid-cols-6 gap-6 text-sm">
      {/* Column 1 - Cat Food */}
      <div>
        <h3 className="font-bold mb-2">Cat Food</h3>
        <ul className="space-y-1">
          <li>Dry Food</li>
          <li>Wet Food</li>
          <li>Grain Free</li>
          <li>Prescription Diet</li>
        </ul>
      </div>

      {/* Column 2 - Cat Toys + Dog Food & Treats */}
      <div>
        <h3 className="font-bold mb-2">Cat Toys</h3>
        <ul className="space-y-1 mb-4">
          <li>Interactive Toys</li>
          <li>Feather Toys</li>
          <li>Treat Toys</li>
        </ul>

        <h3 className="font-bold mb-2">Dog Food</h3>
        <ul className="space-y-1">
          <li>Dry Food</li>
          <li>Wet Food</li>
          <li>Puppy Food</li>
          <li>Grain Free Food</li>
          <li>Baked Dry Food</li>
          <li>Veg Dog Food</li>
          <li>Premium Dog Food</li>
          <li>Prescription Diet</li>
        </ul>

        <h3 className="font-bold mt-4 mb-2">Dog Treats & Chews</h3>
        <ul className="space-y-1">
          <li>Biscuits & Cookies</li>
          <li>Bones & Chews</li>
          <li>Dental Treats</li>
          <li>Jerky Treats</li>
          <li>Training Treats</li>
          <li>Calcium Bones</li>
        </ul>
      </div>

      {/* Column 3 - Pharmacy */}
      <div>
        <h3 className="font-bold mb-2">Pharmacy</h3>
        <ul className="space-y-1">
          <li>Prescription Diet</li>
          <li>Dewormer</li>
          <li>Tick & Flea</li>
          <li>Skin Care</li>
          <li>Joint Care</li>
          <li>Gut Health</li>
          <li>Cardiac Care</li>
          <li>Kidney Care</li>
          <li>Liver Care</li>
          <li>Eye & Ear Care</li>
          <li>Vitamins & Supplements</li>
        </ul>
      </div>

      {/* Column 4 - Walk & Travel Essentials */}
      <div>
        <h3 className="font-bold mb-2">Walk & Travel Essentials</h3>
        <ul className="space-y-1">
          <li>Collars</li>
          <li>Leashes</li>
          <li>Harnesses</li>
          <li>GPS Tracker</li>
          <li>Carriers & Travel Supplies</li>
          <li>Cages & Crates</li>
          <li>Accessories</li>
        </ul>
      </div>

      {/* Column 5 - Dog Toys & Clothing */}
      <div>
        <h3 className="font-bold mb-2">Dog Toys</h3>
        <ul className="space-y-1 mb-4">
          <li>Chew Toys</li>
          <li>Interactive Toys</li>
          <li>Plush Toys</li>
          <li>Rope & Tug Toys</li>
          <li>Ball & Fetch Toys</li>
          <li>Squeaky Toys</li>
          <li>Treat Dispensing Toys</li>
        </ul>

        <h3 className="font-bold mb-2">Dog Clothing</h3>
        <ul className="space-y-1">
          <li>Summer Wear</li>
          <li className="text-green-600 font-medium">
            IPL Jerseys{" "}
            <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded ml-1">
              New
            </span>
          </li>
          <li>Tshirts & Shirts</li>
          <li>Ethnic Wear</li>
          <li>Bandanas & Bow-ties</li>
          <li>Boots & Socks</li>
          <li>Raincoat</li>
          <li>Jackets</li>
          <li>Sweaters</li>
          <li>Winter Wear</li>
        </ul>
      </div>

      {/* Column 6 - Grooming & Beds */}
      <div>
        <h3 className="font-bold mb-2">Grooming & Beds</h3>
        <ul className="space-y-1">
          <li>Shampoos</li>
          <li>Brushes & Combs</li>
          <li>Tick & Flea Solutions</li>
          <li>Deodorants</li>
          <li>Towels & Wipes</li>
          <li>Training Pads</li>
          <li>Pet Cleaners</li>
          <li>Beds</li>
          <li>Mats</li>
          <li>Furniture</li>
          <li>Luxury Collection</li>
        </ul>
      </div>
    </div>
  </div>
);

export default function SmallNavbar() {
  const [showCatDropdown, setShowCatDropdown] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium relative">
            {/* Cats Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowCatDropdown(true)}
              onMouseLeave={() => setShowCatDropdown(false)}
            >
              <button className="hover:text-blue-500">Cats</button>
              {showCatDropdown && <CatDropdownContent />}
            </div>

            {/* Other Menu Links */}
            <Link to="/dogs" className="hover:text-blue-500">
              Dogs
            </Link>

            <Link to="/pharmacy" className="hover:text-blue-500">
              Henlo Pharmacy
            </Link>
            <Link to="/shop-by-breed" className="hover:text-blue-500">
              Shop By Breed
            </Link>
            <Link to="/consult-vet" className="hover:text-blue-500">
              Consult a Vet
            </Link>
            <Link to="/clinic" className="hover:text-blue-500">
              VET&MEET Clinic
            </Link>
            <Link
              to="/summer-sale"
              className="hover:text-red-500 font-semibold"
            >
              New Summer Sale
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
