import React, { useEffect, useState } from "react";
import CutomButton from "../defaultComponents/customButtons/cutomButton";
import bookingsStore from "@/store/bookings.store";
import { useRouter } from "next/router";
import lookupStore from "@/store/lookups.store";
import { addBooking } from "@/services/booking";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter as useNavigation } from "next/navigation";

function SuccessBooking() {
  const navigation = useNavigation();
  const router = useRouter();
  const { id } = router.query;
  const [events, setEvents] = useState([]);
  const [bookings, setBookings] = useState<any>([]);
  const [isBooked, setIsBooked] = useState(false);
  const { mutateAsync, error, isError } = useMutation({
    mutationFn: addBooking,
    onSuccess: (responce: any) => {
      toast.success("ticket booked successfully");
      setIsBooked(true);
    },
    onError: (error: any) => {
      toast.error(error.response.data.error.message);
    },
  });
  const singleEvent = events.filter(
    (item: any) => item.id === parseInt(bookingsStore?.bookings[0].eventId)
  ) as { [x: string]: any };
  const { systemLookups, loading } = lookupStore;
  useEffect(() => {
    const { events = [] } = systemLookups || {};
    setEvents(events);
    setBookings(bookingsStore?.bookings[0]);
    const fetchData = async () => {
      const { events = [] } = systemLookups || {};
      setEvents(events);
      setBookings(bookingsStore?.bookings[0]);
    };

    fetchData();
  }, [systemLookups, bookingsStore]);
  console.log("booking", JSON.parse(JSON.stringify(bookingsStore.bookings)));
  useEffect(() => {
    const addBooking = async () => {
      await mutateAsync({
        data: {
          ...bookingsStore.bookings[0],
        },
      });
    };

    addBooking();
  }, [bookingsStore]);

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

          <div className="mt-[30px] pl-5 pr-5 flex justify-center ">
            <div className="w-fit" onClick={()=>{
              navigation.push("/dashboard/bookings")
            }} >
              <CutomButton label={"Go to order"}></CutomButton>
            </div>
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
            src={singleEvent[0]?.attributes.imageUrl}
            alt=""
            className="w-[100%] rounded-[4px]"
          />
        </div>

        <div className="mt-5">
          <span className="lg:text-[36px] md:text-[20px] text-[30px] font-[600] text-[#133142]">
            {singleEvent[0]?.attributes.shortDescription}
          </span>
        </div>

        <div className="flex mt-2 gap-3">
          <img src="/assets/images/callender.svg" alt="" />
          <span className="text-[14px] text-[#979797] font-[500]">
            {/* {singleEvent?.dateMonth + " " + singleEvent?.dateDay} */}
          </span>
        </div>

        <div className="flex mt-2 gap-3">
          <div className="pt-[5px]">
            <img src="/assets/images/location.svg" alt="" />
          </div>
          <span className="text-[14px] text-[#979797] font-[500]">
            {singleEvent[0]?.attributes.location}
          </span>
        </div>

        <div className="flex mt-2 gap-3">
          <img src="/assets/images/time.svg" alt="" />
          <span className="text-[14px] text-[#979797] font-[500]">
            {singleEvent[0]?.attributes.lagos}
          </span>
        </div>

        <div className="lg:h-[139px] bg-[#E3F5FF] mt-5 rounded-[4px] p-3">
          <div>
            <p className=" text-[16px] font-[500] text-[#979797]">
              Ticket Sent to <br />
              <span className="text-[16px] font-[500] text-[#133142]">
                {bookings?.email}
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
          <span className="text-[20px] font-[600] text-[#133142]">
            N{bookings?.total}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SuccessBooking;
