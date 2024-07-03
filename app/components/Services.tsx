import Image from "next/image";
import React from "react";

type ServiceType = {
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  imageAltText: string;
  serviceTitle: string;
  description: string;
};

type ServicesType = {
  services: ServiceType[];
};

const Service = ({
  imageUrl,
  imageWidth,
  imageHeight,
  imageAltText,
  serviceTitle,
  description,
}: ServiceType) => {
  return (
    <div className="flex flex-col items-center gap-[24px]">
      <Image
        src={imageUrl}
        height={imageHeight}
        width={imageWidth}
        alt={imageAltText}
        className="w-1/4"
      />
      <h3 className="text-lg xl:text-xl font-bold">{serviceTitle}</h3>
      <p className="text-lg xl:text-xl">{description}</p>
    </div>
  );
};

const Services = ({ services }: ServicesType) => {
  return (
    <div className="grid gap-[32px] md:grid-cols-2 xl:grid-cols-3 xl:gap-x-24 xl:gap-y-20">
      {services.map((service, index) => (
        <Service {...service} key={index} />
      ))}
    </div>
  );
};

export default Services;
