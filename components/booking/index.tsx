import React from "react";
import CutomButton from "../defaultComponents/customButtons/cutomButton";
import eventData from "@/constants";
import bookingsStore from "@/store/bookings.store";
import { useRouter } from "next/router";
function SuccessBooking() {
  const router = useRouter();
  const { id } = router.query;
  const booking = bookingsStore?.bookings.find((item) => item.id === id);
  const singleEvent = eventData?.find(
    (item) => item.id === parseInt(booking?.eventId)
  );
  return (
    <div className="lg:grid md:grid grid-cols-6 gap-10 mt-[30px]">
      <div className="h-[773px] col-span-4 border border-[#E3F5FF] rounded-[4px] overflow-hidden">
        <div className="bg-[#E3F5FF] h-full bg-[url('/assets/images/congrats.png')] bg-bottom bg-no-repeat text-center">
          <div className="pt-[50px]">
            <span className="lg:text-[48px] text-[30px] font-[600] text-[#133142]">
              Congratulations
            </span>
          </div>
          <div>
            <span className="text-[18px] font-[500] text-[#797979]">
              Your booking has been successful
            </span>
          </div>

          <div className="mt-[30px] pl-5 pr-5">
            <CutomButton label={"Go to order"}></CutomButton>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div>
          <span className="text-[24px] font-[600] text-[#133142]">
            Your Order
          </span>
        </div>

        <div className="mt-[30px]">
          <img
            src={singleEvent?.eventThunbnil}
            alt=""
            className="w-[100%] rounded-[4px]"
          />
        </div>

        <div className="mt-5">
          <span className="lg:text-[36px] md:text-[20px] text-[30px] font-[600] text-[#133142]">
            {singleEvent?.eventdesc}
          </span>
        </div>

        <div className="flex mt-2 gap-3">
          <img src="/assets/images/callender.svg" alt="" />
          <span className="text-[14px] text-[#979797] font-[500]">
            {singleEvent?.dateMonth + " " + singleEvent?.dateDay}
          </span>
        </div>

        <div className="flex mt-2 gap-3">
          <div className="pt-[5px]">
            <img src="/assets/images/location.svg" alt="" />
          </div>
          <span className="text-[14px] text-[#979797] font-[500]">
            {singleEvent?.location}
          </span>
        </div>

        <div className="flex mt-2 gap-3">
          <img src="/assets/images/time.svg" alt="" />
          <span className="text-[14px] text-[#979797] font-[500]">
            {singleEvent?.lagos}
          </span>
        </div>

        <div className="lg:h-[139px] bg-[#E3F5FF] mt-5 rounded-[4px] p-3">
          <div>
            <p className=" text-[16px] font-[500] text-[#979797]">
              Ticket Sent to <br />
              <span className="text-[16px] font-[500] text-[#133142]">
                {booking?.email}
              </span>{" "}
              <span className="text-[16px] font-[500] text-[#FD2F09] underline cursor-pointer">
                Change
              </span>
            </p>
          </div>
          <div>
            <p className="text-[14px] font-[500] text-[#979797]">
              You will recieve the link to the event content in your order
              confirmation email and a reminder email before the event starts
            </p>
          </div>
        </div>

        <div className="mt-5">
          <span className="text-[14px] font-[500] text-[#979797]">
            Total Amount
          </span>
        </div>
        <div>
          <span className="text-[20px] font-[600] text-[#133142]">N3330</span>
        </div>
      </div>
    </div>
  );
}

export default SuccessBooking;
