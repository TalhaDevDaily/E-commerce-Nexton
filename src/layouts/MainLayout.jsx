import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";

const MainLayout = () => {
  return (
    <>
      <MobileNav />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
