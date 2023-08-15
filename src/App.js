import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Contact from "./components/Contact";
import plantData from "./PlantData";
import Footer from "./components/Footer";

export default function App() {
  const plants = plantData.map((plant) => {
    return (
      <Contact
        image={plant.image}
        name={plant.name}
        price={plant.price}
        origin={plant.origin}
        openSpot={plant.openSpot}
      />
    );
  });
  return (
    <div>
      <Header />
      <MainContent />
      <div className="flex flex-row">{plants}</div>
      <Footer />
    </div>
  );
}
