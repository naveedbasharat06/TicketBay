import React from "react";
import CutomButton from "./customButtons/cutomButton";
import { useMedia } from "react-use";

function NewsLetter() {
  const isSmallScreen = useMedia("(max-width: 600px)");
  return (
    <div className="h-[332px] bg-[#E3F5FF] text-center pt-[50px] rounded-[4px] mt-[50px]">
      <div>
        <span className="text-[48px] font-[600] text-[#133142]">
          Never miss an event
        </span>
      </div>
      <div>
        <span className="text-[17px] font-[500] text-[#797979]">
          Subscribe to ticketbay newsletter now.
        </span>
      </div>
      <div className="flex justify-center mt-[30px] h-[64px]">
        <div className="lg:w-[50%] bg-[white] flex justify-between items-center pl-5 pr-5 ">
          <div>
            <input
              type="text"
              placeholder="Email Address"
              className={`outline-none ${isSmallScreen ? "w-[150px]" : ""}`}
            />
          </div>
          <div>
            <CutomButton label={"Subscribe"}></CutomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
