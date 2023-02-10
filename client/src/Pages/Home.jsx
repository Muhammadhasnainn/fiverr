import React from "react";
import Address from "../Components/Address";
import Hero from "../Components/Hero";
import RowSection from "../Components/RowSection";
import Services from "../Components/Services";
import img1 from "../images/Progetto-Gaif-Tower.webp";
import img2 from "../images/mobile-network-cell-tower.jpg";
import HowWorks from "../Components/HowWorks";
import OurTeam from "../Components/OurTeam";

const Home = () => {
  return (
    <div>
      <Hero />
      <Address />
      <Services />
      <RowSection
        direction="flex-row"
        heading="Fai la cosa giusta, e produci energia pulita"
        img={img1}
      />
      <RowSection
        direction="flex-row-reverse"
        heading="Sunprime ti offre una soluzione sostenibile, moderna e a costo zero"
        img={img2}
      />
      <HowWorks />
      <OurTeam />
    </div>
  );
};

export default Home;
