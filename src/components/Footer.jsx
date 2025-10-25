import React from "react";
import visa from "../assets/images/visa.png";
import paypal from "../assets/images/paypal.png";
import stripe from "../assets/images/stripe.png";
import verisign from "../assets/images/verisign.png";
import nextonLogo from "../assets/images/logo.png";
import listItem1 from "../assets/images/list-item-1.png";
import listItem2 from "../assets/images/list-item-2.png";
import listItem3 from "../assets/images/list-item-3.png";
import listItem4 from "../assets/images/list-item-4.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="">
      <div className="container px-6 lg:px-0">
        <div className="linkBox my-[60px] flex lg:justify-between flex-col sm:flex-row gap-[60px] flex-wrap">
          <div>
            <img src={nextonLogo} alt="Logo" className="w-[119px]" />

            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a href="">
                  <img src={listItem1} alt="List Item" />
                </a>
              </li>

              <li>
                <a href="">
                  <img src={listItem2} alt="List Item" />
                </a>
              </li>

              <li>
                <a href="">
                  <img src={listItem3} alt="List Item" />
                </a>
              </li>

              <li>
                <a href="">
                  <img src={listItem4} alt="List Item" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm lg:text-base">
              Getting started
            </h4>
            <ul className="flex flex-col gap-4 mt-5 text-sm lg:text-base">
              <li>
                <Link to={"#"}>Release Notes</Link>
              </li>

              <li>
                <Link to={"#"}>Upgrade Guide</Link>
              </li>

              <li>
                <Link to={"#"}>Browser Support</Link>
              </li>

              <li>
                <Link to={"#"}>Dark Mode</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm lg:text-base">Explore</h4>
            <ul className="flex flex-col gap-4 mt-5 text-sm lg:text-base">
              <li>
                <Link to={"#"}>Prototyping</Link>
              </li>

              <li>
                <Link to={"#"}>Design systems</Link>
              </li>

              <li>
                <Link to={"#"}>Pricing</Link>
              </li>

              <li>
                <Link to={"#"}>Security</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm lg:text-base">Community</h4>
            <ul className="flex flex-col gap-4 mt-5 text-sm lg:text-base">
              <li>
                <Link to={"#"}>Discussion Forums</Link>
              </li>

              <li>
                <Link to={"#"}>Code of Conduct</Link>
              </li>

              <li>
                <Link to={"#"}>Contributing</Link>
              </li>

              <li>
                <Link to={"#"}>API Reference</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightsReserved h-[96px] flex lg:justify-between items-center justify-center flex-col lg:flex-row gap-3">
          <div className="copyright text-body-text text-sm lg:text-base">
            Nexton eCommerce. &copy; 2024
          </div>
          <div className="paymentMethods flex gap-1">
            <a href={"https://bd.visa.com/"}>
              <img src={visa} alt="Visa" />
            </a>
            <a href={"https://www.paypal.com/bd/home"}>
              <img src={paypal} alt="Paypal" />
            </a>
            <a href={"https://stripe.com/"}>
              <img src={stripe} alt="Stripe" />
            </a>
            <a href={"https://www.verisign.com/en_US/"}>
              <img src={verisign} alt="VeriSign" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
