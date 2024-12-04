import React from "react";
import Banner from "../components/Banner";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";
import DiscountAnnouncement from "../components/DiscountAnnouncement"; // Importa el componente

function Home() {
  return (
    <div>
      <Banner />
      <DiscountAnnouncement /> {/* Inserta el componente aquí */}
      <FeaturedProducts />
      <Testimonials />
    </div>
  );
}

export default Home;
