import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Link } from "react-router";
import hero from "../assets/images/hero.png";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <div className="slider-container hero-slider hidden lg:block">
        <Slider {...settings}>
          <div>
            <Link to={"/"}>
              <img className="w-full" src={hero} alt="Hero Background" />
            </Link>
          </div>
          <div>
            <Link to={"/"}>
              <img className="w-full" src={hero} alt="Hero Background" />
            </Link>
          </div>
          <div>
            <Link to={"/"}>
              <img className="w-full" src={hero} alt="Hero Background" />
            </Link>
          </div>
        </Slider>
      </div>

      {/* Mobile Hero Section */}
      <div className="pt-[163px] pb-[199px] bg-bg-grey lg:hidden mobo-hero-slider">
        <div className="container px-6 lg:px-0">
          <Slider {...settings}>
            <div>
              <h2 className="text-sm font-medium text-body-text">
                Starting from: $49.99
              </h2>
              <h1 className="text-[30px] font-semibold text-body-text text-primary w-[312px] mt-2 mb-10">
                Exclusive collection for everyone
              </h1>

              <button className="py-3 px-6 bg-primary text-white rounded-full text-sm text-white flex items-center gap-2">
                Explore now
                <CiSearch className="text-xl" />
              </button>
            </div>

            <div>
              <h2 className="text-sm font-medium text-body-text">
                Starting from: $49.99
              </h2>
              <h1 className="text-[30px] font-semibold text-body-text text-primary w-[312px] mt-2 mb-10">
                Exclusive collection for everyone
              </h1>

              <button className="py-3 px-6 bg-primary text-white rounded-full text-sm text-white flex items-center gap-2">
                Explore now
                <CiSearch className="text-xl" />
              </button>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Hero;
