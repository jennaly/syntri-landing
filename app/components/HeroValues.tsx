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
        className="w-full px-4"
      />
      <span className="text-lg">{description}</span>
    </div>
  );
};

const HeroValues = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold py-[44px]">Our Values</h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-14 px-4">
        {values.map((value, index) => (
          <Value {...value} key={index} />
        ))}
      </div>
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

export default HeroValues;
