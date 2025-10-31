import React from "react";
import { CgClipboard } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";

const CommonProductCard = ({
  extraStyling,
  productImg,
  productTitle,
  productPrice,
  productCategory,
  priceBeforeDiscount,
  productRating,
  inStock,
  clickDetails,
}) => {
  return (
    <div
      className={`w-[320px] h-[448px] relative group overflow-hidden ${extraStyling}`}
    >
      <div className="absolute top-4 right-[-50px] flex flex-col gap-5 group-hover:right-5 duration-500">
        <button className="text-xl p-3 rounded-full bg-white active:text-white active:bg-black duration-300">
          <RiShoppingCartLine />
        </button>

        <button
          onClick={clickDetails}
          className="text-xl p-3 rounded-full bg-white active:text-white active:bg-black duration-300"
        >
          <CgClipboard />
        </button>
      </div>
      <div className="w-full h-[347px] rounded-2xl bg-gray-100">
        <img src={productImg} alt="Product Image" className="" />
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-primary truncate w-[60%]">
          {productTitle}
        </h2>
        <h2 className="text-base font-semibold text-primary">
          ${productPrice}
        </h2>
      </div>
      <div className="flex items-center justify-between mb-[15px] mt-5">
        <p className="text-[14px] text-body-text">{productCategory}</p>
        <p className="text-[14px] text-body-text line-through">
          ${(((100 + priceBeforeDiscount) / 100) * productPrice).toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-1">
        <FaStar className="text-[#FBBF24] text-xl" />
        <p className="text-[14px] text-body-text">
          {productRating} <span>({inStock})</span>
        </p>
      </div>
    </div>
  );
};

export default CommonProductCard;
