import React, { FC, useState } from "react";
import { eventData, initialBookingState, recipientState } from "@/constants";
import CutomButton from "../defaultComponents/customButtons/cutomButton";
import NewsLetter from "../defaultComponents/newsLetter";
import { useMedia } from "react-use";
import bookingsStore from "@/store/bookings.store";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";
import { Payment } from "@/components/payment";

interface props {
  id?: any;
}

const TicketSummury: FC<props> = ({ id }) => {
  const isSmallScreen = useMedia("(max-width: 600px)");
  const isMediumScreen = useMedia("(min-width: 601px) and (max-width: 1023px)");
  const singleEvent = eventData.filter((item) => item.id === parseInt(id));
  const [bookings, setBookings] = useState(initialBookingState);
  const [recipient, setRecipient] = useState(recipientState);
  const [eventUpdate, setEventUpdate] = useState(false);
  const [newsUpdate, setNewsUpdate] = useState(false);
  console.log("bookings", JSON.parse(JSON.stringify(bookingsStore.bookings)));
  const inputFieldChange = (e: any) => {
    const { name, value } = e.target;
    // If the property is inside ticketDetails, update it accordingly
    if (name.startsWith("ticketDetails.")) {
      const ticketDetailsField = name.split(".")[1];
      setRecipient((prevFormData) => ({
        ...prevFormData,
        [ticketDetailsField]: value,
      }));
    } else {
      // If not inside ticketDetails, update the main state
      setBookings((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const CheckboxChange = (parm: any) => {
    if (parm === 1) {
      setNewsUpdate(!newsUpdate); // Toggle the value
    } else if (parm === 2) {
      setEventUpdate(!eventUpdate); // Toggle the value
    }
  };
  const createBooking = () => {
    const uuid = uuidv4();
    if (validateContactForm()) {
      bookingsStore.addBooking({
        ...bookings,
        id: uuid,
        eventId: id,
        newsUpdate: newsUpdate,
        eventUpdate: eventUpdate,
      });
      toast.success("Booking created.");
      // navigation.push(`booking?id=${uuid}`);
      Payment({
        lineItems: [{ price: "price_1OMvGvDouCITlfo8BaYKy42i", quantity: 1 }],
        id: uuid,
      });
    } else {
      toast.error("Please fill all fields.");
    }
  };

  const addRecipient = () => {
    if (validateRecipient()) {
      setBookings((prevBookings) => ({
        ...prevBookings,
        recipient: [...prevBookings.recipient, { ...recipient, id: uuidv4() }],
      }));
      setRecipient(recipientState);
      toast.success("Recipient created.");
    } else {
      toast.error("Please fill all fields.");
    }
  };

  const validateContactForm = () =>
    Object.entries(bookings).every(
      ([key, value]) =>
        key === "id" ||
        key === "userId" ||
        key === "eventId" ||
        (key !== "id" && key !== "eventId" && key !== "userId" && value !== "")
    );

  const validateRecipient = () =>
    Object.entries(recipient).every(
      ([key, value]) => key === "id" || (key !== "id" && value !== "")
    );

  return (
    <div>
      <div className="lg:grid  grid-cols-3">
        <div className="col-span-2 lg:mr-[150px]">
          <div>
            <span className="lg:text-[48px] text-[30px] font-[600] text-[#133142]">
              Checkout
            </span>
          </div>
          <div>
            <p className="text-[14px] text-[#797979] font-[500]">
              By clicking continue to payment’, i accept the{" "}
              <span className="text-[#FD2F09] underline cursor-pointer">
                Terms of service
              </span>{" "}
              and have read the{" "}
              <span className="text-[#FD2F09] underline cursor-pointer">
                Privacy Policy
              </span>
              . I agree that ticketbay may{" "}
              <span className="text-[#FD2F09] underline cursor-pointer">
                share my Information
              </span>{" "}
              with the event organizer
            </p>
          </div>

          <div className="lg:flex mt-[30px] gap-6">
            <div>
              <img
                src={singleEvent[0]?.eventThunbnil}
                alt="img"
                className="rounded-[4px] lg:w-[380px] lg:h-[237px] w-full md:h-[400px]"
              />
            </div>

            <div className="lg:w-[360px]">
              <div>
                <span className="text-[36px] font-[600] text-[#133142]">
                  {singleEvent[0]?.eventdesc}
                </span>
              </div>

              <div className="flex mt-2 gap-3">
                <img src="/assets/images/callender.svg" alt="" />
                <span className="text-[14px] text-[#979797] font-[500]">
                  {singleEvent[0]?.dateMonth + " " + singleEvent[0]?.dateDay}
                </span>
              </div>

              <div className="flex mt-2 gap-3">
                <div className="pt-[5px]">
                  <img src="/assets/images/location.svg" alt="" />
                </div>
                <span className="text-[14px] text-[#979797] font-[500]">
                  {singleEvent[0]?.location}
                </span>
              </div>

              <div className="flex mt-2 gap-3">
                <img src="/assets/images/time.svg" alt="" />
                <span className="text-[14px] text-[#979797] font-[500]">
                  {singleEvent[0]?.lagos}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-10">
            <div>
              <span className="text-[24px] font-[600] text-[#133142]">
                Contact Information
              </span>
            </div>
            <div>
              <div className="flex mt-2 gap-3">
                <img src="/assets/images/remeaning_time.svg" alt="" />
                <p className="text-[14px] text-[#133142] font-[600]">
                  7:30
                  <span className="text-[#979797] font-[500]">
                    {" "}
                    left to complete booking
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <span className="text-[14px] font-[500] text-[#797979]">
                Continue as guest or{" "}
                <span className="text-[#FD2F09] underline cursor-pointer">
                  Login
                </span>{" "}
                for a faster experience
              </span>
            </div>
          </div>
          <form action="#" className="mt-10">
            <div>
              <div className="lg:flex gap-10">
                <div className="border border-[#97979730] h-[48px] lg:w-[320px] flex items-center rounded-[4px] pl-5 pr-5">
                  <input
                    type="text"
                    placeholder="First name *"
                    name="firstName"
                    required
                    className="outline-none"
                    value={bookings.firstName}
                    onChange={inputFieldChange}
                  />
                </div>

                <div
                  className={`border border-[#97979730] h-[48px] lg:w-[320px] flex items-center rounded-[4px] pl-5 pr-5 ${
                    isSmallScreen || isMediumScreen ? "mt-8" : null
                  }`}
                >
                  <input
                    type="text"
                    placeholder="Last name *"
                    required
                    className="outline-none"
                    name="lastName"
                    value={bookings.lastName}
                    onChange={inputFieldChange}
                  />
                </div>
              </div>

              <div className="lg:flex gap-10 mt-8">
                <div className="border border-[#97979730] h-[48px] lg:w-[320px] flex items-center rounded-[4px] pl-5 pr-5">
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="outline-none"
                    required
                    name="email"
                    value={bookings.email}
                    onChange={inputFieldChange}
                  />
                </div>
                <div
                  className={`border border-[#97979730] h-[48px] lg:w-[320px] flex items-center rounded-[4px] pl-5 pr-5 ${
                    isSmallScreen || isMediumScreen ? "mt-8" : null
                  }`}
                >
                  <input
                    type="email"
                    placeholder="Confirm Email Address *"
                    className="outline-none"
                    name="confirmEmail"
                    required
                    value={bookings.confirmEmail}
                    onChange={inputFieldChange}
                  />
                </div>
              </div>
            </div>

            <div className="justify-between mt-10">
              <div>
                <span className="text-[24px] font-[600] text-[#133142]">
                  Ticket Details
                </span>
              </div>
              <div>
                <p className="text-[14px] text-[#797979] font-[500]">
                  You can send the tickets to one email or end to all recipient
                  by adding to send to all you are getting the ticket for.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <div className="lg:flex gap-10">
                <div className="border border-[#97979730] h-[48px] lg:w-[320px] flex items-center rounded-[4px] pl-5 pr-5">
                  <input
                    type="text"
                    placeholder="First name *"
                    className="outline-none"
                    required
                    name="ticketDetails.firstName"
                    value={recipient.firstName}
                    onChange={inputFieldChange}
                  />
                </div>
                <div
                  className={`border border-[#97979730] h-[48px] lg:w-[320px] flex items-center rounded-[4px] pl-5 pr-5 ${
                    isSmallScreen || isMediumScreen ? "mt-8" : null
                  }`}
                >
                  <input
                    type="text"
                    placeholder="Last name *"
                    className="outline-none"
                    required
                    name="ticketDetails.lastName"
                    value={recipient.lastName}
                    onChange={inputFieldChange}
                  />
                </div>
              </div>

              <div className="lg:flex gap-10 mt-8">
                <div className="border border-[#97979730] h-[48px] lg:w-[320px] flex items-center rounded-[4px] pl-5 pr-5">
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="outline-none"
                    required
                    name="ticketDetails.email"
                    value={recipient.email}
                    onChange={inputFieldChange}
                  />
                </div>
                <div
                  className={`border border-[#97979730] h-[48px] lg:w-[320px] flex items-center rounded-[4px] pl-5 pr-5 ${
                    isSmallScreen || isMediumScreen ? "mt-8" : null
                  }`}
                >
                  <input
                    type="phone"
                    placeholder="Phone number *"
                    className="outline-none"
                    required
                    name="ticketDetails.phone"
                    value={recipient.phone}
                    onChange={inputFieldChange}
                  />
                </div>
              </div>
            </div>

            <div
              className="h-[48px] w-[135px] border border-[#FD2F09] rounded-[4px] flex justify-center items-center mt-7 cursor-pointer"
              onClick={addRecipient}
            >
              <span className="text-[14px] font-[500] text-[#FD2F09]">
                Add recipient
              </span>
            </div>

            <div className="mt-8 flex gap-5 items-center">
              <div>
                <input
                  type="checkbox"
                  className="checkbox-color checkbox"
                  onChange={() => CheckboxChange(1)}
                />
              </div>

              <span className="text-[14px] font-[500] text-[#979797]">
                Keep me updated on the latest news, event, and exclusive offers
                from this organizer
              </span>
            </div>

            <div className="mt-4 flex gap-5 items-center">
              <div>
                <input
                  type="checkbox"
                  className="checkbox-color checkbox"
                  onChange={() => CheckboxChange(2)}
                />
              </div>

              <span className="text-[14px] font-[500] text-[#979797]">
                Ticketbay can send me emails about best events nearby
              </span>
            </div>
          </form>
        </div>

        <div className="cols-span-1 pt-10">
          <div className="w-full border lg:h-[444px] rounded-[4px] bg-[#E3F5FF] p-5">
            <div>
              <span className="text-[20px] font-[600] text-[#133142]">
                Ticket Order Summary
              </span>
            </div>

            <div className="flex justify-between mt-6">
              <div>
                <span className="text-[16px] font-[500] text-[#979797]">
                  3x {singleEvent[0]?.eventdesc}
                </span>
              </div>
              <div>
                <span className="text-[16px] font-[500] text-[#979797]">
                  N3000
                </span>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <div>
                <span className="text-[16px] font-[500] text-[#979797]">
                  Service Charge
                </span>
              </div>
              <div>
                <span className="text-[16px] font-[500] text-[#979797]">
                  N300
                </span>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <div>
                <span className="text-[16px] font-[500] text-[#979797]">
                  Tax
                </span>
              </div>
              <div>
                <span className="text-[16px] font-[500] text-[#979797]">
                  N30
                </span>
              </div>
            </div>

            <div className="flex justify-between mt-10">
              <div>
                <span className="text-[16px] font-[500] text-[#979797]">
                  Total
                </span>
              </div>
              <div>
                <span className="text-[16px] font-[500] text-[#979797]">
                  N3330
                </span>
              </div>
            </div>
            <div className="mt-7">
              <hr />
            </div>
            <div className="mt-7">
              <div>
                <span className="text-[14px] font-[500] text-[#133142]">
                  Got any Coupons?
                </span>
              </div>

              <div className="flex justify-center mt-2 h-[55px]">
                <div className="w-[100%] bg-[white] flex justify-between items-center pl-3 pr-3 rounded-[4px]">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Coupon"
                      className={`outline-none ${
                        isSmallScreen
                          ? "w-[150px]"
                          : isMediumScreen
                          ? "w-[100px]"
                          : "w-[170px]"
                      }`}
                    />
                  </div>
                  <div>
                    <CutomButton></CutomButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-10 w-fit" onClick={createBooking}>
          <CutomButton label={"Continue to payment"}></CutomButton>
        </div>
      </div>
      <div>
        <NewsLetter></NewsLetter>
      </div>
    </div>
  );
};

export default TicketSummury;
