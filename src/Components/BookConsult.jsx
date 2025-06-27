import React from "react";
import doctorImage from "../assets/consult/Doctor2.jpg"; // replace with actual path
import {
  FaTruck,
  FaSmile,
  FaStethoscope,
  FaPills,
  FaCheckCircle,
  FaMoneyBill,
} from "react-icons/fa";

const BookConsult = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-8 p-6 md:p-12">
        {/* Image + Steps */}
        <div className="md:w-1/2">
          <div className="bg-blue-100 rounded-lg p-4 mb-4 text-center grid grid-cols-3 gap-2 text-sm font-medium text-gray-700">
            <div>Pay & Book the consultation</div>
            <div>Choose Video or Teleconsultation</div>
            <div>Receive prescription after the call</div>
          </div>
          <img
            src={doctorImage}
            alt="Doctor"
            className="rounded-xl w-full object-cover shadow"
          />
        </div>

        {/* Booking Info */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="text-orange-600 font-semibold text-sm mb-1">
              Services
            </h3>
            <h1 className="text-2xl font-bold mb-2">
              Instant Consultation (10 AM to 7 PM)
            </h1>

            <div className="border border-orange-400 rounded-md p-4 mt-4">
              <h2 className="text-lg font-semibold mb-2">Book Consultation</h2>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-green-700">₹299</span>
                <span className="line-through text-gray-500 text-sm">₹499</span>
                <span className="text-green-600 font-semibold text-sm">
                  40% OFF
                </span>
              </div>
            </div>

            <div className="mt-4 border rounded-md px-4 py-3 flex items-center justify-between text-sm font-medium text-gray-700">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                Bank Offers and coupons
              </div>
              <span className="text-orange-600 cursor-pointer">
                Check offers ›
              </span>
            </div>

            <div className="mt-4 space-y-2 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <FaMoneyBill />
                Currently, cash on delivery is not available on this product.
              </div>
              <div className="flex items-center gap-2">
                <FaTruck />
                Free delivery on orders above ₹599
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/9731416417?text=Hello%2C%20I%20want%20to%20book%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-orange-500 text-white text-lg font-semibold py-3 rounded-md shadow hover:bg-orange-600 text-center transition"
          >
            Book via WhatsApp
          </a>
        </div>
      </div>

      {/* Highlight Section (green icons) */}
      <div className="bg-lime-100 py-8 px-4 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-lime-800 font-medium">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-3 mb-2 shadow">
              <FaTruck className="text-2xl" />
            </div>
            <p className="font-semibold">24hr Delivery</p>
            <p className="text-sm">In 24 cities</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-3 mb-2 shadow">
              <FaSmile className="text-2xl" />
            </div>
            <p className="font-semibold">1,50,000+</p>
            <p className="text-sm">Happy pet parents</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-3 mb-2 shadow">
              <FaStethoscope className="text-2xl" />
            </div>
            <p className="font-semibold">Complimentary vet consult</p>
            <p className="text-sm">For every new member</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-3 mb-2 shadow">
              <FaPills className="text-2xl" />
            </div>
            <p className="font-semibold">Pet Pharmacy</p>
            <p className="text-sm">Exclusive</p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-gray-50 px-6 md:px-12 py-10 border-t">
        <h2 className="text-2xl font-bold mb-4">
          What happens after you book a consultation with Vet&Meet?
        </h2>
        <h3 className="text-lg font-semibold mb-2">For One Time</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Consult booking details will be shared on WhatsApp</li>
          <li>
            Get connected with your Pet Relationship Manager on WhatsApp by
            clicking on "Get Started"
          </li>
          <li>
            Your PRM will guide you through the process of connecting with a
            vet.
          </li>
          <li>Receive treatment plan on WhatsApp and Email</li>
        </ul>
        <p className="text-gray-700 text-sm">
          For more details, message us on WhatsApp at{" "}
          <a
            href="https://wa.me/9731416417"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            123456789
          </a>{" "}
          and click on "Schedule a Consult." Our Pet Relationship Manager will
          assist you. 🐾
        </p>
      </div>
    </div>
  );
};

export default BookConsult;
