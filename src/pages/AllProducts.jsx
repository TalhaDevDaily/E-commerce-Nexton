import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import { useLocation } from "react-router";

const AllProducts = () => {
  const pageLocation = useLocation();
  const currentPage = pageLocation.pathname.split("/")[1].split("-").join(" ");

  return (
    <div className="container">
      <BreadCrumbs pageName={currentPage} />
    </div>
  );
};

export default AllProducts;
