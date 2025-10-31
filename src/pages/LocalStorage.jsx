import axios from "axios";
import React from "react";

const LocalStorage = () => {
  axios
    .get(
      "https://dummyjson.com/products?limit=15&skip=0&select=title,price,images"
    )
    .then((res) => console.log(res.data.products))
    .catch((err) => console.log(err));

  return <div className="container"></div>;
};

export default LocalStorage;
