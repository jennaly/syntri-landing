"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

import useMeasure from "react-use-measure";

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1440,
};

const Testimonials = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_WIDTH = width >= BREAKPOINTS.md ? 528 : 350;
  const MARGIN = width >= BREAKPOINTS.md ? 30 : 20;
  const CARD_SIZE = CARD_WIDTH + MARGIN;

  const CARD_BUFFER =
    width > BREAKPOINTS.xl ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (testimonials.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }

    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }

    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section
      className="px-[24px] md:pl-[40px] md:pr-[0px] lg:pl-[80px] xl:pl-[100px] 2xl:pl-[0px]"
      ref={ref}
    >
      <div className="relative overflow-hidden 2xl:w-full 2xl:justify-center 2xl:flex">
        <div className="max-w-6xl pt-[40px] 2xl:max-w-fit">
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex items-stretch"
          >
            {testimonials.map((testimonial, index) => {
              return <Testimonial key={index} {...testimonial} />;
            })}
          </motion.div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full pt-[30px] pb-[40px] md:pr-[40px] lg:pr-[80px] xl:pr-[100px] 2xl:pr-[0px]">
        <div className="flex items-center gap-4 text-secondary-blue mb-8">
          <button
            className={`rounded-lg  border border-secondary-blue bg-white p-[14px] text-2xl transition-opacity ${
              CAN_SHIFT_LEFT ? "" : "opacity-30"
            }`}
            disabled={!CAN_SHIFT_LEFT}
            onClick={shiftLeft}
          >
            <SlArrowLeft size={16} />
          </button>
          <button
            className={`rounded-lg border border-secondary-blue bg-white p-[14px] text-2xl transition-opacity ${
              CAN_SHIFT_RIGHT ? "" : "opacity-30"
            }`}
            disabled={!CAN_SHIFT_RIGHT}
            onClick={shiftRight}
          >
            <SlArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

const Testimonial = ({
  imgUrl,
  imgWidth,
  imgHeight,
  clientName,
  clientJobRole,
  sentiment,
}: TestimonialProps) => {
  return (
    <div
      className={`relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1 border border-secondary-blue flex flex-col justify-between rounded-3xl w-full mr-[20px] md:w-[528px] md:mr-[30px]`}
    >
      <p className="text-md lg:text-lg p-[40px] text-center font-medium italic">
        {sentiment}
      </p>
      <div className="flex items-center gap-[20px] bg-secondary-blue p-[40px] rounded-b-3xl">
        <Image
          src={imgUrl}
          height={imgHeight}
          width={imgWidth}
          className="mb-3 h-[104px] w-auto rounded-lg object-cover"
          alt={`An image of ${clientName}, a happy client of Syntri`}
        />
        <div className="flex flex-col text-lg lg:text-xl tracking-wide">
          <span className="font-bold text-primary-white">{clientName}</span>
          <p>{clientJobRole}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

type TestimonialProps = {
  imgUrl: string;
  imgWidth: number;
  imgHeight: number;
  clientName: string;
  clientJobRole: string;
  sentiment: string;
};

const testimonials = [
  {
    imgUrl: "/assets/SamanthaG.png",
    imgWidth: 104,
    imgHeight: 104,
    clientName: "Samantha G",
    clientJobRole: "IT Project Manager",
    sentiment:
      "Working with Syntri on our MDM migration to Intune was exceptional. Their expertise and meticulous planning ensured a seamless transition, resulting in a resounding success!",
  },
  {
    imgUrl: "/assets/BenS.png",
    imgWidth: 104,
    imgHeight: 104,
    clientName: "Ben S",
    clientJobRole: "Accountant & Finance Manager",
    sentiment:
      "Our partnership with Syntri was a game-changer. Their deep understanding of the needs of our Audit teams’ needs greatly enhanced our efficiency and flexibility.",
  },
  {
    imgUrl: "/assets/Lindsey C.png",
    imgWidth: 104,
    imgHeight: 104,
    clientName: "Lindsey C",
    clientJobRole: "Human Resources Manager",
    sentiment:
      "Syntri transformed our policy enforcement. As an HR manager, I struggled with employee compliance, but their expert solutions streamlined the process effortlessly.",
  },
];
