import React from "react";
import { CiGlobe } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiRefund2Fill } from "react-icons/ri";
import { TbExchange } from "react-icons/tb";

const Features = () => {
  return (
    <section className="mt-[52px] mb-[32px]">
      <div className="container px-6 lg:px-0">
        <h2 className="text-base font-semibold text-primary lg:hidden">
          Nexton&reg; always with you
        </h2>

        <div className="lg:border border-border py-6 px-10 rounded-2xl grid grid-cols-2 grid-rows-3 lg:grid-rows-1 lg:grid-cols-4 lg:justify-items-center gap-y-[24px]">
          {/* Single Feature */}
          <div className="w-[303px] lg:border-r-3 border-border flex gap-4 items-center">
            <LiaShippingFastSolid className="text-xl lg:text-3xl text-body-text" />
            <div>
              <h2 className="text-base lg:text-lg font-semibold text-body-text lg:text-primary">
                Free shipping
              </h2>
              <p className="text-[14px] text-body-text hidden lg:inline-block">
                On orders over $50.00
              </p>
            </div>
          </div>

          {/* Single Feature */}
          <div className="w-[303px] lg:border-r-3 border-border flex gap-4 items-center">
            <TbExchange className="text-xl lg:text-3xl text-body-text" />
            <div>
              <h2 className="text-base lg:text-lg font-semibold text-body-text lg:text-primary">
                Very easy to return
              </h2>
              <p className="text-[14px] text-body-text hidden lg:inline-block">
                Just phone number
              </p>
            </div>
          </div>

          {/* Single Feature */}
          <div className="w-[303px] lg:border-r-3 border-border flex gap-4 items-center">
            <CiGlobe className="text-xl lg:text-3xl text-body-text" />
            <div>
              <h2 className="text-base lg:text-lg font-semibold text-body-text lg:text-primary">
                Worldwide delivery
              </h2>
              <p className="text-[14px] text-body-text hidden lg:inline-block">
                Fast delivery worldwide
              </p>
            </div>
          </div>

          {/* Single Feature */}
          <div className="w-[303px] flex gap-4 items-center row-start-3 lg:row-start-1 lg:col-end-5">
            <RiRefund2Fill className="text-xl lg:text-3xl text-body-text" />
            <div>
              <h2 className="text-base lg:text-lg font-semibold text-body-text lg:text-primary">
                Refunds policy
              </h2>
              <p className="text-[14px] text-body-text hidden lg:inline-block">
                60 days return for any reason
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
