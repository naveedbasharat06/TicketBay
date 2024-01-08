import React, { useState, useEffect } from "react";
import { CUSTOMMENU } from "../../constants";
import CutomButton from "./customButtons/cutomButton";
import Link from "next/link";
import UsersStore from "@/store/users.store";
import { useRouter as useNavigation } from "next/navigation";
function Header() {
  const navigation = useNavigation();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    setUserId(UsersStore?.users[0]?.id);
  }, [UsersStore, userId]);
  return (
    <div className="sticky top-[0px] h-[58px] lg:flex items-center justify-between bg-[white] z-50">
      <div className="flex justify-between items-center">
        <div>
          <img src="/assets/images/logo.png" alt="" width={110} onClick={()=>{
            navigation.push("/")
          }} className="cursor-pointer" />
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
        {CUSTOMMENU.map((item) => (
          <div className="sm:my-1 xs:my-1" key={item.menu}>
            <Link
              href={
                userId !== undefined && item.menu === "Login"
                  ? `/dashboard`
                  : `${
                      item.menu === "Home" ? "/" : "/" + item.menu.toLowerCase()
                    }`
              }
            >
              <span className="cursor-pointer text-[#797979] text-sm hover:text-[#FF7A62]">
                {userId !== undefined && item.menu === "Login"
                  ? "Dashboard"
                  : `${item.menu}`}
              </span>
            </Link>
          </div>
        ))}

        <div onClick={()=>{
          navigation.push("/create")
        }}>
          <CutomButton label={"Create events"}></CutomButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
