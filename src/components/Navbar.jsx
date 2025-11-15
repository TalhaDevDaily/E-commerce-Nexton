import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import logo from "../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCartLine, RiUserLine } from "react-icons/ri";
import Cart from "./Cart";
import axios from "axios";
import Item from "antd/es/list/Item";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);

  const [showResult, setShowResult] = useState(false);

  const [searchResult, setSearchResult] = useState([]);

  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (searchData) => {
    setSearchInput("");

    setTimeout(() => {
      axios
        .get(`https://dummyjson.com/products/search?q=${searchInput}`)
        .then((res) => {
          // console.log(res);
          setShowResult(true);
          setSearchResult(res.data.products);
        })
        .catch((err) => console.log(err));
    }, 500);
  };

  // console.log(searchResult);

  const handleSearchProduct = (productId) => {
    setSearchInput("");
    navigate(`/product-details/${productId}`);
    setShowResult(false);
  };

  return (
    <>
      <nav className="hidden lg:block py-[27px]">
        <div className="container flex items-center justify-between">
          <Link to={"/"} className="navLogo w-[119px]">
            <img src={logo} alt="Logo" />
          </Link>

          <div className="searchBar w-[400px] h-[52px] bg-bg-grey rounded-[100px] flex items-center justify-between px-[24px] gap-[10px] relative">
            <CiSearch className="text-3xl" />
            <input
              onChange={(e) => {
                handleSearch(), setSearchInput(e.target.value);
              }}
              value={searchInput}
              type="text"
              placeholder="Search in products..."
              className="outline-none w-full text-[14px] text-primary placeholder:text-body-text"
            />
            {showResult && (
              <div className="w-[400px] p-3 rounded-[5px] bg-[rgba(0,0,0,0.45)] backdrop-blur-[5px] max-h-[400px] overflow-y-scroll absolute top-[50px] left-0 z-20">
                {searchResult.length == 0 ? (
                  <h2 className="text-xl font-medium text-white text-center">
                    No results found!
                  </h2>
                ) : (
                  searchResult.map((item) => (
                    <button
                      onClick={() => handleSearchProduct(item.id)}
                      key={item.id}
                      className="text-sm font-medium text-white mt-4 hover:bg-white hover:text-black rounded-xl py-1 px-2 block w-full text-start duration-[0.3s]"
                    >
                      {item.title}
                    </button>
                  ))
                )}
              </div>
            )}
          </div>

          <div className="menuButtons flex gap-[22px] items-center">
            <button className="text-2xl font-extralight cursor-pointer">
              <RiUserLine />
            </button>
            <button
              onClick={() => setShowCart(true)}
              className="text-2xl font-extralight cursor-pointer relative"
            >
              <RiShoppingCartLine />
              <div className="w-[20px] h-[20px] rounded-full bg-vibrant text-[12px] text-white flex justify-center items-center absolute top-[-10px] right-[-10px]">
                0
              </div>
            </button>
          </div>
        </div>

        <Cart isOpen={showCart} isClosed={() => setShowCart(false)} />
      </nav>
    </>
  );
};

export default Navbar;
