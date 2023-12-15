import React from "react";

function DashboardHeader() {
  return (
    <div className="lg:h-[478px] bg-[#E3F5FF] lg:bg-[url('/assets/images/banner_header.png')]  bg-right bg-no-repeat p-12">
      <div>
        <span className="font-family text-[72px] font-[400] text-[#797979]">
          Relax and Enjoy
        </span>
      </div>
      <div className="lg:w-[30%]">
        <span className="text-[48px] font-[600] tex-[#133142] ">
          Fun you can’t afford to miss
        </span>
      </div>

      <div className="flex flex-wrap lg: mt-[30px] ml-1 mr-1">
        <div className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-[64px] bg-[white] rounded-[4px] flex items-center pl-5 pr-5">
          <div className="flex gap-2">
            <img src="./assets/images/search.svg" alt="search" />
            <input
              type="text"
              placeholder="Events title or keyword"
              className="outline-none w-[120px] md:w-[150px]"
            />
          </div>

          <div className="text-center hidden sm:block">
            <hr className="border w-[2px] h-[57px] bg-[#797979] ml-[30px]" />
          </div>

          <div className="hidden sm:block">
            <span className="text-[#797979] ml-[20px]">State</span>
          </div>

          <div className="flex flex-grow justify-end sm:order-last w-full sm:w-auto">
            <div className="w-full sm:w-[155px] bg-[#FD2F09] rounded-[4px] p-2 text-[white] text-center cursor-pointer mt-2 sm:mt-0">
              <span className="text-[10px] lg:text-[20px]"> Find Events</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
