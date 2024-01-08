import React, { useState } from "react";
import { Tag } from "@/constants";

function EventDescription() {
  const [discription, setDiscription] = useState("");
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagInput, setTagInput] = useState("");
  const InputChange = (e: any) => {
    // Update the state with the current input value
    setDiscription(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      setTags([...tags, { id: tags.length + 1, tag: tagInput.trim() }]);
      setTagInput("");
    }
  };

  return (
    <div className="mt-10 shadow rounded-[16px] lg:p-10 p-3">
      <div>
        <span className="text-[24px] font-[500] text-[#133142]">
          Description
        </span>
      </div>
      <div>
        <span className="text-[14px] font-[500] text-[#979797]">
          Write about the event and details usersneed to know
        </span>
      </div>

      <div className="lg:flex justify-between mt-10">
        <div className="lg:w-[65%]">
          <div>
            <span className="text-[14px] font-[500] text-[#979797]">
              Description
            </span>
          </div>

          <div className="lg:min-h-[240px] border rounded-[5px] mt-3">
            <div className="h-[56px] bg-[#E3F5FF] rounded-[5px] border border-[#97979730]">
              <div className="p-2 h-full">
                <input
                  type="text"
                  placeholder="type here..."
                  value={discription}
                  onChange={InputChange}
                  className="h-full w-full outline-none bg-transparent"
                />
              </div>
            </div>
            {/* line auto breaking */}
            <div className="p-2 overflow-hidden">
              {discription.split(" ").map((word, index, array) => (
                <React.Fragment key={index}>
                  <div style={{ display: "inline-block", overflowY: "auto" }}>
                    {word}
                  </div>
                  {index < array.length - 1 && "\u00A0"}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-[30%]">
          <div className="lg:mt-10">
            <span className="text-[14px] font-[500] text-[#979797]">
              Description about your event
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div>
          <span className="text-[14px] font-[500] text-[#979797]">Tags</span>
        </div>

        <div className="lg:flex justify-between mt-3">
          <div className="lg:w-[65%] ">
            <div className="min-h-[40px]  border rounded-[4px] flex flex-wrap pl-1 pr-1 gap-3">
              <div className="flex flex-wrap items-center gap-1">
                {tags.map((item) => (
                  <div
                    key={item.id}
                    className="border pl-[3px] pr-[3px] rounded-[6px] flex items-center bg-[#E3F5FF] text-[#FF7A62]"
                  >
                    {item.tag}
                  </div>
                ))}
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Enter Tag..."
                  className="outline-none w-[100px]"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
            {tags.length >= 1 && (
              <div>
                <span
                  className="text-[14px] font-[500] text-[#FD2F09] cursor-pointer"
                  onClick={() => {
                    setTags([]);
                  }}
                >
                  Clear 
                </span>
              </div>
            )}
          </div>
          <div className="lg:w-[30%]">
            <div className="lg: pt-2">
              <span className="text-[14px] font-[500] text-[#979797]">
                Mention up to six tags
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div>
          <span className="text-[14px] font-[500] text-[#979797]">
            Audience restrictions
          </span>
        </div>
      </div>
    </div>
  );
}

export default EventDescription;
