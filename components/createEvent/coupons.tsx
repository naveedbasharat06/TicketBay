import React from "react";

function Coupons() {
  return (
    <div className="mt-10 lg:p-10 p-3 shadow rounded-[16px]">
      <div>
        <span className="text-[24px] font-[500] text-[#133142]">Coupons</span>
      </div>
      <div>
        <span className="text-[14px] font-[500] text-[#979797]">
          Details about where the event will be hosted
        </span>
      </div>
      <div className="lg:flex justify-between mt-3">
        <div className="lg:w-[65%]">
          <div>
            <span className="text-[14px] font-[500] text-[#979797]">
              Discount code
            </span>
          </div>

          <div className="h-[40px] border rounded-[5px] mt-2 p-1">
            <input type="text" className="h-full w-full outline-none" />
          </div>
        </div>
        <div className="lg:w-[30%]">
          <div className="lg:mt-10">
            <span className=" text-[14px] font-[400] text-[#979797]">
              Code to enter for discount
            </span>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-between mt-10">
        <div className="lg:w-[65%] flex justify-between ">
          <div className="w-[48%]">
            <div>
              <span className="text-[14px] font-[500] text-[#979797]">
                Discount amount
              </span>
            </div>

            <div className="h-[40px] border rounded-[5px] p-1">
              <input
                type="number"
                className="h-full w-full outline-none text-[#979797]"
              />
            </div>
          </div>
          <div className="w-[48%]">
            <div>
              <span className="text-[14px] font-[500] text-[#979797]">
                No of tickets
              </span>
            </div>

            <div className="h-[40px] border rounded-[5px] p-1">
              <input
                type="number"
                className="h-full w-full outline-none text-[#979797]"
              />
            </div>
          </div>
        </div>
        <div className="lg:mt-8">
          <span className=" text-[14px] font-[400] text-[#979797]">
            The amoun tot discount and no of ticket to discount from
          </span>
        </div>
      </div>

      <div className="lg:flex justify-between mt-10">
        <div className="lg:w-[65%] flex justify-between ">
          <div className="w-[48%]">
            <div>
              <span className="text-[14px] font-[500] text-[#979797]">
                Startdate
              </span>
            </div>

            <div className="h-[40px] border rounded-[5px] p-1">
              <input
                type="date"
                className="h-full w-full outline-none text-[#979797]"
              />
            </div>
          </div>
          <div className="w-[48%]">
            <div>
              <span className="text-[14px] font-[500] text-[#979797]">
                End date
              </span>
            </div>

            <div className="h-[40px] border rounded-[5px] p-1">
              <input
                type="date"
                className="h-full w-full outline-none text-[#979797]"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[30%]">
          <div className="lg:mt-8">
            <span className=" text-[14px] font-[400] text-[#979797]">
              the date to discount
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupons;
