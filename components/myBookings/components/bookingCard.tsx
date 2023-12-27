import React, { FC, useState } from "react";
import { dashboardDropdown } from "@/constants";
import RecipientCard from "./recipientCard";
import QRCodeGenerator from "./QrCode";
interface props {
  events?: any;
  bookings?: any;
  eventId?: any;
}
const BookingCard: FC<props> = ({ events, bookings, eventId }) => {
  const [dropdown, setDropdown] = useState(false);
  const [id, setId] = useState();
  const [view, setView] = useState(false);
  const handelDropDown = (menuId: any) => {
    if (menuId === 1 && !view) {
      setView(true);
    } else {
      setView(false);
    }
  };
  return (
    <>
      <div
        className={` shadow w-[970px] ${!view ? "h-[70px] " : "h-[563px] "}`}
      >
        <div
          className={`flex gap-[5%]  items-center rounded-[4px] w-[970px] h-[70px]`}
        >
          <div className="pl-5 flex gap-5">
            <img
              src={events.attributes.imageUrl}
              alt="event"
              className="h-[50px] w-[50px] rounded-[4px] "
            />
            <div>
              <div>
                <span className="text-[#133142] font-[18px] text-[#133142]">
                  {events.attributes.shortDescription}
                </span>
              </div>
              <div>
                <span className="text-[14px] font-[500] text-[#797979]">
                  Wed, 05 Jun, 9 PM
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[27px] w-[75px] bg-[#E3F5FF] rounded-[4px]  flex items-center justify-center">
              <span>{events.attributes.eventType}</span>
            </div>
          </div>
          <div>
            <div>
              <span className="text-[#797979] text-[16px] font-[500]">
                Lagos
              </span>
            </div>
            <div>
              <span className="text-[14px] font-[500] text-[#979797]">
                {events.attributes.location}
              </span>
            </div>
          </div>
          <div>
            <div className="text-center">
              <span className="text-[18px] font-[500] text-[#133142]">
                N{events.attributes.startingFrom}
              </span>
            </div>
            <div>
              <span className="text-[14px] font-[500] text-[#F2B01E]">
                Upcoming
              </span>
            </div>
          </div>
          <div>
            <img
              src="/assets/images/menu-icon.svg"
              alt="menu"
              className="cursor-pointer"
              onClick={() => {
                setId(events.id);
                setDropdown(!dropdown);
              }}
            />
          </div>
        </div>
        {eventId === events.id && dropdown && id == eventId && (
          <div className="w-[110px] h-[170px] shadow absolute bg-[#ffff]  right-[100px]">
            {dashboardDropdown.map((item) => (
              <div
                className=" pl-2 mt-[9px] cursor-pointer hover-menu"
                onClick={() => {
                  setDropdown(false);
                  handelDropDown(item.id);
                }}
              >
                <span className="text-[14px] font-[500] text-[#979797] ">
                  {view && item.menu === "View" ? "Close" : `${item.menu}`}
                </span>
              </div>
            ))}
          </div>
        )}

        {eventId === events.id && view && (
          <div className="flex justify-between p-5 gap-5  ">
            <div className=" w-[65%]">
              <div>
                <span className="text-[28px] font-[500] text-[#133142]">
                  {events.attributes.shortDescription}
                </span>
              </div>
              <div>
                <span className="text-[14px] font-[500] text-[#133142]">
                  #56394704
                </span>
              </div>

              <div className="grid grid-cols-3 mt-3">
                <div className="col-span-1">
                  <div>
                    <div>
                      <span className="text-[13px] font-[500] text-[#979797]">
                        EVENT TYPE
                      </span>
                    </div>
                    <div>
                      <span className="text-[16px] font-[500] text-[#133142]">
                        {events.attributes.eventType}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div>
                      <span className="text-[13px] font-[500] text-[#979797]">
                        PAYMENT METHOD
                      </span>
                    </div>
                    <div>
                      <span className="text-[16px] font-[500] text-[#133142]">
                        Bank transfer
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div>
                    <div>
                      <span className="text-[13px] font-[500] text-[#979797]">
                        DATE
                      </span>
                    </div>
                    <div>
                      <span className="text-[16px] font-[500] text-[#133142]">
                        30, July 2021
                      </span>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div>
                      <span className="text-[13px] font-[500] text-[#979797]">
                        TICKET BOUGHT
                      </span>
                    </div>
                    <div>
                      <span className="text-[16px] font-[500] text-[#133142]">
                        Vip (5)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div>
                    <div>
                      <span className="text-[13px] font-[500] text-[#979797]">
                        CONTACT DETAILS
                      </span>
                    </div>
                    <div>
                      <span className="text-[16px] font-[500] text-[#133142]">
                        08035632356
                      </span>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div>
                      <span className="text-[13px] font-[500] text-[#979797]">
                        LOCATION
                      </span>
                    </div>
                    <div>
                      <span className="text-[16px] font-[500] text-[#133142]">
                        {events.attributes.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-[13px] font-[500] text-[#979797]">
                  Tickets sent to: {events.attributes.eventType}
                </span>
              </div>

              <div className="flex gap-4 mt-5">
                <RecipientCard></RecipientCard>
                <RecipientCard></RecipientCard>
                <RecipientCard></RecipientCard>
              </div>
            </div>
            <div className=" bg-[#E3F5FF] w-[35%] rounded-[4px] mt-5">
              <div>
                <img
                  src={events.attributes.imageUrl}
                  alt=""
                  className="h-[144px] w-full rounded-[4px, 4px, 0px, 0px]"
                />
              </div>

              <div className="p-3">
                <div>
                  <div>
                    <span className="text-[12px] font-[500] text-[#979797]">
                      Order information
                    </span>
                  </div>
                  <div>
                    <span className="text-[14px] font-[500] text-[#133142]">
                      Order #56394704
                    </span>
                  </div>
                </div>

                <div>
                  <div>
                    <span className="text-[12px] font-[500] text-[#979797]">
                      Ordered by
                    </span>
                  </div>
                  <div>
                    <span className="text-[14px] font-[500] text-[#133142]">
                      Kolade Kolade
                    </span>
                  </div>
                </div>
                <div>
                  <div>
                    <span className="text-[12px] font-[500] text-[#979797]">
                      Date
                    </span>
                  </div>
                  <div>
                    <span className="text-[14px] font-[500] text-[#133142]">
                      Feburary 3, 2021, 9:41 PM
                    </span>
                  </div>
                </div>

                <div className="flex justify-center mt-2">
                  <QRCodeGenerator value={"www.google.com"}></QRCodeGenerator>
                </div>

                <div>
                  <span className="text-[14px] font-[500] text-[#FD2F09] cursor-pointer">
                    Download
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BookingCard;
