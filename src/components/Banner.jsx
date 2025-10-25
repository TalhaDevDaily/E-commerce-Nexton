import React from "react";
import bannerImg from "../assets/images/banner-container.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section id="banner" className="my-[52px]">
      <div className="container">
        <Link to={"#"}>
          <img src={bannerImg} alt="Banner Image" className="w-full" />
        </Link>
      </div>
    </section>
  );
};

export default Banner;
