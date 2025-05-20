import React from "react";
import Navbar from "./Components/Navbar";
// import CatProductsList from "./Components/CatProductsList";
import BannerSection from "./Components/BannerSection";
import CategoryNav from "./Components/CategoryNav";
// import Brands from "./Components/Brands";
import PetSection from "./Components/PetSection";
import CategoriesGrid from "./Components/CategoriesGrid";
import HealthProducts from "./Components/HealthProducts";

const App = () => {
  return (
    <div>
      <Navbar />
      <CategoryNav />
      {/* <CatProductsList /> */}
      <BannerSection />
      {/* <Brands /> */}
      <PetSection />
      <CategoriesGrid />
      <HealthProducts />
    </div>
  );
};

export default App;
