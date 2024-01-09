import React, { useEffect, useState } from "react";
import UsersStore from "@/store/users.store";

function OrganizerDetails() {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    setUser(UsersStore.users[0]);
  }, [UsersStore]);
  return (
    <div className="mt-10 shadow rounded-[16px] lg:p-10 p-3">
      <div>
        <span className="text-[24px] font-[500] text-[#133142]">
          Organiseer details
        </span>
      </div>

      <div>
        <span className="text-[14px] font-[500] text-[#979797]">
          Details about the event organisers
        </span>
      </div>

      <div className="lg:flex justify-between mt-10">
        <div className="lg:w-[65%]">
          <div>
            <span className="text-[14px] font-[500] text-[#979797]">
              Profile
            </span>
          </div>

          <div className="h-[130px] border rounded-[5px] mt-3 flex items-center pl-5">
            <div className="flex gap-5">
              <div className="h-[86px] w-[86px] rounded-full border bg-[#C4C4C4]"></div>
              <div>
                <div>
                  <span className="text-[21px] font-[500] text-[#133142]">
                    {user?.username}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  <div className="h-[35px] bg-gradient-to-b from-[#FF7A62] to-[#FD2F09] flex items-center pl-3 pr-3 rounded-[4px] cursor-pointer">
                    <span className="text-[14px] font-[500] text-[#FFFFFF]">
                      Upload new photo
                    </span>
                  </div>
                  <div className="h-[35px] border border-[#FD2F09] flex items-center pl-5 pr-5 rounded-[4px] cursor-pointer">
                    <span className="text-[14px] font-[500] text-[#FD2F09]">
                      remove
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[30%]">
          <div className="lg:mt-10">
            <span className="text-[14px] font-[500] text-[#979797]">
              This is same as your account photo and will be displayed on the
              page of event organisers
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div>
          <span className="text-[14px] font-[500] text-[#979797]">
            Short description
          </span>
        </div>
        <div className="lg:flex justify-between mt-3">
          <div className="lg:w-[65%] border h-[40px] rounded-[5px] p-1">
            <input type="text" className="outline-none h-full w-full" />
          </div>
          <div className="lg:w-[30%]">
            <div>
              <span className="text-[14px] font-[500] text-[#979797]">
                The description willbe shown along side the event organizer
                details
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizerDetails;
