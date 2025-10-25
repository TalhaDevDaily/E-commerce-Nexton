import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Catagories from "../components/Catagories";
import Recommendation from "../components/Recommendation";
import BestSellers from "../components/BestSellers";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Catagories />
      <Recommendation />
      <BestSellers />
      <Banner />
    </>
  );
};

export default Home;
