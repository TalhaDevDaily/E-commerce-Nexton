import React, { useEffect, useState } from "react";
import CommonHeader from "./common/CommonHeader";
import CommonProductCard from "./common/CommonProductCard";
import Slider from "react-slick";
import axios, { Axios } from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router";

const Recommendation = () => {
  const [allProducts, setAllProducts] = useState([]);

  const productNavigation = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setAllProducts(res.data.products))
      .catch((error) => console.log(error));
  }, []);

  // ------------- Product Details Handler
  const handleDetails = (productDetails) => {
    productNavigation(`/product-details/${productDetails}`);
  };

  return (
    <section>
      <div className="container px-6 lg:px-0">
        <CommonHeader
          firstHalf={"Recommendations."}
          secondHalf={"Best matching products for you"}
        />

        <div className="recommendationCatalogue mt-10">
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
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {allProducts.map((singleProduct) => (
              <SwiperSlide key={singleProduct.id}>
                <CommonProductCard
                  productImg={singleProduct.thumbnail}
                  productTitle={singleProduct.title}
                  productPrice={singleProduct.price}
                  productCategory={singleProduct.category}
                  priceBeforeDiscount={singleProduct.discountPercentage}
                  productRating={singleProduct.rating}
                  inStock={singleProduct.stock}
                  clickDetails={() => handleDetails(singleProduct.id)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
