import React from "react";
// import Navbar from "./Components/Navbar";
// import CatProductsList from "./Components/CatProductsList";
import BannerSection from "./Components/BannerSection";
// import CategoryNav from "./Components/CategoryNav";
// import Brands from "./Components/Brands";
import PetSection from "./Components/PetBrands";
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
      {/* <Navbar />
      <CategoryNav /> */}
      <NavbarWithCategories />
      {/* <CatProductsList /> */}
      <BannerSection />
      {/* <Brands /> */}
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
