import React from "react";

import BannerSection from "./Components/BannerSection";

// import Brands from "./Components/Brands";

import CategoriesGrid from "./Components/CategoriesGrid";
import HealthProducts from "./Components/HealthProducts";
import HealthTipsSection from "./Components/HealthTipsSection";
import PetFoodList from "./Components/PetFoodList";
import Footer from "./Components/Footer";
import DogBreeds from "./Components/DogBreeds";
import PetBrands from "./Components/PetBrands";
import SingleBanner from "./Components/SingleBanner";
import NavbarWithCategories from "./Components/NavbarWithCategories";

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
