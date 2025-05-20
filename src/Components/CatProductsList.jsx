import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SmallNavbar from "./Catsitems";

// Placeholder components for routes
const CatsPage = () => <div className="p-6">Welcome to Cats Products</div>;
const DogsPage = () => <div className="p-6">Welcome to Dogs Products</div>;
const PharmacyPage = () => <div className="p-6">Welcome to Pharmacy</div>;
const ShopByBreedPage = () => <div className="p-6">Shop By Breed</div>;
const ConsultVetPage = () => <div className="p-6">Consult a Vet</div>;
const ClinicPage = () => <div className="p-6">VET&MEET Clinic</div>;
const SummerSalePage = () => <div className="p-6">New Summer Sale</div>;

function CatProductsList() {
  return (
    <Router>
      <SmallNavbar />
      <Routes>
        <Route path="/cats" element={<CatsPage />} />
        <Route path="/dogs" element={<DogsPage />} />
        <Route path="/pharmacy" element={<PharmacyPage />} />
        <Route path="/shop-by-breed" element={<ShopByBreedPage />} />
        <Route path="/consult-vet" element={<ConsultVetPage />} />
        <Route path="/clinic" element={<ClinicPage />} />
        <Route path="/summer-sale" element={<SummerSalePage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default CatProductsList;
