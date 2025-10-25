import React from "react";

const LocalStorage = () => {
  const getLocalData = localStorage.getItem("firstName");
  console.log(getLocalData);

  const handleClick = () => {
    localStorage.setItem("firstName", "Talha");
  };

  return (
    <div className="container">
      <button
        onClick={handleClick}
        className="py-1 px-5 bg-gray-200 active:scale-[1.1]"
      >
        Click
      </button>
    </div>
  );
};

export default LocalStorage;
