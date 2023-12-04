import React, { FC } from "react";
import Stars from "../../defaultComponents/customRatingStars/Stars";
interface props {
  testmonial?: any;
}

const TestimonialCard: FC<props> = ({ testmonial }) => {
  return (
    <div className="lg:w-[360px] h-[322px] hover:shadow p-5 mt-2 my-2">
      <Stars rating={testmonial.rating}></Stars>
      <div className="mt-5 h-[130px]">
        <p className="text-[18px] font-[500] text-[#797979]">
          {testmonial.Desc}
        </p>
      </div>

      <div className="mt-10 flex gap-5 items-center">
        <div>
          <img
            src={testmonial.personProfile}
            alt="profile"
            className="rounded-[50px]"
          />
        </div>

        <div>
          <div>
            <span className="text-[18px] font-[600] text-[#133142]">
              {testmonial.name}
            </span>
          </div>
          <div>
            <span className="text-[18px] font-[500] text-[#979797]">
              {testmonial.position}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
