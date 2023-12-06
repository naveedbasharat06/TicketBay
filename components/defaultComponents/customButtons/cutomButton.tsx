import React, { FC } from "react";
interface props {
  label?: String;
}
const CutomButton: FC<props> = ({ label }) => {
  const buttonLabel = label ? label : "Submit";
  return (
    <div className="flex justify-center">
      <div className="lg:w-[155px] w-full bg-[#FD2F09] rounded-[4px] p-2 text-[white] text-center cursor-pointer">
        {buttonLabel}
      </div>
    </div>
  );
};

export default CutomButton;
