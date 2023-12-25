import React, { useState, useEffect } from "react";
import BookingCard from "./components/bookingCard";
import lookupStore from "@/store/lookups.store";

function MyBookings() {
  const { systemLookups, loading } = lookupStore;
  const [selectedTab, setSelectedTab] = useState(1);
  const [events, setEvents] = useState<any>([]);
  const uniqueDates = Array.from(new Set(events.map((event:any) => {
    const dateTime = new Date(event.attributes.DateTime);
    return new Date(Date.UTC(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate())).toISOString().split('T')[0];
  })));
  
  useEffect(() => {
    setEvents(systemLookups.events);
  }, [systemLookups]);
  return (
    <div>
      <div className="flex gap-5">
        <div
          className={`hover:text-[#FD2F09] cursor-pointer text-[18px] font-[500] text-[#979797] ${
            selectedTab == 1 && "text-[#FD2F09]"
          }`}
        >
          <span
            onClick={() => {
              setSelectedTab(1);
            }}
          >
            All
          </span>
        </div>
        <div
          className={`hover:text-[#FD2F09] cursor-pointer text-[18px] font-[500] text-[#979797] ${
            selectedTab == 2 && "text-[#FD2F09]"
          }`}
        >
          <span
            onClick={() => {
              setSelectedTab(2);
            }}
          >
            Upcoming
          </span>
        </div>
        <div
          className={`hover:text-[#FD2F09] cursor-pointer text-[18px] font-[500] text-[#979797] ${
            selectedTab == 3 && "text-[#FD2F09]"
          }`}
        >
          <span
            onClick={() => {
              setSelectedTab(3);
            }}
          >
            Completed
          </span>
        </div>
      </div>

      <div className="pr-[125px] mb-5 mt-3">
        <hr />
      </div>

      <div className="lg:pr-[120px] mt-2  overflow-x-auto hid-overflow">
        {uniqueDates.map((date: any) => (
          <div>
            <div className="mb-2">
              <span className="text-[16px] font-[500] text-[#797979]">{date}</span>
            </div>
            {events.map((item: any) => {
            const storedDate = new Date(item.attributes.DateTime);
            const offsetInMinutes = storedDate.getTimezoneOffset();
            const adjustedDate = new Date(storedDate.getTime() - offsetInMinutes * 60 * 1000);
            const formattedStoredDate = adjustedDate.toISOString().split("T")[0];
              if (date === formattedStoredDate)
                return (
                  <div className="mb-2 pl-1">
                    <BookingCard booking={item.attributes}></BookingCard>
                  </div>
                );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;
