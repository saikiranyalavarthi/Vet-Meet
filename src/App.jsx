import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import BannerSection from "./Components/BannerSection";
import CategoriesGrid from "./Components/CategoriesGrid";
import HealthProducts from "./Components/HealthProducts";
import HealthTipsSection from "./Components/HealthTipsSection";
import PetFoodList from "./Components/PetFoodList";
import Footer from "./Components/Footer";
import DogBreeds from "./Components/DogBreeds";
import PetBrands from "./Components/PetBrands";
import SingleBanner from "./Components/SingleBanner";
import NavbarWithCategories from "./Components/NavbarWithCategories";
import PetConsultation from "./Components/PetConsultation";
import BookConsult from "./Components/BookConsult";

// Home page layout
const Home = () => {
  return (
    <>
      <NavbarWithCategories />
      <BannerSection />
      <PetBrands />
      <CategoriesGrid />
      <DogBreeds />
      <HealthProducts />
      <SingleBanner />
      <PetFoodList />
      <HealthTipsSection />
      <PetFoodList />
    
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/consult"
          element={
            <>
              <NavbarWithCategories />
              <PetConsultation />
              <Footer />
            </>
          }
        />
        <Route
          path="/BookConsult"
          element={
            <>
              <NavbarWithCategories />
              <BookConsult />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
