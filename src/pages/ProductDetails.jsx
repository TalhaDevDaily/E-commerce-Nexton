import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import CommonHeader from "../components/common/CommonHeader";
import { BsStars } from "react-icons/bs";
import CommonProductCard from "../components/common/CommonProductCard";
import { useParams } from "react-router";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import BreadCrumbs from "../components/BreadCrumbs";
import { Bounce, toast } from "react-toastify";

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState([]);

  const [overviewImg, setOverviewImg] = useState([]);

  const [allProducts, setAllProducts] = useState([]);

  const paramsData = useParams();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // ---------------- Fetching single product from DummyJSON
    axios
      .get(`https://dummyjson.com/products/${paramsData.product}`)
      .then((res) => {
        setSingleProduct(res.data), setOverviewImg(res.data.images?.[0]);
      })
      .catch((error) => console.log(error));

    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setAllProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  // Category-based products filtered
  const productCategory = allProducts.filter(
    (item) => item?.category === singleProduct?.category
  );

  // console.log(singleProduct);

  return (
    <>
      <div className="container px-6 lg:px-0">
        <BreadCrumbs
          pageName={`Product Overview / ${singleProduct?.category} / ${singleProduct?.title}`}
        />
        <div className="flex lg:justify-between flex-col lg:flex-row">
          <div>
            {/* Skeleton Loader */}
            {singleProduct ? (
              <div className="productGallery flex gap-6 items-center border-b border-border pb-[52px] mb-[52px]">
                <div className="flex flex-col gap-4">
                  {singleProduct.images?.map((item, i) => (
                    <button
                      onClick={function () {
                        setOverviewImg(item);
                      }}
                      key={i}
                      className="w-[140px] h-[157.5px] rounded-2xl overflow-hidden"
                    >
                      <img
                        src={item}
                        className="w-full h-full object-cover object-center"
                        alt="Cat"
                      />
                    </button>
                  ))}
                </div>
                <div className="w-[640px] h-[678px]">
                  <img
                    src={overviewImg}
                    className="w-full h-full object-cover object-center"
                    alt="Product Image"
                  />
                </div>
              </div>
            ) : (
              <div className="bg-white productGallery flex gap-6 items-center border-b border-gray-300 pb-[52px] mb-[52px]">
                <div className="flex flex-col gap-4">
                  <button className="w-[140px] h-[157.5px] rounded-2xl overflow-hidden bg-gray-200 animate-pulse"></button>
                  <button className="w-[140px] h-[157.5px] rounded-2xl overflow-hidden bg-gray-200 animate-pulse"></button>
                  <button className="w-[140px] h-[157.5px] rounded-2xl overflow-hidden bg-gray-200 animate-pulse"></button>
                </div>
                <div className="w-[640px] h-[678px] bg-gray-300 animate-pulse"></div>
              </div>
            )}

            <CommonHeader firstHalf={singleProduct?.title} />
          </div>
          {/* -------------Product Variants and Quantities */}
          <div className="w-[460px] h-fit p-[33px] border border-border rounded-2xl">
            <div className="flex justify-between items-start">
              <div className="productReview flex items-center gap-1 h-fit">
                <FaStar className="text-[#FBBF24]" />
                <p className="font-semibold text-base text-body-text">
                  {singleProduct.rating} . &ensp;
                  <span className="font-medium underline">
                    {singleProduct.reviews?.length} reviews
                  </span>
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-primary">
                  ${singleProduct.price}
                </h2>
                <p className="text-sm font-medium text-body-text line-through text-end">
                  $
                  {(
                    ((100 + singleProduct.discountPercentage) / 100) *
                    singleProduct.price
                  ).toFixed(2)}
                </p>
              </div>
            </div>

            {/* ------------- Product Size */}
            <div className="sizeBox">
              <h2 className="text-base font-semibold text-primary">
                Size: {"S"}
              </h2>
              <div className="sizeButtonBox mt-3 mb-8 flex gap-[8.5px]">
                <button className="w-[72px] h-[44px] border border-border rounded-[12px] flex justify-center items-center">
                  S
                </button>
                <button className="w-[72px] h-[44px] border border-border rounded-[12px] flex justify-center items-center">
                  M
                </button>
                <button className="w-[72px] h-[44px] border border-border rounded-[12px] flex justify-center items-center">
                  XL
                </button>
                <button className="w-[72px] h-[44px] border border-border rounded-[12px] flex justify-center items-center">
                  2XL
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="productQuantity flex justify-between">
              <div className="counter py-2 px-3 rounded-full bg-bg-grey flex gap-4 items-center">
                <button
                  onClick={
                    quantity == 1
                      ? () =>
                          toast("Can't go lower than 1", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                          })
                      : () => setQuantity(quantity - 1)
                    // if (quantity == 1) {
                    //   alert("Minimum Quantity 1");
                    // } else {
                    //   () => setQuantity(quantity - 1);

                    // }
                  }
                  className="w-6 h-6 rounded-full border border-border bg-white flex justify-center items-center text-primary text-[18px]"
                >
                  -
                </button>

                <h2 className="text-base font-medium text-body-text">
                  {quantity}
                </h2>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-6 h-6 rounded-full border border-border bg-white flex justify-center items-center text-primary text-[18px]"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="py-4 px-8 bg-primary text-white font-medium text-base rounded-full flex gap-2 items-center">
                <IoBagHandleOutline />
                Add to cart
              </button>
            </div>

            {/* Sub-Total */}
            <div className="subTotal w-full flex justify-between text-base text-body-text mt-8">
              <p>
                $
                {singleProduct?.price
                  ? `${(quantity * singleProduct.price).toFixed(2)}`
                  : "0.00"}{" "}
                x {quantity}
              </p>
              <p>
                $
                {singleProduct?.price
                  ? (quantity * singleProduct.price).toFixed(2)
                  : "0.00"}
              </p>
            </div>

            <div className="subTotal w-full flex justify-between text-base text-body-text mt-[10px] mb-4 border-b border-border pb-4">
              <p className="">Tax estimate</p>
              <p className="">
                ${((15 / 100) * singleProduct.price * quantity).toFixed(2)}
              </p>
            </div>

            <div className="subTotal w-full flex justify-between text-base font-semibold text-primary">
              <p className="">Total</p>
              <p className="">
                $
                {(
                  singleProduct.price * quantity +
                  (15 / 100) * singleProduct.price * quantity
                ).toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="productDescription flex flex-col gap-10 lg:gap-[60px]">
          <div>
            <h3 className="block lg:hidden font-semibold text-xl text-primary mt-10">
              About this product
            </h3>
            <p className="w-[735px] text-body-text lg:mt-4 mt-1">
              {singleProduct?.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl text-primary">
              Fabric + Care
            </h3>
            <p className="w-[735px] text-body-text lg:mt-4 mt-1">
              Material: Soft wool blend <br />
              Color: Various
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl text-primary">
              Sale performance
            </h3>
            <p className="w-[735px] text-body-text lg:mt-4 mt-1">
              Sales: {singleProduct?.minimumOrderQuantity} <br />
              Review Count: {singleProduct.reviews?.length} <br />
              Review Average: {singleProduct?.rating}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl text-primary">Keywords</h3>
            <div className="flex gap-2">
              {singleProduct.tags?.map((item, i) => (
                <div key={i}>
                  <span className="py-2 text-body-text lg:mt-4 mt-1 px-[14px] text-xs border border-border rounded-full bg-white flex items-center">
                    <BsStars />
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CommonHeader
          firstHalf={"Recommended products"}
          extraStyling={`mt-[96px] mb-10`}
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
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {productCategory.map((singleProduct) => (
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
    </>
  );
};

export default ProductDetails;
