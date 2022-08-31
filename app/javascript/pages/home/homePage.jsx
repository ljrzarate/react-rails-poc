import React from "react";
import HeroSection from "../../components/heroSection/heroSection";
import NavBar from "../../components/navbar/navbar";
import Works from "../../components/works/works";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Works />
    </>
  );
};

export default HomePage;
