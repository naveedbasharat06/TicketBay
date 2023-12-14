import React, { useState } from "react";
import EventSliderCard from "./customComponents/eventSliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMedia } from "react-use";
import { eventData } from "../../constants";
import { motion } from "framer-motion";

function EventsSlider() {
  const isSmallScreen = useMedia("(max-width: 600px)");
  const isMediumScreen = useMedia("(min-width: 601px) and (max-width: 1023px)");
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(1);
  const specificArray = eventData[selectedSlideIndex];
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    vertical: isMediumScreen || isSmallScreen ? false : true,
    verticalSwiping: isMediumScreen || isSmallScreen ? false : true,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <div className=" bg-[#E3F5FF] p-10 lg:flex gap-5 justify-between border rounded-[4px] lg:h-[500px]">
      <div className="lg:w-[35%]">
        <div>
          <span className="font-family text-[48px] font-[400] text-[#FFB922]">
            {specificArray.eventType}
          </span>
        </div>
        <div>
          <span className="lg:text-[48px] text-[30px] font-[600] text-[#133142]">
            {specificArray.eventdesc}
          </span>
        </div>

        <div>
          <p className="lg:text-[24px] text-[20px] font-[400] text-[#797979]">
            {specificArray.longdesc}
          </p>
        </div>

        <div className="mt-2">
          <span className="lg:text-[24px] text-[20px] font-[400] text-[#797979]">
            Lagos {specificArray.lagos}
          </span>
        </div>

        <div className="mt-2">
          <span className="lg:text-[24px] text-[20px] font-[400] text-[#797979]">
            Starting from {specificArray.startingFrom}
          </span>
        </div>
      </div>
      <div className="lg:flex justify-between lg:w-[65%] gap-5">
        <div>
          <motion.img
            src={specificArray.eventThunbnil}
            alt="img"
            className="h-[100%] w-[100%] rounded-[4px]"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key={specificArray.id}
          ></motion.img>
        </div>
        <div className="lg:w-[25%] pt-[30px]">
          <div className="h-[100%] ">
            <Slider {...settings}>
              {eventData.map((event, index) => (
                <div
                  key={event.id}
                  className="flex items-center"
                  onClick={() => {
                    setSelectedSlideIndex(index);
                  }}
                >
                  <EventSliderCard
                    imageUrl={event.eventThunbnil}
                    isClicked={specificArray.id === event.id ? true : false}
                  ></EventSliderCard>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsSlider;
