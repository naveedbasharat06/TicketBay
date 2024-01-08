import React, { useEffect, useState } from "react";
import UsersStore from "@/store/users.store";
import { useRouter as useNavigation } from "next/navigation";

function Category() {
  const [user, setUser] = useState<any>();
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrivacy, setSelectedPrivacy] = useState("");
  const [selectedEventType, setSelectedEventType] = useState("");

  useEffect(() => {
    setUser(UsersStore.users[0]);
  }, [UsersStore]);

  const ChangeCategory = (event: any) => {
    setSelectedCategory(event.target.value);
  };
  const ChangePrivacy = (event: any) => {
    setSelectedPrivacy(event.target.value);
  };
  const ChangeEventType = (event: any) => {
    setSelectedEventType(event.target.value);
  };

  
  return (
    <div className="mt-5">
      <div className="flex gap-5 items-center">
        <div>
          <img
            src="/assets/images/arrow-left.svg"
            alt="back"
            className="cursor-pointer "
          />
        </div>
        <div>
          <span className="text-[30px] text-[600] text-[#133142]">
            Create New event
          </span>
        </div>
      </div>

      <div className="lg:h-[391px] shadow mt-10 rounded-[16px] lg:p-10 p-3">
        <div>
          <span className="text-[24px] font-[500] text-[#133142]">
            {user?.username ? (
              `Hello ${user?.username}`
            ) : (
              <div>
                <span
                  className="cursor-pointer font-[500] text-[24px] text-[#FD2F09]"
                  onClick={() => {
                    navigation.push("login");
                  }}
                >
                  please sign in
                </span>
              </div>
            )}
          </span>
        </div>

        <div>
          <span className="text-[14px] font-[500] text-[#797979]">
            Please fill the information below and follow the steps to create
            your event
          </span>
        </div>

        <div className="lg:grid md:grid grid-cols-4 gap-5 mt-[80px]">
          <div className="h-[152px] border border-[#9797972B] rounded-[4px] p-5 mt-2">
            <div>
              <span className="text-[14px] font-[500] text-[#979797]">
                Choose event category
              </span>
            </div>
            <div className="mt-10">
              <select
                id="mySelect"
                name="mySelect"
                value={selectedCategory}
                onChange={ChangeCategory}
                className="mt-1 block w-full p-2 rounded-md outline-none   lg:text-[30px] md:text-[15px] font-[500] text-[#133142] "
              >
                <option
                  value=""
                  disabled
                  className="lg:text-[20px] md:text-[15px] font-[500] text-[#133142]"
                >
                  Choose
                </option>
                <option
                  value="option1"
                  className="lg:text-[20px] md:text-[15px] font-[500] text-[#133142]"
                >
                  Festival
                </option>
                <option
                  value="option2"
                  className="lg:text-[20px] md:text-[15px] font-[500] text-[#133142]"
                >
                  Featured
                </option>
                <option
                  value="option3"
                  className="lg:text-[20px] md:text-[15px] font-[500] text-[#133142]"
                >
                  Party
                </option>
              </select>
            </div>
          </div>
          <div className="h-[152px] border border-[#9797972B] rounded-[4px] p-5 mt-2">
            <div>
              <span className="text-[14px] font-[500] text-[#979797]">
                the event will be
              </span>
            </div>
            <div className="lg:mt-10 md:mt-[60px] flex mt-10">
              <select
                id="mySelect"
                name="mySelect"
                value={selectedPrivacy}
                onChange={ChangePrivacy}
                className="mt-1 block w-full p-2 rounded-md outline-none   lg:text-[30px] md:text-[15px] font-[500] text-[#133142] "
              >
                <option
                  value=""
                  disabled
                  className="lg:text-[20px] md:text-[15px] font-[500] text-[#133142]"
                >
                  Choose
                </option>
                <option
                  value="option1"
                  className="lg:text-[20px] md:text-[15px] font-[500] text-[#133142]"
                >
                  Public
                </option>
                <option
                  value="option2"
                  className="lg:text-[20px] md:text-[15px] font-[500] text-[#133142]"
                >
                  Private
                </option>
              </select>
            </div>
          </div>
          <div className="h-[152px] border border-[#9797972B] rounded-[4px] p-5 mt-2">
            <div>
              <span className="text-[14px] font-[500] text-[#979797]">
                Number of people
              </span>
            </div>

            <div className="mt-10">
              <input
                type="number"
                placeholder="type number"
                className="outline-none lg:text-[30px] md:text-[15px] font-[500] text-[#133142] w-[230px]"
              />
            </div>
          </div>
          <div className="h-[152px] border border-[#9797972B] rounded-[4px] p-5 mt-2">
            <div>
              <span className="text-[14px] font-[500] text-[#979797]">
                Event type
              </span>
            </div>
            <div className="lg:mt-10 md:mt-[60px] flex mt-10 ">
              <select
                id="mySelect"
                name="mySelect"
                value={selectedEventType}
                onChange={ChangeEventType}
                className="mt-1 block w-full p-2 rounded-md outline-none   lg:text-[30px] md:text-[15px] font-[500] text-[#133142] "
              >
                <option
                  value=""
                  disabled
                  className="lg:text-[20px] md:text-[15px] font-[500] text-[#133142]"
                >
                  Choose
                </option>
                <option
                  value="option1"
                  className="lg:text-[20px] md:text-[15px] font-[500] text-[#133142]"
                >
                  online
                </option>
                <option
                  value="option2"
                  className="lg:text-[20px] md:text-[15px] font-[500] text-[#133142]"
                >
                  inPerson
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
