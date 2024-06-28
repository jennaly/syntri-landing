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

const Services = () => {
  return (
    <div className="grid gap-[32px] md:grid-cols-2 xl:grid-cols-3 xl:gap-x-24 xl:gap-y-20">
      {services.map((service, index) => (
        <Service {...service} key={index} />
      ))}
    </div>
  );
};

export default Services;

const services = [
  {
    imageUrl: "/assets/Services-IT.png",
    imageWidth: 100,
    imageHeight: 100,
    imageAltText: "Illustration of a server",
    serviceTitle: "Managed IT Services",
    description:
      "Proactive maintenance and support, ensuring your systems run smoothly and securely.",
  },
  {
    imageUrl: "/assets/Services-Cybersecurity.png",
    imageWidth: 100,
    imageHeight: 100,
    imageAltText: "Illustration of a computer with bugs",
    serviceTitle: "Cybersecurity",
    description:
      "Protect your business from emerging threats with advanced security measures and proactive monitoring.",
  },
  {
    imageUrl: "/assets/Services-Data.png",
    imageWidth: 100,
    imageHeight: 100,
    imageAltText: "Illustration of data compliance",
    serviceTitle: "Data Compliance",
    description:
      "Ensure your business stays compliant with data regulations that adheres to industry standards.",
  },
  {
    imageUrl: "/assets/Services-Recovery.png",
    imageWidth: 100,
    imageHeight: 100,
    imageAltText: "Illustration of data recovery",
    serviceTitle: "Backup & Disaster Recovery",
    description:
      "Comprehensive backup and disaster recovery solutions which safeguard your data and ensure business continuity.",
  },
  {
    imageUrl: "/assets/Services-Cloud.png",
    imageWidth: 100,
    imageHeight: 100,
    imageAltText: "Illustration of cloud migrations",
    serviceTitle: "Cloud Migrations",
    description:
      "Embark on your cloud journey with a smooth, efficient transition.",
  },
  {
    imageUrl: "/assets/Services-VOIP.png",
    imageWidth: 100,
    imageHeight: 100,
    imageAltText: "Illustration of a smartphone",
    serviceTitle: "VOIP Solutions",
    description:
      "Optimize your organizations communication infrastructure for seamless connectivity and enhanced collaboration across your organization.",
  },
];
