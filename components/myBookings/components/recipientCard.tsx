import React,{FC} from "react";
interface props{
  recipient?:any;
}

const RecipientCard:FC<props>=({recipient})=> {
  const firstLetter = recipient.firstName?.charAt(0).toUpperCase();
  return (
    <div className="w-[175px] h-[68px] bg-[#E3F5FF] rounded-[4px] flex p-2 gap-3 pt-[10px]">
      <div className="rounded-full bg-[#ffff] h-[31px] w-[31px]  flex items-center justify-center">
        <span>{firstLetter}</span>
      </div>
      <div>
        <div className="mt-[-3px]">
          <span className="text-[13px] font-[500] text-[#133142]">
           {recipient.firstName+" "+recipient.lastName}
          </span>
        </div>

        <div className="mt-[-10px]">
          <span className="text-[10px] font-[500] text-[#979797]">
            {recipient.email}
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
