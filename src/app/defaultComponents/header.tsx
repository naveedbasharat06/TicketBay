import React, { useState } from "react";
import { CUSTOMMENU } from "../constants";
import CutomButton from "./customButtons/cutomButton";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  return (
    <div className="sticky top-[0px] h-[58px] lg:flex items-center justify-between bg-[white] z-50">
      <div className="flex justify-between items-center">
        <div>
          <img src="./assets/images/logo.png" alt="" width={110} />
        </div>
        <div className="lg:hidden xl:hidden">
          <img
            src={
              isOpenMenu
                ? "./assets/images/close.svg"
                : "./assets/images/menu.svg"
            }
            alt="icon"
            width={24}
            onClick={() => {
              isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true);
            }}
          />
        </div>
      </div>

      <div
        className={`lg:flex gap-10 items-center postions-absolute ${
          !isOpenMenu ? "hidden" : ""
        }`}
      >
        {CUSTOMMENU.map((item) => (
          <div className="sm:my-1 xs:my-1">
            <span className="cursor-pointer text-[#797979] text-sm hover:text-[#FF7A62]">
              {item.menu}
            </span>
          </div>
        ))}
       <CutomButton label={"Create events"}></CutomButton>
      </div>
    </div>
  );
}

export default Header;
