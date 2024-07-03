import Image from "next/image";
import React from "react";
import { futura } from "../layout";
import Copy from "../copy";

const Footer = () => {
  const {
    Footer: { copyrightYear },
  } = Copy;
  return (
    <div className={`bg-primary-blue ${futura.variable} font-sans`}>
      <footer className="max-w-[1440px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] xl:px-[100px] py-[5px] flex justify-between">
        <Image
          src="/assets/Syntri-Logo.png"
          width={164}
          height={164}
          alt="Syntri Logo"
          className="w-[41px] md:w-[55px]"
        />

        <small className="my-auto text-secondary-grey text-base">
          &copy; {copyrightYear} Syntri &#x2022; All Rights Reserved
        </small>
      </footer>
    </div>
  );
};

export default Footer;
