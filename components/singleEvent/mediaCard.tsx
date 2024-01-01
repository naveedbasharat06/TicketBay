import React, { FC } from "react";
interface props {
  media?: any;
}
const tempMedia = [
  {
    imgUrl: "http://localhost:1337/uploads/Rectangle_481_06489cd7c5.png",
  },
  {
    imgUrl: "http://localhost:1337/uploads/Rectangle_481_06489cd7c5.png",
  },
  {
    imgUrl: "http://localhost:1337/uploads/Rectangle_481_06489cd7c5.png",
  },
  {
    imgUrl: "http://localhost:1337/uploads/Rectangle_481_06489cd7c5.png",
  },
];

const MediaCard: FC<props> = ({ media }) => {
  return (
    <div>
      <div>
        <span className="text-[48px] font-[600] text-[#133142]">Media</span>
      </div>

      <div className="lg:flex gap-3 mt-3">
        {tempMedia.map((item) => (
          <img
            src={item.imgUrl}
            alt="image"
            className="lg:h-[188px] lg:w-[300px] w-full rounded-[4px] mt-[20px]"
          />
        ))}
      </div>
    </div>
  );
};

export default MediaCard;
