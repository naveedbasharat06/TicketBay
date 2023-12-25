import React,{FC} from "react";
interface props{
  booking?:any
}

const BookingCard:FC<props>=({booking})=> {
  return (
    <div className="flex gap-[5%] h-[70px] shadow items-center rounded-[4px] w-[970px]">
      <div className="pl-5 flex gap-5">
        <img
          src={booking.imageUrl}
          alt="event"
          className="h-[50px] w-[50px] rounded-[4px] "
        />
        <div>
          <div>
            <span className="text-[#133142] font-[18px] text-[#133142]">
              {booking.shortDescription}
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
          <span>{booking.eventType}</span>
        </div>
      </div>
      <div>
        <div>
          <span className="text-[#797979] text-[16px] font-[500]">Lagos</span>
        </div>
        <div>
          <span className="text-[14px] font-[500] text-[#979797]">
            {booking.location}
          </span>
        </div>
      </div>
      <div>
        <div className="text-center">
          <span className="text-[18px] font-[500] text-[#133142]">N{booking.startingFrom}</span>
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
        />
      </div>
    </div>
  );
}

export default BookingCard;
