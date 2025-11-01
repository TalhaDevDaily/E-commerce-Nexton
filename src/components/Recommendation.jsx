import React, { useEffect, useState } from "react";
import CommonHeader from "./common/CommonHeader";
import CommonProductCard from "./common/CommonProductCard";
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

// importing js cookies
import Cookies from "js-cookie";
import { Bounce, toast } from "react-toastify";

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

  // 16 characters of random numbers and strings generator for cookies
  function generateRandomString(length = 16) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }

    return result;
  }

  // Example usage:
  // console.log(generateRandomString()); // e.g. "a9Xb3Kp7LmQ2zR1T"
  // console.log(generateRandomString(20)); // e.g. "Zx8mP4qR7nT2vL5sYw1k"

  // Set those random numbers generated above to the cookies
  Cookies.set("userId", generateRandomString(), { expires: 1 });

  // All product IDs are collected here for Add Cart
  const productArray = [];

  const handleAddCart = (productId) => {
    const productObjFormat = {
      id: productId,
      quantity: 1,
    };

    productArray.push(productObjFormat);

    axios
      .post("https://dummyjson.com/carts/add", {
        userId: 1,
        products: productArray,
      })
      .then((res) => {
        toast.success("Yay! Added to Cart 🎉🎊", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((err) => console.log(err));
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
                  cartClick={() => handleAddCart(singleProduct.id)}
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
