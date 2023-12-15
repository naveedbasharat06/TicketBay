import React, { useState, useEffect } from "react";
import { CUSTOMMENU } from "../../constants";
import CutomButton from "./customButtons/cutomButton";
import { DashboardMenu } from "../../constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderDropDown } from "../../constants";
import UsersStore from "@/store/users.store";

function Header() {
  const router = useRouter();
  const { pathname } = router;
  const [isDashboard, setIsDashboard] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    if (pathname.includes("dashboard")) {
      setIsDashboard(true);
    } else {
      setIsDashboard(false);
    }
  }, [pathname]);
  const DropDownClick = (menu: any) => {
    if (menu === 1) {
    } else {
      UsersStore.setCurrentUserId(null);
    }
  };

  return (
    <div className="sticky top-[0px] h-[58px] lg:flex items-center justify-between bg-[white] z-50">
      <div className="flex justify-between items-center">
        <div>
          <img src="/assets/images/logo.png" alt="" width={110} />
        </div>
        <div className="lg:hidden xl:hidden">
          <img
            src={
              isOpenMenu
                ? "/assets/images/close.svg"
                : "/assets/images/menu.svg"
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
        {(isDashboard ? DashboardMenu : CUSTOMMENU).map((item) => (
          <div className="sm:my-1 xs:my-1" key={item.menu}>
            <Link
              href={item.menu === "Home" ? "/" : "/" + item.menu.toLowerCase()}
            >
              <span className="cursor-pointer text-[#797979] text-sm hover:text-[#FF7A62]">
                {item.menu}
              </span>
            </Link>
          </div>
        ))}

        <CutomButton label={"Create events"}></CutomButton>

        {UsersStore.currentUserId !== null && (
          <div
            className="h-[40px] w-[40px] rounded-full border flex justify-center items-center bg-[#E3F5FF] cursor-pointer"
            onClick={() => {
              isDropdownVisible
                ? setIsDropdownVisible(false)
                : setIsDropdownVisible(true);
            }}
          >
            <span className="text-[18px] font-[500] text-[#133142]">A</span>
          </div>
        )}

        {isDropdownVisible && (
          <div className="absolute right-0 mt-[150px] bg-white divide-y divide-gray-100 rounded-[2px] shadow w-[120px] dark:bg-gray-700  p-3">
            <ul className=" text-sm text-gray-700 dark:text-gray-200 ">
              {HeaderDropDown.map((item) => (
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    setIsDropdownVisible(false);
                    DropDownClick(item.id);
                  }}
                >
                  <div className="flex items-center gap-1">
                    <img src={item.iconPath} alt="" />
                    <span
                      className={`block px-2 py-2 dark:hover:bg-gray-600 dark:hover:text-white `}
                    >
                      {item.menu}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
