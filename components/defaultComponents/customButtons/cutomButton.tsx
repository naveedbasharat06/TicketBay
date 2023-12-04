import React, { FC } from "react";
interface props {
  label?: String;
}
const CutomButton: FC<props> = ({ label }) => {
  const buttonLabel = label ? label : "Submit";
  return (
    <div className="flex justify-center">
      <div className="w-[155px] bg-[#FD2F09] rounded-[4px] p-2 text-[white] text-center cursor-pointer sm:mt-1">
        {buttonLabel}
      </div>
    </div>
  );
};

export default CutomButton;
