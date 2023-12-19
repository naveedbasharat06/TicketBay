import React, { useState } from "react";
import { useRouter as useNavigation } from "next/navigation";
import { intialUserDetails } from "@/constants";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "@/services/auth";
import { signupValidation } from "@/components/Validations/validations";
import { useMutation } from "@tanstack/react-query";
import UsersStore from "@/store/users.store";

function SignUp() {
  const navigation = useNavigation();
  const [userType, setUserType] = useState(1);
  const [user, setUser] = useState();

  const { mutateAsync, error, isError } = useMutation({
    mutationFn: register, // Provide your register function here
    onSuccess: (data: any) => {
      navigation.push(`/dashboard`);
      toast.success("user registered")
      UsersStore.addUser(user)
    },
    onError:(data:any)=>{
      toast.error("please try again") 
    }
  });
 

  async function CreateUser(values: any, setSubmitting: any) {
    const { confirmPassword, ...userData } = values; // Exclude confirmPassword from userData
    if (values.password !== values.confirmPassword) {
      toast.error("Passwords do not match.");
      setSubmitting(false);
      return;
    }
    // const uuid = uuidv4();
    // setUser({
    //   ...userData,
    //   // id: uuid,
    // });
    await mutateAsync({ ...userData} );
  }

      
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
          <Formik
            initialValues={intialUserDetails}
            validationSchema={signupValidation}
            onSubmit={CreateUser}
          >
            <Form>
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
                <Field
                  type="text"
                  placeholder="Name"
                  className="h-full w-full outline-none"
                  name={"username"}
                />
              </div>
              <div className="h-3">
                <ErrorMessage
                  name={"username"}
                  component="span"
                  className="ml-1 text-[13px] font-[500] text-[#FD2F09]"
                />
              </div>

              <div className="border h-[48px] rounded-[4px] flex items-center pl-5 pr-5 mt-4">
                <Field
                  type="email"
                  placeholder="Email address"
                  className="h-full w-full outline-none"
                  name="email"
                />
              </div>
              <div className="h-3">
                <ErrorMessage
                  name="email"
                  component="span"
                  className="ml-1 text-[13px] font-[500] text-[#FD2F09]"
                />
              </div>

              <div className="border h-[48px] rounded-[4px] flex items-center pl-5 pr-5 mt-4">
                <Field
                  type="password"
                  placeholder="Password"
                  className="h-full w-full outline-none"
                  name="password"
                />
              </div>
              <div className="h-3">
                <ErrorMessage
                  name="password"
                  component="span"
                  className="ml-1 text-[13px] font-[500] text-[#FD2F09]"
                />
              </div>

              <div className="border h-[48px] rounded-[4px] flex items-center pl-5 pr-5 mt-4">
                <Field
                  type="password"
                  placeholder="Confirm Password"
                  className="h-full w-full outline-none"
                  name="confirmPassword"
                />
              </div>
              <div className="h-3">
                <ErrorMessage
                  name="confirmPassword"
                  component="span"
                  className="ml-1 text-[13px] font-[500] text-[#FD2F09]"
                />
              </div>

              <div className="mt-5">
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

export default SignUp;
