import React from "react";
function Footer() {
  return (
    <>
      <div className="md:flex justify-between ">
        <div>
          <img src="/assets/images/logo.png" alt="logo" width={110} />
          <p className="max-w-[355px] text-sm font-medium text-[#797979]">
            Ticketbay.com.ng is an Innovative, secure and user friendly Event
            ticketing platform in Nigeria, built to provide every user with a
            unique experience either as an event organizer or attendee
          </p>
          <div className="mt-6 flex gap-5">
            <div>
              <img src="/assets/images/instagram.svg" alt="social-icon" className="cursor-pointer" />
            </div>
            <div>
              <img src="/assets/images/facebook.svg" alt="social-icon" className="cursor-pointer" />
            </div>
            <div>
              <img src="/assets/images/vector.svg" alt="social-icon" className="cursor-pointer" />
            </div>
            <div>
              <img src="/assets/images/youtube.svg" alt="social-icon" className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="md:flex justify-around lg:w-[70%] md:w-[70%] text-center gap-3">
          <div className="flex justify-between lg:w-[35%] margin-top">
            <div>
              <span className="text-sm font-medium text-[#133142]">
                Categories
              </span>
              <div>
                <span className="text-xs font-medium text-[#797979] cursor-pointer">
                  Upcoming events
                </span>
              </div>
              <div>
                <span className="text-xs font-medium text-[#797979] cursor-pointer">
                  Food and drinks
                </span>
              </div>
              <div>
                <span className="text-xs font-medium text-[#797979] cursor-pointer">
                  Festivals
                </span>
              </div>
            </div>
            <div>
              <span className="text-sm font-medium text-[#133142]">
                Community
              </span>
              <div>
                <span className="text-xs font-medium text-[#797979] cursor-pointer">Blog</span>
              </div>
              <div>
                <span className="text-xs font-medium text-[#797979] cursor-pointer">
                  Affliates
                </span>
              </div>
              <div>
                <span className="text-xs font-medium text-[#797979] cursor-pointer">
                  Invite a friend
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-between lg:w-[35%] margin-top">
            <div>
              <span className="text-sm font-medium text-[#133142]">About</span>
              <div>
                <span className="text-xs font-medium text-[#797979] cursor-pointer">
                  About us
                </span>
              </div>
              <div>
                <span className="text-xs font-medium text-[#797979] cursor-pointer">
                  Patnerships
                </span>
              </div>
              <div>
                <span className="text-xs font-medium text-[#797979] cursor-pointer">
                  The team
                </span>
              </div>
            </div>
            <div>
              <span className="text-sm font-medium text-[#133142]">
                Contact
              </span>
              <div>
                <span className="text-xs font-medium text-[#797979] cursor-pointer">
                  Contact us
                </span>
              </div>
              <div>
                <span className="text-xs font-medium text-[#797979] cursor-pointer">Faq</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom footer */}
      <div className="mt-10 text-center mb-10">
        <span className="text-sm font-medium text-[#797979]">2021 ticketbay, Inc. Al right reserved. Privacy Policy</span>
      </div>
    </>
  );
}

export default Footer;
