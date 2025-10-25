import React from "react";
import CommonHeader from "./common/CommonHeader";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import CommonCatagory from "./common/CommonCatagory";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const Catagories = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="catagories my-[88px]">
      <div className="container px-6 lg:px-0">
        <CommonHeader
          firstHalf={"Start exploring."}
          secondHalf={"Good things are waiting for you"}
        />
        <Swiper
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000, // time between slides (ms)
            disableOnInteraction: false, // keep autoplay after user swipes
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            639: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            767: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1023: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          modules={[Pagination]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <CommonCatagory
              catagoryName={`For Men's`}
              catagoryDescription={`Starting at $24`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CommonCatagory
              catagoryName={`For Women's`}
              catagoryDescription={`Starting at $19`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CommonCatagory
              catagoryName={`Accessories`}
              catagoryDescription={`Explore accessories`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CommonCatagory
              catagoryName={`For Men's`}
              catagoryDescription={`Starting at $24`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CommonCatagory
              catagoryName={`For Women's`}
              catagoryDescription={`Starting at $19`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CommonCatagory
              catagoryName={`Accessories`}
              catagoryDescription={`Explore accessories`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CommonCatagory
              catagoryName={`For Men's`}
              catagoryDescription={`Starting at $24`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CommonCatagory
              catagoryName={`For Women's`}
              catagoryDescription={`Starting at $19`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CommonCatagory
              catagoryName={`Accessories`}
              catagoryDescription={`Explore accessories`}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Catagories;
