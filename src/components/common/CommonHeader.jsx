import React from "react";

const CommonHeader = ({ firstHalf, secondHalf, extraStyling }) => {
  return (
    <>
      <h1
        className={`text-primary text-[24px] lg:text-[36px] font-semibold ${extraStyling}`}
      >
        {firstHalf}
        <span className="text-[rgba(75,85,99,0.8)] hidden lg:inline-block">
          {" "}
          {secondHalf}
        </span>
      </h1>
    </>
  );
};

export default CommonHeader;
