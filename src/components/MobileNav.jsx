import React, { useState } from "react";
import { Link } from "react-router";
import moboNavLogo from "../assets/images/favicon.png";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { RiUserLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import Cart from "./Cart";

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);

  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <nav className="py-[14px] lg:hidden">
        <div className="container flex items-center justify-between px-4">
          <Link to={"/"} className="inline-block">
            <img src={moboNavLogo} alt="Mobile Nav Logo" className="w-6" />
          </Link>

          <form className="w-[200px] h-[36px] bg-bg-grey rounded-full flex justify-between items-center pl-4 gap-[6px]">
            <CiSearch className="text-xl" />
            <input
              type="text"
              placeholder="Search in products..."
              className="outline-none w-full text-[12px] text-primary placeholder:text-body-text"
            />
          </form>

          <button>
            <FaBars
              onClick={() => setShowNav(!showNav)}
              className="text-[24px] text-body-text"
            />
          </button>
        </div>

        {showNav && (
          <div className="w-full py-4 bg-white flex justify-center gap-5">
            <button>
              <RiUserLine />
            </button>

            <button>
              <FiShoppingCart onClick={() => setShowCart(true)} />
            </button>
          </div>
        )}
      </nav>

      <Cart isOpen={showCart} isClosed={() => setShowCart(false)} />
    </>
  );
};

export default MobileNav;
