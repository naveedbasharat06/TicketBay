import React, { FC } from "react";
import { useMedia } from "react-use";
import { months } from "@/constants";
interface props {
  event?: any;
}
const EventCard: FC<props> = ({ event }) => {
  const isSmallScreen = useMedia("(max-width: 600px)");
  const isMediumScreen = useMedia("(min-width: 601px) and (max-width: 768px)");
  const dateObject = new Date(event.DateTime);
  const monthAbbreviation = months[dateObject.getMonth()];
  const day = dateObject.getDate();
  return (
    <div
      className={`min-h-[380px] shadow-lg bg-white rounded-[4px] my-[20px] ml-[5px] ${
        isSmallScreen
          ? "max-w-[355px]"
          : isMediumScreen
          ? "max-w-[310px]"
          : "max-w-[280px]"
      }`}
    >
      <div>
        <img src={event?.imageUrl} alt={event?.eventType} width={"100%"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 flex mt-2 p-2">
        <div className="col-span-3">
          <div className="bg-[#E3F5FF] w-fit p-1 rounded-[4px]">
            <span className="text-[13px] font-[500] text-[#012336]">
              {event?.eventType}
            </span>
          </div>
          <div className="w-[190px] mt-3">
            <span className="text-[24px] font-[500]">
              {event?.shortDescription}
            </span>
          </div>
          <div className="mt-1">
            <span className="text-[14px] font-[500] text-[#797979]">
              {event?.lagos}
            </span>
          </div>

          <div className="mt-1">
            <span className="text-[14px] font-[500] text-[#797979]">
              {event?.startingFrom}
            </span>
          </div>
        </div>
        <div className="col-span-1">
          <div className="max-w-[50px] max-h-[58px] border rounded-[4px] text-center border-[#E3F5FF]">
            <span className="text-[16px] font-[500] text-[#797979]">
              {monthAbbreviation}
            </span>
            <div>
              <span className="text-[16px] font-[500] text-[#797979]">
                {day}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
