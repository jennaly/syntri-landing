"use client";
import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import Copy from "../copy";

export const CountUpStats = () => {
  const {
    StatsSection: { heading, stats },
  } = Copy;
  return (
    <div className="md:w-full px-4 py-20 md:py-24">
      <h2 className="uppercase max-w-[1000px] mx-auto mb-8 text-center text-lg md:mb-16 md:text-3xl xl:text-4xl font-bold tracking-wide">
        {heading.titleLine1}{" "}
        <span className="text-secondary-blue block">{heading.titleLine2}</span>
      </h2>

      <div className="flex flex-col md:items-stretch items-center justify-center sm:flex-row">
        {stats.map((stat, index) => {
          const { prefix, num, decimals, suffix, subheading } = stat;
          if (index !== stats.length - 1) {
            return (
              <>
                <Stat
                  key={index}
                  prefix={prefix}
                  num={num}
                  decimals={decimals}
                  suffix={suffix}
                  subheading={subheading}
                />
                <div className="h-[1px] w-12 bg-primary-blue sm:h-12 sm:w-[1px]" />
              </>
            );
          } else {
            return (
              <Stat
                key={index}
                prefix={prefix}
                num={num}
                decimals={decimals}
                suffix={suffix}
                subheading={subheading}
              />
            );
          }
        })}
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
