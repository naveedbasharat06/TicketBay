import React from "react";

function EventDiscovery() {
  return (
    <div>
      <div className="mt-[80px] lg:flex justify-between items-center">
        <div>
          <span className="lg:text-[48px] text-[30px] font-[600] text-[#133142]">
            Discover Events
          </span>
        </div>
        <div>
          <div className="border border-[#E3F5FF] p-3 rounded-[4px] flex">
            <div className="flex gap-5">
              <img src="assets/images/search.svg" alt="search" />
              <input
                type="text"
                placeholder="Events title or keyword"
                className="outline-none"
              />
            </div>
            <div className="flex">
              <hr className="border  w-[1px] h-[100%]" />
              <div className="ml-[30px] flex gap-5">
                <span className="text-[14px] font-[500] text-[#797979]">
                  Filters
                </span>
                <img src="assets/images/filter.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default EventDiscovery;
