import React, { FC, useState, useEffect } from "react";
import lookupStore from "@/store/lookups.store";
import { useRouter } from "next/router";
import { months } from "@/constants";
import MediaCard from "./mediaCard";
import TicketOrdering from "./ticketOrdering";
import UpCommingEvents from "../landingPage/upCommingEvents";
import NewsLetter from "../defaultComponents/newsLetter";
import { useRouter as useNavigation } from "next/navigation";
interface props {}
const EventHeader: FC<props> = ({}) => {
  const navigation = useNavigation();
  const router = useRouter();
  const { id } = router.query;
  const [events, setEvents] = useState<any>([]);
  const { systemLookups, loading } = lookupStore;
  const eventId = id ? parseInt(id as string, 10) : null;
  const singleEvent = events?.find((item: any) => item.id === eventId);
  const[moveNexts,setMoveNext]=useState(false)
  useEffect(() => {
    setEvents(systemLookups.events);
  }, [systemLookups]);
  const dateObject = new Date(singleEvent?.attributes.DateTime);
  const monthShort = months[dateObject.getMonth()];
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();
  const calculatePercentage = (ticketCount: number) =>
    (ticketCount / 170) * 100;
  const festivel = calculatePercentage(65);
  const vipProgress = calculatePercentage(125);

  return (
    <div>
      <div className="lg:grid grid-cols-5 w-full gap-5">
        <div className="col-span-3 lg:h-[701px]">
          <div>
            <img
              src={singleEvent?.attributes?.imageUrl}
              className="w-full rounded-[4px]"
              alt="event image"
            />
          </div>
          <div className="mt-5">
            <div className="bg-[#9797971A] pl-2 pr-2 w-fit rounded-[4px] flex items-center pt-[3px] pb-[3px]">
              <span className="text-[11px] font-[500] text-[#012336]">
                {singleEvent?.attributes?.eventType}
              </span>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-[14px] font-[500] text-[#979797]">
              {singleEvent?.attributes?.longDescription}
            </p>
          </div>
        </div>
        <div className="col-span-2  border border-[#E3F5FF] rounded-[4px] p-5">
          <div className="w-[365px]">
            <span className="text-[36px] font-[600] text-[#133142]">
              {singleEvent?.attributes?.shortDescription}
            </span>
          </div>

          <div className="flex gap-2 mt-5">
            <div>
              <img
                src="http://localhost:1337/uploads/Ellipse_10_6cd9113e19.svg"
                alt=""
                className="h-[40px] w-[40px] rounded-full"
              />
            </div>
            <div>
              <div>
                <span className="text-[14px] font-[500] text-[#133142]">
                  Aina Flourish
                </span>
              </div>
              <div className="mt-[-3px]">
                <p className="text-[14px] font-[400] text-[#979797]">
                  Organiser{" "}
                  <span className="cursor-pointer text-[#FF7A62]">
                    Follow .
                  </span>
                  <span className="cursor-pointer text-[#FF7A62]">Message</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex mt-4 gap-3">
              <img src="/assets/images/callender.svg" alt="" />
              <span className="text-[14px] text-[#979797] font-[500]">
                {monthShort + " " + day + " " + year}
              </span>
            </div>

            <div className="flex mt-4 gap-3">
              <div className="pt-[5px]">
                <img src="/assets/images/location.svg" alt="" />
              </div>
              <span className="text-[14px] text-[#979797] font-[500]">
                {singleEvent?.attributes?.location}
              </span>
            </div>

            <div className="flex mt-4 gap-3">
              <img src="/assets/images/time.svg" alt="" />
              <span className="text-[14px] text-[#979797] font-[500]">
                {singleEvent?.attributes?.lagos}
              </span>
            </div>

            <div className="flex mt-4 gap-3">
              <img src="/assets/images/dolarIcon.svg" alt="" />
              <span className="text-[14px] text-[#979797] font-[500]">
                {"Starting from N" + singleEvent?.attributes?.startingFrom}
              </span>
            </div>
          </div>

          <div className="flex mt-5 gap-3 items-center justify-between ">
            <div>
              <span className="text-[14px] text-[#979797] font-[500]">
                {"Tickets available"}
              </span>
            </div>
            <div>
              <span className="text-[14px] font-[500] text-[#133142]">500</span>
            </div>
          </div>

          <div className="flex w-full bg-[#F1F1F1] h-[7px] mt-3 rounded-[8px]">
            <div
              className={`flex-none h-[7px] bg-blue-500 rounded-[8px]`}
              style={{ flexBasis: `${festivel}%` }}
            />
            <div
              className={`flex-none h-[7px] bg-yellow-500 rounded-[8px]`}
              style={{ flexBasis: `${vipProgress - festivel}%` }}
            />
          </div>
          <div className="flex gap-5 mt-2">
            <div className="flex items-center gap-2">
              <div className="h-[11px] w-[11px] bg-[#17AAFC] rounded-[2px]"></div>
              <div>
                <span className="text-[14px] font-[500] text-[#797979]">
                  Festival (300)
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-[11px] w-[11px] bg-[#F2B01E] rounded-[2px]"></div>
              <div>
                <span className="text-[14px] font-[500] text-[#797979]">
                  VIP (125)
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-[11px] w-[11px] bg-[#F1F1F1] rounded-[2px]"></div>
              <div>
                <span className="text-[14px] font-[500] text-[#797979]">
                  Available (65)
                </span>
              </div>
            </div>
          </div>

          <div className="h-[103px] border border-[#E3F5FF] border-[3px] rounded-[10px] mt-5 flex items-center justify-center bg-[#F3FBFF]">
            <div>
              <div className="flex justify-center">
                <span className="text-[14px] font-[500] text-[#979797]">
                  Event starts in
                </span>
              </div>
              <div>
                <p className="text-[18px] font-[500] text-[#133142]">
                  01 <span className="text-[14px]">m</span> : 09{" "}
                  <span className="text-[14px]">d</span> : 02
                  <span className="text-[14px]">h</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <button className=" bg-[#FD2F09] h-[48px] w-full mt-10 rounded-[4px] text-[#ffff] tex-[18px] font-[500]"
            onClick={()=>{
              setMoveNext(true)
            }}>
              Get Tickets
            </button>
          </div>
        </div>
      </div>
      <div>
        <MediaCard></MediaCard>
      </div>

      <div className="pt-10">
        <TicketOrdering ticketPricing={singleEvent?.attributes} moveNext={moveNexts} setMoveNext={setMoveNext}></TicketOrdering>
      </div>

      <div className="mt-[100px]">
        <UpCommingEvents></UpCommingEvents>
      </div>

      <div>
        <NewsLetter></NewsLetter>
      </div>
    </div>
  );
};

export default EventHeader;
