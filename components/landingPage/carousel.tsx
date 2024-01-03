"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { logoData } from "@/constants";
import { useMedia } from "react-use";

function Carousel() {
  const isSmallScreen = useMedia("(max-width: 600px)");
  const isMediumScreen = useMedia("(min-width: 601px) and (max-width: 1024px)");
  console.log("screensize", isSmallScreen, isMediumScreen);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isSmallScreen ? 2 : isMediumScreen ? 3 : 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="mt-10 my-[10]">
      <Slider {...settings}>
        {logoData.map((logo) => (
          <div key={logo.id}>
            <div className="flex items-center pl-[65px]">
              <img src={logo.src} alt={logo.alt} width={60} height={30} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
