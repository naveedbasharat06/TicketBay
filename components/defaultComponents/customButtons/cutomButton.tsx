import React, { FC } from "react";
interface props {
  label?: String;
  width?:string
}
const CutomButton: FC<props> = ({ label, width=null }) => {
  const buttonLabel = label ? label : "Submit";
  return (
    <div className="flex justify-center">
      <div className={`${width!=="full"?"lg:w-[155px]":null} w-full bg-[#FD2F09] rounded-[4px] p-2 text-[white] text-center cursor-pointer`}>
        {buttonLabel}
      </div>
    </div>
  );
};

export default CutomButton;
