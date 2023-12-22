import React, { useEffect, useState } from "react";
import lookupStore from "@/store/lookups.store";
import CategoryCard from "./customComponents/categoryCard";
import { useMedia } from "react-use";

function BrowsEvent() {
  const { systemLookups, loading } = lookupStore;
  const [categories, setCategories] = useState<any | undefined>(undefined);
  const [singleEvent, setSingleEvent] = useState<any | undefined>();
  const isSmallScreen = useMedia("(max-width: 600px)");
  const isMediumScreen = useMedia("(min-width: 601px) and (max-width: 1024px)");
  const randomElement = systemLookups?.events
    ? systemLookups.events[
        Math.floor(Math.random() * systemLookups.events.length)
      ]
    : null;

  console.log(JSON.parse(JSON.stringify(randomElement)));
  useEffect(() => {
    setCategories(systemLookups.categories);
    setSingleEvent(randomElement);
  }, [lookupStore, randomElement]);
  return (
    <div
      className={`lg:grid grid-cols-6 gap-10 ${
        isMediumScreen ? "pl-2 pr-2" : ""
      }`}
    >
      <div className="col-span-4 rounded-[4px]">
        <div className="relative h-[382px] overflow-hidden rounded-[4px]">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center rounded-[4px]"
            src={singleEvent?.attributes?.imageUrl}
            alt="Event Image"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent">
            <div
              className={`lg:pt-10 lg:ml-8 lg:w-[365px] ${
                isMediumScreen || isSmallScreen ? "text-center pt-10" : ""
              }`}
            >
              <span className="text-[#FFFFFF] font-[600] text-[36px]">
                {singleEvent?.attributes?.shortDescription}
              </span>
            </div>

            <div
              className={`lg:pt-5 lg:ml-8 lg:w-[365px] ${
                isMediumScreen || isSmallScreen ? "text-center pt-10" : ""
              }`}
            >
              <span className="text-[#FFFFFF] font-[500] text-[18px]">
                {singleEvent?.attributes?.longDescription}
              </span>
            </div>

            <div
              className={`lg:pt-10 lg:ml-8 ${
                isMediumScreen || isSmallScreen
                  ? "flex justify-center mt-[80px]"
                  : ""
              }`}
            >
              <button className="pl-3 pr-3 pt-2 pb-2 rounded-[4px] bg-[#FD2F09] text-[#ffff]">
                Book Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div>
          <span className="text-[24px] font-[600] text-[#133142]">
            Categories
          </span>
        </div>

        <div className="mt-5">
          {categories?.slice(0, 4).map((item: any) => (
            <div className="mb-4 cursor-pointer" key={item.id}>
              <CategoryCard category={item.attributes} />
            </div>
          ))}
          <div>
            <span className="text-[14px] font-[500] text-[#FD2F09] cursor-pointer">
              See more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowsEvent;
