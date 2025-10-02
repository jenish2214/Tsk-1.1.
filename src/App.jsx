import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import NewArrivals from "./Components/NewArrivals";
import TopSelling from "./Components/TopSelling";
import Testimonials from "./Components/Testimonials";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import { AutoScrollProvider } from "./contexts/AutoScrollContext";

const App = () => {
  return (
    <AutoScrollProvider>
      <div>
        <Navbar />
        <div >
          <HeroSection />
          <NewArrivals />
          <TopSelling />
          <Testimonials />
          <Newsletter />
          <Footer />
        </div>
      </div>
    </AutoScrollProvider>
  );
};

export default App;
