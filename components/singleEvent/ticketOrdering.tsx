import React, { FC, useState, useEffect } from "react";
import { useMedia } from "react-use";
import Map from "../map/Map";
interface props {
  ticketPricing?: any;
}

const TicketOrdering: FC<props> = ({ ticketPricing }) => {
  const isSmallScreen = useMedia("(max-width: 600px)");
  const isMediumScreen = useMedia("(min-width: 601px) and (max-width: 1023px)");
  const regular = ticketPricing?.regular;
  const vip = ticketPricing?.vip;
  const vvip = ticketPricing?.vvip;
  const [regularQty, setRegularQty] = useState(0);
  const [vipQty, setVipQty] = useState(0);
  const [vvipQty, setVvipQty] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const regularTotal = regular * regularQty;
    const vipTotal = vip * vipQty;
    const vvipTotal = vvip * vvipQty;
    const totalAmount = regularTotal + vipTotal + vvipTotal;
    setTotal(totalAmount);
  }, [regularQty, vipQty, vvipQty]);

  return (
    <div className="lg:grid grid-cols-5 w-full gap-5 mt-10">
      <div className="col-span-3 p-3 border rounded-[4px]">
        <Map location={ticketPricing?.location}></Map>
      </div>

      <div className={`col-span-2 bg-[#E3F5FF] rounded-[4px] p-5 ${isMediumScreen?"mt-5":isSmallScreen&&"mt-5"}`}>
        <div>
          <span className="text-[24px] font-[600] text-[#133142]">
            Ticket Details
          </span>
        </div>

        <div className="w-full p-2 bg-[#ffff] rounded-[4px]">
          <div className="flex justify-between w-full">
            <div className="w-[50%]">
              <span className="text-[18px] font-[600] text-[#133142]">
                Ticket type
              </span>
            </div>
            <div className="w-[25%] ">
              <span className="text-[18px] font-[600] text-[#133142]">
                Price
              </span>
            </div>
            <div className="w-[25%] flex justify-center ">
              <span className="text-[18px] font-[600] text-[#133142]">Qty</span>
            </div>
          </div>

          <hr className="mt-2 mb-2" />

          <div className="flex justify-between w-full">
            <div className="w-[50%]">
              <div className="mt-5">
                <span className="text-[16px] font-[500] text-[#979797]">
                  Regular
                </span>
              </div>

              <div className="mt-5">
                <span className="text-[16px] font-[500] text-[#979797]">
                  VIP
                </span>
              </div>
              <div className="mt-5">
                <span className="text-[16px] font-[500] text-[#979797]">
                  VVIP
                </span>
              </div>
            </div>
            <div className="w-[25%]">
              <div className="mt-5">
                <span className="text-[16px] font-[500] text-[#797979]">
                  {"N " + regular}
                </span>
              </div>

              <div className="mt-5">
                <span className="text-[16px] font-[500] text-[#797979]">
                  {"N " + vip}
                </span>
              </div>
              <div className="mt-5">
                <span className="text-[16px] font-[500] text-[#797979]">
                  {"N " + vvip}
                </span>
              </div>
            </div>
            <div className="w-[25%] ">
              <div className="w-full flex justify-center">
                <div className="mt-5 flex gap-2">
                  <div
                    className="bg-[#F1F1F1] h-[24px] w-[24px] flex items-center justify-center rounded-[4px] cursor-pointer"
                    onClick={() => {
                      if (regularQty >= 1) {
                        setRegularQty(regularQty - 1);
                      }
                    }}
                  >
                    <span>-</span>
                  </div>
                  <div>{regularQty}</div>
                  <div
                    className="bg-[#F1F1F1] h-[24px] w-[24px] flex items-center justify-center rounded-[4px] cursor-pointer"
                    onClick={() => {
                      setRegularQty(regularQty + 1);
                    }}
                  >
                    <span>+</span>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-center">
                <div className="mt-5 flex gap-2">
                  <div
                    className="bg-[#F1F1F1] h-[24px] w-[24px] flex items-center justify-center rounded-[4px] cursor-pointer"
                    onClick={() => {
                      if (vipQty >= 1) {
                        setVipQty(vipQty - 1);
                      }
                    }}
                  >
                    <span>-</span>
                  </div>
                  <div>{vipQty}</div>
                  <div
                    className="bg-[#F1F1F1] h-[24px] w-[24px] flex items-center justify-center rounded-[4px] cursor-pointer"
                    onClick={() => {
                      setVipQty(vipQty + 1);
                    }}
                  >
                    <span>+</span>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-center">
                <div className="mt-5 flex gap-2">
                  <div
                    className="bg-[#F1F1F1] h-[24px] w-[24px] flex items-center justify-center rounded-[4px] cursor-pointer"
                    onClick={() => {
                      if (vvipQty >= 1) {
                        setVvipQty(vvipQty - 1);
                      }
                    }}
                  >
                    <span>-</span>
                  </div>
                  <div>{vvipQty}</div>
                  <div
                    className="bg-[#F1F1F1] h-[24px] w-[24px] flex items-center justify-center rounded-[4px] cursor-pointer"
                    onClick={() => {
                      setVvipQty(vvipQty + 1);
                    }}
                  >
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:mt-[110px] mt-5 flex justify-between">
            <div>
              <span className="text-[16px] font-[500] text-[#979797]">
                Total
              </span>
            </div>
            <div className="pr-3">
              <span className="text-[16px] font-[500] text-[#797979]">
                {`N ${Number.isNaN(total)?"0":total}`}
              </span>
            </div>
          </div>

          <div className="mt-5">
            <button className="bg-[#FD2F09] w-full h-[48px] rounded-[4px] text-[#ffff]">
              Book Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketOrdering;
