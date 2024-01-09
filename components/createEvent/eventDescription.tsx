import React, { useState } from "react";
import { Tag } from "@/constants";

function EventDescription() {
  const [discription, setDiscription] = useState("");
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [include, setInclude] = useState([
    { id: 1, include: "" },
    { id: 2, include: "" },
    { id: 3, include: "" },
  ]);
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

  // adding dynamic Media fields
  const addIncludeField = () => {
    const newIncludeFields = [
      ...include,
      {
        id: include.length + 1,
        include: "",
      },
    ];
    setInclude(newIncludeFields);
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

        <div className="lg:flex justify-between mt-3">
          <div className="lg:w-[65%]">
            <div className="border h-[40px] lg:w-[360px] rounded-[5px]">
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
                  Childeen Only
                </option>
                <option
                  value="option2"
                  className="lg:text-[15px] md:text-[15px] font-[500] text-[#133142]"
                >
                  Adults Only
                </option>

                <option
                  value="option3"
                  className="lg:text-[15px] md:text-[15px] font-[500] text-[#133142]"
                >
                  Family
                </option>
              </select>
            </div>
          </div>
          <div className="lg:w-[30%]">
            <div className="lg: pt-2">
              <span className="text-[14px] font-[500] text-[#979797]">
                Any restriction to the participant of the event
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div>
          <span className="text-[14px] font-[500] text-[#979797]">
            What’sincluded in the price
          </span>
        </div>

        <div className="lg:flex justify-between mt-3">
          <div className="lg:w-[65%]">
            {include.map((item) => (
              <div
                className="h-[40px] border rounded-[5px] flex gap-3 mt-3"
                key={item.id}
              >
                <div className="w-[56px] flex justify-center items-center bg-[#E3F5FF] border rounded-[5px]">
                  <img src="/assets/images/menu_icon.svg" alt="" />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Start typing"
                    className="h-full outline-none w-full"
                  />
                </div>
              </div>
            ))}

            <div className="mt-3">
              <span
                className="text-[16px] font-[500] text-[#FD2F09] cursor-pointer"
                onClick={addIncludeField}
              >
                + Add more items
              </span>
            </div>
          </div>
          <div className="lg:w-[30%]">
            <div className="lg: pt-2">
              <span className="text-[14px] font-[500] text-[#979797]">
                Tell us what is included in the ticket price
              </span>
            </div>

            <div className="lg:pt-2 lg:mt-8">
              <span className="text-[14px] font-[500] text-[#FF7A62]">
                You can click and drag the menu icon to reorder the list
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDescription;
