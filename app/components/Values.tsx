import Image from "next/image";
import React from "react";

type ValuesType = {
  values: ValueType[];
};

type ValueType = {
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  imageAltText: string;
  description: string;
};

const Value = ({
  imageUrl,
  imageWidth,
  imageHeight,
  imageAltText,
  description,
}: ValueType) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src={imageUrl}
        height={imageHeight}
        width={imageWidth}
        alt={imageAltText}
        className="w-[150px] md:w-full"
      />
      <span className="text-lg lg:text-[22px] leading-[26px] lg:leading-[30px] xl:leading-[40px] tracking-wide">
        {description}
      </span>
    </div>
  );
};

const Values = ({ values }: ValuesType) => {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-20 md:px-0 px-4 md:grid-cols-4 md:gap-x-28 lg:gap-x-40 xl:gap-x-20 xl:w-[64%] xl:pr-20">
      {values.map((value, index) => (
        <Value {...value} key={index} />
      ))}
    </div>
  );
};

export default Values;
