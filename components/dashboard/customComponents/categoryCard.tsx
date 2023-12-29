import React, { FC } from "react";
import lookupStore from "@/store/lookups.store";
interface props {
  category?: any;
}

const CategoryCard: FC<props> = ({ category }) => {
  const { systemLookups, loading } = lookupStore;
  const events = (category: any) => {
    const musicEvents = systemLookups.events.filter(
      (event: any) => event.attributes.category === category
    );
    return musicEvents.length;
  };
  return (
    <div className="h-[60px] shadow lg:w-[270px] rounded-[4px] p-2 flex gap-2">
      <div className="flex items-center">
        <img
          src={category?.image}
          alt="category"
          className="h-[40px] w-[40px]  rounded-[4px]"
        />
      </div>

      <div>
        <div className="mt-[-3px]">
          <span className="text-[18px] font-[500] text-[#133142]">
            {category?.category}
          </span>
        </div>
        <div className="mt-[-4px]">
          <span className="text-[14px] font-[500] text-[#979797]">
            {events(category?.category) +
              `${events(category?.category) > 1 ? " Events" : " Event"}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
