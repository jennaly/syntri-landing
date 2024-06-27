import Image from "next/image";
import React from "react";

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
        className="w-full"
      />
      <span className="text-lg lg:text-[22px] leading-[26px] lg:leading-[30px] xl:leading-[40px] tracking-wide">
        {description}
      </span>
    </div>
  );
};

const Values = () => {
  return (
    <div className="grid grid-cols-2 gap-x-32 gap-y-20 md:px-0 px-4 md:grid-cols-4 xl:w-[70%] xl:pr-20">
      {values.map((value, index) => (
        <Value {...value} key={index} />
      ))}
    </div>
  );
};

const values = [
  {
    imageUrl: "/assets/Value-Trust.png",
    imageWidth: 106,
    imageHeight: 100,
    imageAltText: "Illustration of a handshake",
    description: "Trust",
  },
  {
    imageUrl: "/assets/Value-Expertise.png",
    imageWidth: 103,
    imageHeight: 100,
    imageAltText: "Illustration of an employee and three stars above him",
    description: "Expertise",
  },
  {
    imageUrl: "/assets/Value-Innovation.png",
    imageWidth: 100,
    imageHeight: 100,
    imageAltText: "Illustration of a lightbulb",
    description: "Innovation",
  },
  {
    imageUrl: "/assets/Value-Collaboration.png",
    imageWidth: 100,
    imageHeight: 100,
    imageAltText: "Illustration of stacked hands in huddle",
    description: "Collaboration",
  },
];

export default Values;
