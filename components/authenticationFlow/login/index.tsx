import React from "react";
import CutomButton from "@/components/defaultComponents/customButtons/cutomButton";
function Login() {
  return (
    <div className=" lg:grid grid-cols-5 lg:h-[533px] bg-[#E3F5FF] mt-10 my-10 rounded-[4px] border lg:bg-[url('/assets/images/authbg.png')] bg-bottom bg-left bg-no-repeat ">
      <div className="col-span-3 p-10 ">
        <div>
          <p className="lg:text-[64px] md:text-[40px] text-[40px] font-[600] text-[#133142]">
            Welcome back,
            <br /> we’ve missed <span className="text-[#FD2F09]">you.</span>
          </p>
        </div>

        <div className="lg:text-center">
          <p className="text-[24px] font-[500] text-[#979797] lg:mr-6">
            Dont have an account? Register{" "}
            <span className="text-[#FD2F09] cursor-pointer underline">
              here
            </span>
          </p>
        </div>
      </div>
      <div className="col-span-2 p-5">
        <div className="bg-[#ffff] lg:h-full rounded-[4px] p-10">
          <form action="#">
            <div className="border h-[48px] rounded-[4px] flex items-center pl-5 pr-5">
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="h-full w-full outline-none"
                />
              </div>
            </div>
            <div className="text-right mt-3">
              <span className="text-[14px] font-[500] text-[#979797] cursor-pointer hover:text-[#FD2F09]">
                Forgot password?
              </span>
            </div>
            <div className="border h-[48px] rounded-[4px] flex items-center pl-5 pr-5 mt-3">
              <input
                type="password"
                placeholder="Password"
                className="h-full w-full outline-none"
              />
            </div>
            <div className="mt-5 flex gap-2 items-center">
              <input type="checkbox" className="h-[15px] w-[15px]" />
              <span className="text-[14px] text-[#979797] font-[500]">
                Remember me
              </span>
            </div>

            <div>
              <input type="button" name="Login"></input>
            </div>
            <div className="mt-5">
              <CutomButton width="full" label={"Login"}></CutomButton>
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

export default Login;
