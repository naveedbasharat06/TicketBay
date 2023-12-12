import React from "react";
import SuccessBooking from "@/components/booking";
import NewsLetter from "@/components/defaultComponents/newsLetter";

function Booking() {
  return (
    <div>
      <SuccessBooking />
      <div className="mt-[100px]">
        <NewsLetter />
      </div>
    </div>
  );
}

export default Booking;
