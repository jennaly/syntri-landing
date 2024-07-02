"use client";
import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

export const CountUpStats = () => {
  return (
    <div className="md:w-full px-4 py-20 md:py-24">
      <h2 className="uppercase max-w-[1000px] mx-auto mb-8 text-center text-lg md:mb-16 md:text-3xl xl:text-4xl font-bold tracking-wide">
        Prevent potential losses with{" "}
        <span className="text-secondary-blue block">
          effective IT management
        </span>
      </h2>

      <div className="flex flex-col md:items-stretch items-center justify-center sm:flex-row">
        <Stat
          prefix="$"
          num={4.5}
          decimals={1}
          suffix="M"
          subheading="is how much a data breach costs on average"
        />

        <div className="h-[1px] w-12 bg-primary-blue sm:h-12 sm:w-[1px]" />
        <Stat
          num={60}
          suffix="%"
          subheading="small businesses go out of business after a cyber attack."
        />

        <div className="h-[1px] w-12 bg-primary-blue sm:h-12 sm:w-[1px]" />
        <Stat
          num={93}
          suffix="%"
          subheading="of data breaches are motivated by financial gain."
        />
        <div className="h-[1px] w-12 bg-primary-blue sm:h-12 sm:w-[1px]" />
        <Stat
          num={95}
          suffix="%"
          subheading="of data breaches are due to human error."
        />
      </div>
    </div>
  );
};

interface Props {
  num: number;
  prefix?: string;
  suffix: string;
  decimals?: number;
  subheading: string;
}

const Stat = ({ num, prefix, suffix, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
      onComplete() {
        setHasAnimated(true);
      },
    });
  }, [num, decimals, isInView, hasAnimated]);

  return (
    <div className="flex w-96 flex-col items-center py-8 sm:py-0 px-3">
      <p className="mb-2 text-center text-7xl font-semibold sm:text-6xl">
        {prefix}
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-48 text-center text-neutral-600">{subheading}</p>
    </div>
  );
};
