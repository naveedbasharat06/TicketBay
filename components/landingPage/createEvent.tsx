import React from "react";
import CutomButton from "../defaultComponents/customButtons/cutomButton";

function CreateEvent() {
  return (
    <div className="mt-[30px] lg:flex justify-between items-center">
      <div>
        <img src="/assets/images/create_event.svg" alt="create-event" />
      </div>
      <div className="lg:w-[60%]">
        <div>
          <span className="text-[48px] font-[600] text-[#133142]">
            Create, Promote and broadcast your events
          </span>
        </div>
        <div className="mt-8">
          <p className="text-[18px] font-[500] text-[#797979]">
            Create events for as manny pariccipapnts a you want with easy
            ticketing and safe rwgistration with our simple to use platform.
            Organiser get post event outrach to attract future participants
          </p>
        </div>
        <div className="flex jutify-start mt-8">
          <CutomButton label={"Organise an event"}></CutomButton>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
