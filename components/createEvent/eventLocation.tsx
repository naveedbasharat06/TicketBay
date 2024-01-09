import React from "react";
import Map from "../map/Map";

function EventLocation() {
  return (
    <div className="shadow rounded-[16px] lg:p-10 p-3 mt-10">
      <div>
        <span className="text-[24px] font-[500] text-[#133142]">Location</span>
      </div>

      <div>
        <span className="text-[14px] font-[500] text-[#979797]">
          Details about where the event will be hosted
        </span>
      </div>

      <div className="lg:flex justify-between mt-10">
        <div className="lg:w-[65%]">
          <div>
            <span className="text-[14px] font-[500] text-[#979797]">
              Location of the venue
            </span>
          </div>

          <div className="h-[40px] border rounded-[5px] mt-3 p-1">
            <input
              type="text"
              className="h-full outline-none"
              placeholder="Location"
            />
          </div>
        </div>
        <div className="lg:w-[30%]">
          <div className="lg:pt-2 lg:mt-8">
            <span className="text-[14px] font-[500] text-[#979797]">
              Name and address of the place you’re hosting the event
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between lg:w-[65%] mt-10">
        <div className="w-[48%]">
          <div>
            <span className="text-[14px] font-[500] text-[#979797]">State</span>
          </div>
          <div className="border h-[40px] mt-3 rounded-[5px] p-1">
            <input type="text" className="h-full w-full outline-none" />
          </div>
        </div>
        <div className="w-[48%]">
          <div>
            <span className="text-[14px] font-[500] text-[#979797]">City</span>
          </div>
          <div className="border h-[40px] mt-3 rounded-[5px] p-1">
            <input type="text" className="h-full w-full outline-none" />
          </div>
        </div>
      </div>

      <div className="lg:flex justify-between mt-10">
        <div className="lg:w-[65%]">
          <div className="h-[287px]">
            <Map location="johar town lahore" height="287px"></Map>
          </div>
        </div>
        <div className="lg:w-[30%]">
          <div className="lg:pt-2 lg:mt-3">
            <span className="text-[14px] font-[500] text-[#979797]">
              You can drag the map and pinpoint the location instead
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-10">
          <span className="text-[14px] font-[500] text-[#979797]">
            Images of the venue
          </span>
        </div>
        <div className="lg:flex justify-between mt-3">
          <div className="lg:w-[65%] lg:flex md:flex gap-4">
            <div className="md:w-[240px] lg:md:w-[240px] h-[192px] border border-dotted border-[2px] rounded-[13px] flex justify-center items-center bg-[#F6FCFF] mt-2">
              <div className="cursor-pointer">
                <div className="flex justify-center">
                  <img
                    src="/assets/images/upload_icon.svg"
                    className="h-[50px] w-[50px]"
                    alt=""
                  />
                </div>
                <div className="flex justify-center">
                  <span className="text-[14px] font-[500] text-[#979797]">
                    Click or drop image
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-[240px] lg:md:w-[240px] h-[192px] border border-dotted border-[2px] rounded-[13px] flex justify-center items-center bg-[#F6FCFF] mt-2">
              <div className="cursor-pointer">
                <div className="flex justify-center">
                  <img
                    src="/assets/images/upload_icon.svg"
                    className="h-[50px] w-[50px]"
                    alt=""
                  />
                </div>
                <div className="flex justify-center">
                  <span className="text-[14px] font-[500] text-[#979797]">
                    Click or drop image
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-[240px] lg:md:w-[240px] h-[192px] border border-dotted border-[2px] rounded-[13px] flex justify-center items-center bg-[#F6FCFF] mt-2">
              <div className="cursor-pointer">
                <div className="flex justify-center">
                  <img
                    src="/assets/images/upload_icon.svg"
                    className="h-[50px] w-[50px]"
                    alt=""
                  />
                </div>
                <div className="flex justify-center">
                  <span className="text-[14px] font-[500] text-[#979797]">
                    Click or drop image
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%]">
            <div className="lg:mt-5">
              <span className=" text-[14px] font-[400] text-[#979797]">
                Upload photos of the place or hotel if available
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventLocation;
