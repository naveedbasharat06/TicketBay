import React, { useState } from "react";
import { useRouter as useNavigation } from "next/navigation";
import CutomButton from "@/components/defaultComponents/customButtons/cutomButton";
import { intialUserDetails } from "@/constants";
import UsersStore from "@/store/users.store";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

function SignUp() {
  const navigation = useNavigation();
  const [userType, setUserType] = useState(1);
  const [user, setUser] = useState(intialUserDetails);
  const [confirmPassword, setConfirmPassword] = useState("");
  const FieldChange = (e: any) => {
    const { name, value } = e.target;
    setUser((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const ConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  function CreateUser() {
   if(validateContactForm())
   {
    const uuid = uuidv4();
    if (user.password !== confirmPassword) {
        toast.error("Please correct password.");
        return;
      }
    UsersStore.addUser({
      ...user,
      id: uuid,
    });

    toast.success("user Created");
   }
   else
   {
    toast.error("Please fill all fields.");
   }
  }

  const validateContactForm = () =>
    Object.entries(user).every(
      ([key, value]) =>
        key === "id" ||

        (key !== "id" && value !== "")
    );

  console.log("user", JSON.parse(JSON.stringify(UsersStore.users)));
  return (
    <div className=" lg:grid grid-cols-5 lg:h-[600px] bg-[#E3F5FF] mt-10 my-10 rounded-[4px] border lg:bg-[url('/assets/images/singup.png')] bg-bottom bg-left bg-no-repeat">
      <div className="col-span-3 p-10">
        <div>
          <p className="lg:text-[64px] md:text-[40px] text-[30px] font-[600] text-[#133142]">
            Sign up to full events
            <br /> booking <span className="text-[#FD2F09]">experience.</span>
          </p>
        </div>

        <div className="lg:text-center">
          <p className="lg:text-[24px] text-[20px]  font-[500] text-[#979797] lg:mr-[-110px]">
            Already Signed up?{" "}
            <span
              className="text-[#FD2F09] cursor-pointer underline"
              onClick={() => {
                navigation.push("/login");
              }}
            >
              Login here
            </span>
          </p>
        </div>
      </div>
      <div className="col-span-2 p-5">
        <div className="bg-[#ffff] h-full rounded-[4px] p-5">
          <form action="#">
            <div className="flex justify-between gap-5">
              <div
                className={`h-[48px] w-full border rounded-[4px] flex items-center pl-5 gap-3 cursor-pointer ${
                  userType === 1 &&
                  "bg-gradient-to-b from-[#FFFBFA] to-[#FFE4DE]"
                }`}
                onClick={() => {
                  setUserType(1);
                }}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="h-[17px] w-[17px] "
                    name="userType"
                    checked={userType === 1 ? true : false}
                  />
                </div>
                <div>
                  <span className="text-[14px] font-[600] text-[#133142]">
                    User
                  </span>
                </div>
              </div>
              <div
                className={`h-[48px] w-full border rounded-[4px] flex items-center pl-5 gap-3 cursor-pointer ${
                  userType === 2 &&
                  "bg-gradient-to-b from-[#FFFBFA] to-[#FFE4DE]"
                }`}
                onClick={() => {
                  setUserType(2);
                }}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="h-[17px] w-[17px]"
                    name="userType"
                    checked={userType === 2 ? true : false}
                  />
                </div>
                <div>
                  <span className="text-[14px] font-[600] text-[#133142]">
                    Vendor
                  </span>
                </div>
              </div>
            </div>

            <div className="border h-[48px] rounded-[4px] flex items-center pl-5 pr-5 mt-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="h-full w-full outline-none"
                  required
                  name="name"
                  value={user.name}
                  onChange={FieldChange}
                />
              </div>
            </div>

            <div className="border h-[48px] rounded-[4px] flex items-center pl-5 pr-5 mt-4">
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="h-full w-full outline-none"
                  name="email"
                  value={user.email}
                  onChange={FieldChange}
                />
              </div>
            </div>

            <div className="border h-[48px] rounded-[4px] flex items-center pl-5 pr-5 mt-4">
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="h-full w-full outline-none"
                  name="password"
                  value={user.password}
                  onChange={FieldChange}
                />
              </div>
            </div>

            <div className="border h-[48px] rounded-[4px] flex items-center pl-5 pr-5 mt-4">
              <div>
              <input
                  type="password"
                  placeholder="Confirm Password"
                  className="h-full w-full outline-none"
                  value={confirmPassword}
                  onChange={ConfirmPasswordChange}
                />
              </div>
            </div>

            <div className="mt-12" onClick={CreateUser}>
              <CutomButton width="full" label={"SIgn up"}></CutomButton>
            </div>

            <div className="flex items-center  justify-between mt-5">
              <div className="w-[40%]">
                <hr />
              </div>
              <div>
                <span className="text-[16px] font-[500] text-[#BEBEBE]">
                  OR
                </span>
              </div>
              <div className="w-[40%]">
                <hr />
              </div>
            </div>

            <div className="h-[54px] border border-[#FD2F09] flex items-center justify-center rounded-[4px] mt-5 cursor-pointer">
              <div className="flex items-center gap-3 ">
                <img src="/assets/images/google-icon.svg" alt="icon" />
                <div>
                  <span className="text-[14px] font-[500] text-[#FD2F09]">
                    with Google
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
