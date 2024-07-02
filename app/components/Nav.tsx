import React from "react";
import { futura } from "../layout";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Nav = () => {
  return (
    <div
      className={`bg-primary-blue ${futura.variable} font-sans text-primary-white `}
    >
      <div className="items-center max-w-[1440px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] xl:px-[100px] py-[20px] flex justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/Syntri-Logo.png"
            width={164}
            height={164}
            alt="Syntri Logo"
            className="w-[41px] md:w-[55px]"
          />
          <span className="uppercase font-bold tracking-wider text-2xl xl:text-[37px]">
            SYNTRI
          </span>
        </div>

        <nav className="hidden md:inline-block">
          <ul className="flex gap-8 items-center font-medium tracking-wider">
            <li>
              <Link href="#About">About</Link>
            </li>
            <li>
              <Link href="#Services">Services</Link>
            </li>
            <li>
              <Link href="#">
                <button className="rounded-md bg-secondary-blue py-[16px] px-[20px] font-bold">
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="md:hidden">
          <MobileNav />
        </nav>
      </div>
    </div>
  );
};

export default Nav;
