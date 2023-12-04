import React from "react";

function Services() {
  return (
    <div className="pt-[100px]">
      <div className="text-center">
        <span className="text-[48px] font-[600] text-[#133142]">
          How we Work
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-[80px] my-[80px] wrap">
        <div>
          <div className="flex justify-center min-h-[280px] items-center">
            <div className="flex gap-10">
              <img src="/assets/images/services/s1.svg" alt="" />
            </div>
          </div>
          <div className="text-center">
            <span className="text-[24px] font-[600] text-[#133142]">
              Search
            </span>
            <p className="text-[18px] font-[500] text-[#797979]">
              Easily find your event via search system with multiple params.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center min-h-[280px] items-center">
            <div>
              <img src="/assets/images/services/s2.svg" alt="" />
            </div>
          </div>
          <div className="text-center">
            <span className="text-[24px] font-[600] text-[#133142]">
              Book an event
            </span>
            <p className="text-[18px] font-[500] text-[#797979]">
              Select the event that you like. Choose Ticket add to cart.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center min-h-[280px] items-center">
            <div>
              <img src="/assets/images/services/s3.svg" alt="" />
            </div>
          </div>
          <div className="text-center">
            <span className="text-[24px] font-[600] text-[#133142]">
              Get the ticket to attend
            </span>
            <p className="text-[18px] font-[500] text-[#797979]">
              After booking successfully, You will get ticket in email or
              download in your account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
