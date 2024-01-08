import React, { useState } from "react";

function UploadMedia() {
  const [media, setMedia] = useState([
    { id: 1, ImageUrl1: "", ImageUrl2: "", ImageUrl3: "" },
  ]);

  // adding dynamic Media fields
  const addMediaField = () => {
    const newMediaFields = [
      ...media,
      {
        id: media.length + 1,
        ImageUrl1: "",
        ImageUrl2: "",
        ImageUrl3: "",
      },
    ];
    setMedia(newMediaFields);
  };
  return (
    <div>
      <div>
        <span className="text-[14px] font-[500] text-[#979797]">
          Upload Media
        </span>
      </div>

      <div className="lg:flex justify-between mt-5">
        <div className="lg:w-[65%] ">
          <div className="h-[336px] bg-[#F6FCFF] rounded-[16px] p-1 border border-[2px] border-dotted flex items-center justify-center">
            <div className="cursor-pointer">
              <div className="flex justify-center">
                <img src="/assets/images/upload_icon.svg" alt="upload" />
              </div>

              <div className="flex justify-center">
                <span className="text-[24px] font-[500] text-[#979797]">
                  Click or drop image
                </span>
              </div>
            </div>  
          </div>
        </div>
        <div className="lg:w-[30%]">
          <div className="lg:mt-5">
            <span className=" text-[14px] font-[400] text-[#979797]">
              The main photo for everyone to see
            </span>
          </div>

          <div className="lg:mt-12">
            <span className=" text-[14px] font-[400] text-[#FF7A62]">
              It is recommended that all photo be in 16:9 ration with miniimum
              resolution of 1600 X 1800
            </span>
          </div>
        </div>
      </div>

      {media.map((item) => (
        <div className="lg:flex justify-between mt-5"
        key={item.id}>
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
                You can uplaod more photos of your event
              </span>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-5">
        <span className="text-[16px] font-[500] text-[#FD2F09] cursor-pointer" onClick={addMediaField}>
          + Add more media files
        </span>
      </div>
    </div>
  );
}

export default UploadMedia;
