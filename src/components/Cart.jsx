import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Cart = ({ isOpen, isClosed }) => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/carts/5")
      .then((res) => {
        setCartProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section
        className={`fixed top-0 ${
          isOpen ? "right-0" : "right-[-100%]"
        } w-full h-screen duration-[0.4s] z-10`}
      >
        <div
          onClick={isClosed}
          className="w-full h-screen bg-[rgb(0,0,0,0.2)]"
        ></div>
        <div className="w-[400px] h-screen bg-white absolute top-0 right-0 px-5">
          <h2 className="text-xl font-medium py-5">Cart</h2>

          <div className="w-full h-[80%] overflow-y-scroll">
            {/* -----------------Cart Product */}
            {cartProducts.products?.map((item, i) => (
              <div className="flex gap-5 items-center mt-5" key={i}>
                <div className="w-15 h-15 bg-gray-300 rounded-[5px]">
                  <img src={item.thumbnail} alt="Product Image" />
                </div>

                <div>
                  <h2 className="text-lg font-medium">{item.title}</h2>
                  <p className="text-[12px]">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ---------------- checkout button and product sum*/}
          <div className="flex justify-between">
            <p className="text-[14px]">Sub-total</p>
            <p className="text-[16px] font-medium">{cartProducts.total}</p>
          </div>

          <Link
            onClick={isClosed}
            to={"/checkout"}
            className="w-full py-3 bg-primary inline-block text-white font-medium text-base text-center rounded-[10px] active:scale-[1.1] duration-300"
          >
            Checkout
          </Link>
        </div>
      </section>
    </>
  );
};

export default Cart;
