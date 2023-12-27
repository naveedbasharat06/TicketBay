import React from "react";

function RecipientCard() {
  return (
    <div className="w-[175px] h-[68px] bg-[#E3F5FF] rounded-[4px] flex p-2 gap-3 pt-[10px]">
      <div className="rounded-full bg-[#ffff] h-[31px] w-[31px]  flex items-center justify-center">
        <span>K</span>
      </div>
      <div>
        <div className="mt-[-3px]">
          <span className="text-[13px] font-[500] text-[#133142]">
            Kolade Kolade
          </span>
        </div>

        <div className="mt-[-10px]">
          <span className="text-[10px] font-[500] text-[#979797]">
            Kolade@gmail.com
          </span>
        </div>

        <div className="mt-[-10px]">
          <span className="text-[10px] font-[500] text-[#FD2F09] cursor-pointer">Resend</span>
        </div>
      </div>
    </div>
  );
}

export default RecipientCard;
