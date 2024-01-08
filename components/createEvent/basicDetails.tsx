import React, { useState } from "react";
import UploadMedia from "./uploadMedia";

function BasicDetails() {
  const [ticketFields, setTicketFields] = useState([
    { id: 1, ticketType: "", numberOfTickets: "", price: "" },
  ]);

  // adding dynamic fields
  const addPriceField = () => {
    const newPriceFields = [
      ...ticketFields,
      {
        id: ticketFields.length + 1,
        ticketType: "",
        numberOfTickets: "",
        price: "",
      },
    ];
    setTicketFields(newPriceFields);
  };
  return (
    <div className="mt-10 shadow lg:p-10 p-3 rounded-[16px]">
      <div>
        <span className="text-[24px] font-[500] text-[#133142]">
          Basic Details
        </span>
      </div>
      <div>
        <span className="text-[14px] font-[500] text-[#979797]">
          this section contains the basic details of your event
        </span>
      </div>
      {/* event Details */}
      <div className="lg:flex gap-10 justify-between items-center mt-8">
        <div className="lg:w-[65%] ">
          <div>
            <span className="text-[14px] font-[500] text-[#979797]">
              Event name
            </span>
          </div>

          <div className="border p-2 rounded-[5px] mt-3">
            <input
              type="text"
              placeholder="Event"
              className="outline-none h-full w-full"
            />
          </div>
        </div>

        <div className="lg:w-[30%] lg:mt-7">
          <div>
            <span className=" text-[14px] font-[400] text-[#979797]">
              This title will be displayed on the event page and social medias
            </span>
          </div>
        </div>
      </div>

      <div className="lg:flex justify_between gap-10 mt-7">
        <div className="lg:w-[65%] lg:flex justify-between gap-3">
          <div>
            <div>
              <span className="text-[14px] font-[500] text-[#979797]">
                Start date
              </span>
            </div>

            <div className="flex gap-3 mt-3">
              <div className="h-[40px] border lg:w-[200px] md:w-[70%] w-[50%] rounded-[4px] p-2">
                <input
                  type="date"
                  className="h-full w-full outline-none text-[#979797]"
                />
              </div>
              <div className="lg:w-[145px] md:w-[30%] w-[50%]">
                <div className="h-[40px] border  rounded-[4px] p-2">
                  <input
                    type="time"
                    className="h-full w-full outline-none text-[#979797]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <span className="text-[14px] font-[500] text-[#979797]">
                  End date
                </span>
              </div>

              <div className="flex gap-3 mt-3">
                <div className="h-[40px] border lg:w-[200px] md:w-[70%] w-[50%] rounded-[4px] p-2">
                  <input
                    type="date"
                    className="h-full w-full outline-none text-[#979797]"
                  />
                </div>
                <div className="lg:w-[145px] md:w-[30%] w-[50%]">
                  <div className="h-[40px] border  rounded-[4px] p-2">
                    <input
                      type="time"
                      className="h-full w-full outline-none text-[#979797]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:w-[30%] lg:mt-11 lg:pl-3">
          <div>
            <span className=" text-[14px] font-[400] text-[#979797]">
              Date and duration of your event
            </span>
          </div>
        </div>
      </div>

      {ticketFields.map((items) => (
        <div className="lg:flex justify_between gap-10 mt-7" key={items.id}>
          <div className="lg:w-[65%] lg:flex justify-between">
            <div>
              {items.id === 1 && (
                <div>
                  <span className=" text-[14px] font-[400] text-[#979797]">
                    Ticket type
                  </span>
                </div>
              )}

              <div className="border rounded-[4px] lg:w-[235px] h-[40px] mt-3 pl-1 pr-1">
                <select
                  id="mySelect"
                  name="mySelect"
                  className="mt-1 block w-full p-2 rounded-md outline-none   lg:text-[14px] md:text-[15px] font-[500] text-[#979797] "
                >
                  <option
                    value=""
                    disabled
                    className="lg:text-[15px] md:text-[15px] font-[500] text-[#133142]"
                  >
                    Choose
                  </option>
                  <option
                    value="option1"
                    className="lg:text-[15px] md:text-[15px] font-[500] text-[#133142]"
                  >
                    Regular
                  </option>
                  <option
                    value="option2"
                    className="lg:text-[15px] md:text-[15px] font-[500] text-[#133142]"
                  >
                    Vip
                  </option>

                  <option
                    value="option3"
                    className="lg:text-[15px] md:text-[15px] font-[500] text-[#133142]"
                  >
                    Vvip
                  </option>
                </select>
              </div>
            </div>
            <div>
              {items.id === 1 && (
                <div>
                  <span className=" text-[14px] font-[400] text-[#979797]">
                    No of tickets
                  </span>
                </div>
              )}
              <div className="border rounded-[4px] lg:w-[235px] h-[40px] mt-3 p-1">
                <input
                  type="number"
                  className=" h-full w-full outline-none text-[18px] font-[500] text-[#979797]"
                  placeholder="number"
                />
              </div>
            </div>
            <div>
              {items.id === 1 && (
                <div>
                  <span className=" text-[14px] font-[400] text-[#979797]">
                    Price
                  </span>
                </div>
              )}
              <div className="flex border rounded-[4px] lg:w-[235px] h-[40px] mt-3">
                <div className="h-full flex items-center w-[50px] bg-[#E3F5FF] justify-center">
                  <span className="text-[24px] font-[500] text-[#979797]">
                    N
                  </span>
                </div>
                <div className="p-1">
                  <input
                    type="number"
                    className="h-full w-full outline-none text-[18px] font-[500] text-[#979797]"
                    placeholder="price"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`lg:w-[30%] flex items-center ${
              items.id === 1 ? "pt-8" : "pt-2"
            } pl-1`}
          >
            <span className=" text-[14px] font-[400] text-[#979797]">
              Total price paid for attending the event and number of ticket per
              event type
            </span>
          </div>
        </div>
      ))}

      <div className="mt-5">
        <span
          className="cursor-pointer text-[#FD2F09] text-[16px] font-[500]"
          onClick={addPriceField}
        >
          + Add more price value
        </span>
      </div>

      <div className="mt-10">
        <UploadMedia></UploadMedia>
      </div>
    </div>
  );
}

export default BasicDetails;
