"use client";
import React, { useRef } from "react";
import TestimonialCard from "./components/testimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialData } from "../constants";
import { useMedia } from "react-use";

function Testimonials() {
  const isSmallScreen = useMedia("(max-width: 600px)");
  const isMediumScreen = useMedia("(min-width: 601px) and (max-width: 1024px)");
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isSmallScreen ? 1 : isMediumScreen ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  const moveNextEvent = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const movePreviousEvent = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div className="mt-[30px]">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-[60%]">
          <span className="text-[48px] font-[600] text-[#133142]">
            What our clients are saying about the product
          </span>
        </div>
        <div className="flex gap-3">
          <div
            className="h-[70px] w-[70px] rounded-[50px] flex items-center justify-center hover:shadow-lg p-6 bg-white cursor-pointer"
            onClick={movePreviousEvent}
          >
            <img src="/assets/images/arrow-left.svg" alt="left-arrow" />
          </div>
          <div
            className="h-[70px] w-[70px] rounded-[50px] flex items-center justify-center hover:shadow-lg p-6 bg-white cursor-pointer"
            onClick={moveNextEvent}
          >
            <img src="/assets/images/arrow-right.svg" alt="right-arrow" />
          </div>
        </div>
      </div>
      <div>
        <div className="mt-10 my-[10]">
          <Slider {...settings} ref={sliderRef}>
            {TestimonialData.map((item) => (
              <div key={item.id} className="pl-[20px]">
                <TestimonialCard testmonial={item}></TestimonialCard>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
