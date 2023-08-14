import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Indoor1 from "./images/indoor3.png";
import Indoor2 from "./images/indoor4.png";
import Indoor3 from "./images/indoor5.png";

export default function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <div className="flex flex-row">
        <Contact
          image={Indoor1}
          name="Simple Style Plant Pot Green Plant Decorative Pot"
          price="150000"
        />
        <Contact
          image={Indoor2}
          name="Simple Style Plant Pot Green Plant Decorative Pot"
          price="150000"
        />
        <Contact
          image={Indoor3}
          name="Simple Style Plant Pot Green Plant Decorative Pot"
          price="150000"
        />
      </div>
      <Footer />
    </div>
  );
}
