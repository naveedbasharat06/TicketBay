import React, { useState } from "react";
import UsersStore from "@/store/users.store";
import { useRouter as useNavigation } from "next/navigation";
import { toast } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidation } from "@/components/Validations/validations";
function Login() {
  const navigation = useNavigation();
  const userLogin = (values: any, setSubmitting: any) => {
    const user = UsersStore.getUserByEmail(values.email);
    if (user && user.password === values.password) {
      const id = user.id;
      UsersStore.setCurrentUserId(id);
      navigation.push("/dashboard")

    } else {
      // Invalid credentials
      toast.error("Invalid email or password");
    }
    setSubmitting(false);
  };


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
            <span
              className="text-[#FD2F09] cursor-pointer underline"
              onClick={() => {
                navigation.push("/signup");
              }}
            >
              here
            </span>
          </p>
        </div>
      </div>
      <div className="col-span-2 p-5">
        <div className="bg-[#ffff] lg:h-full rounded-[4px] p-10">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginValidation}
            onSubmit={userLogin}
          >
            <Form>
              <div className="border h-[48px] rounded-[4px] flex items-center pl-5 pr-5">
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="h-full w-full outline-none"
                  />
                </div>
              </div>
              <div className="h-3">
                <ErrorMessage
                  name="email"
                  component="span"
                  className="ml-1 text-[13px] font-[500] text-[#FD2F09]"
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-[14px] font-[500] text-[#979797] cursor-pointer hover:text-[#FD2F09]">
                  Forgot password?
                </span>
              </div>
              <div className="border h-[48px] rounded-[4px] flex items-center pl-5 pr-5 mt-3">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="h-full w-full outline-none"
                />
              </div>
              <div className="h-3">
                <ErrorMessage
                  name="password"
                  component="span"
                  className="ml-1 text-[13px] font-[500] text-[#FD2F09]"
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
              <div className="mt-1">
                <input
                  type="submit"
                  className="w-full bg-[#FD2F09] hover:bg-[#FF7A62] rounded-[4px] p-2 text-[white] text-center cursor-pointer"
                ></input>
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
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
