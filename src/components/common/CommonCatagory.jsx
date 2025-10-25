import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

const CommonCatagory = ({ catagoryName, catagoryDescription }) => {
  return (
    <div className="w-[418px] p-10 border border-border rounded-2xl flex items-center justify-between mt-[40px]">
      <div className="">
        <h2 className="text-[24px] font-semibold text-primary">
          {catagoryName}
        </h2>
        <p className="text-[14px] text-body-text">{catagoryDescription}</p>
      </div>
      <Link
        to={"#"}
        className="h-[36px] border-l-3 border-border pl-[12px] uppercase flex gap-[8px] items-center"
      >
        Shop now
        <FaArrowRightLong className="text-2xl" />
      </Link>
    </div>
  );
};

export default CommonCatagory;
