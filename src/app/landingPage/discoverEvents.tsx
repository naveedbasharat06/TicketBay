import React from "react";

function DiscoverEvents() {
  return (
    <div className="lg:h-[872px] md:h-[500px] sm:h-[350px] h-[350px] bg-[#E3F5FF] text-center background-image">
      <div className="lg:pt-[100px]">
        <span className="font-family text-7xl text-[#797979]">
          Relax and Enjoy
        </span>
      </div>
      <div className="mt-[30px]">
        <span className="lg:text-[64px] md:text-[40px] text-[30px] font-[600]">
          Fun you can’t afford to miss
        </span>
      </div>
      <div className="mt-3">
        <span className="text-[24px] font-[500] text-[#797979]">
          Discover Events around you
        </span>
      </div>
      <div className="flex flex-wrap justify-center mt-5 sm:mt-[90px] ml-1 mr-1">
        <div className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-[64px] bg-[white] rounded-[4px] flex items-center pl-5 pr-5">
          <div className="flex gap-2">
            <img src="./assets/images/search.svg" alt="search" />
            <input
              type="text"
              placeholder="Events title or keyword"
              className="outline-none"
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

export default DiscoverEvents;
