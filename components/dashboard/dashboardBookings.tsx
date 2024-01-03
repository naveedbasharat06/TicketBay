import React from "react";
import { useMedia } from "react-use";
import { useRouter as useNavigation } from "next/navigation";

function DashboardBookings() {
  const navigation = useNavigation();
  const isSmallScreen = useMedia("(max-width: 600px)");
  const isMediumScreen = useMedia("(min-width: 601px) and (max-width: 1024px)");
  return (
    <div>
      <div>
        <span className="text-[24px] font-[600] text-[#133142]">
          My bookings
        </span>
      </div>

      <div className="lg:grid grid-cols-6 mt-5 gap-10 mb-5 lg:pr-5">
        <div
          className={`col-span-4 h-[376px] border border-[#FD2F091A] rounded-[4px] flex justify-center items-center ${
            isMediumScreen || isSmallScreen ? "mb-5" : ""
          }`}
        >
          <div className="w-[306px]">
            <div className="flex justify-center">
              <img src="/assets/images/my-booking.svg" alt="" />
            </div>
            <div className="text-center w-full mt-5">
              <span className="text-[20px] font-[500] text-[#797979]">
                No event booking yet. click to book an event.
              </span>
            </div>

            <div className="flex justify-center mt-5">
              <button className="text-[#ffff] bg-[#FD2F09] h-[40px] w-[115px] rounded-[4px]"
              onClick={()=>{
                navigation.push(`events`);
              }}>
                Go to events
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-2 h-[376px] border border-[#FD2F091A] rounded-[4px]"></div>
      </div>
    </div>
  );
}

export default DashboardBookings;
