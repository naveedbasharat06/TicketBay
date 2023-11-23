import React from "react";

function DiscoverEvents() {
  return (
    <div className="lg:h-[872px] bg-[#E3F5FF] text-center background-image">
      <div className="pt-[100px]">
        <span className="font-family text-7xl text-[#797979]">
          Relax and Enjoy
        </span>
      </div>
      <div className="mt-[30px]">
        <span className="text-[64px] font-[600]">
          Fun you can’t afford to miss
        </span>
      </div>
      <div className="mt-3">
        <span className="text-[24px] font-[500] text-[#797979]">
          Discover Events around you
        </span>
      </div>
      <div className="flex justify-center mt-[90px]">
        <div className="w-[65%] h-[64px] bg-[white] rounded-[4px] flex items-center pl-5 pr-5">
          <div className="flex gap-2">
            <img src="./assets/images/search.svg" alt="search" />
            <input
              type="text"
              placeholder="Events title or keyword"
              className="outline-none"
            />
          </div>

          <div className="text-center ml-[80px]">
            <hr className="border w-[2px] h-[57px] bg-[#797979]" />
          </div>

          <div className="ml-10">
            <span className="text-[#797979]">State</span>
          </div>
          <div className="flex justify-end w-full">
            <div className="w-[155px] bg-[#FD2F09] rounded-[4px] p-2 text-[white] text-center cursor-pointer sm:mt-1">
              Find Events
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverEvents;
