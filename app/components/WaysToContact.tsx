import Image from "next/image";
import React from "react";

type MethodType = {
  imgUrl: string;
  imgWidth: number;
  imgHeight: number;
  method: string;
  text: string;
};

type WaysToContactType = {
  methods: MethodType[];
};

const Method = ({ imgUrl, imgWidth, imgHeight, method, text }: MethodType) => {
  return (
    <div className="flex flex-col items-center gap-[16px] w-full md:w-1/3 text-center">
      <div className="bg-primary-blue p-4 rounded-full">
        <Image
          src={imgUrl}
          height={imgHeight}
          width={imgWidth}
          alt={`${method} illustration`}
          className="w-[30px]"
        />
      </div>
      <h3 className="text-md xl:text-lg">{text}</h3>
    </div>
  );
};

const WaysToContact = ({ methods }: WaysToContactType) => {
  return (
    <div className="my-[48px] flex flex-col md:flex-row gap-6 max-w-[500px] mx-auto">
      {methods.map((method, index) => (
        <Method {...method} key={index} />
      ))}
    </div>
  );
};

export default WaysToContact;
