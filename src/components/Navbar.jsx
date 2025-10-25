import React, { useState } from "react";
import { Link } from "react-router";
import logo from "../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCartLine, RiUserLine } from "react-icons/ri";
import Cart from "./Cart";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <nav className="hidden lg:block py-[27px]">
        <div className="container flex items-center justify-between">
          <Link to={"/"} className="navLogo w-[119px]">
            <img src={logo} alt="Logo" />
          </Link>

          <div className="searchBar w-[400px] h-[52px] bg-bg-grey rounded-[100px] flex items-center justify-between px-[24px] gap-[10px]">
            <CiSearch className="text-3xl" />
            <input
              type="text"
              placeholder="Search in products..."
              className="outline-none w-full text-[14px] text-primary placeholder:text-body-text"
            />
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
