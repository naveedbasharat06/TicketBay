import React, { FC } from "react";
import { useMedia } from "react-use";

interface props {
  imageUrl?: string;
  isClicked?: boolean;
}
const EventSliderCard: FC<props> = ({ imageUrl, isClicked = false }) => {
  const isSmallScreen = useMedia("(max-width: 600px)");
  const isMediumScreen = useMedia("(min-width: 601px) and (max-width: 1024px)");
  return (
    <div
      className={`rounded-[4px] ${
        isClicked ? "border-[2px] border-[#FD2F09]" : ""
      } ${isSmallScreen || isMediumScreen ? "ml-3 mr-3" : ""}`}
    >
      <img src={imageUrl} alt="" className="rounded-[2px]" />
    </div>
  );
};

export default EventSliderCard;
