"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.querySelector("html")!.style.overflow = "hidden";
    } else {
      document.querySelector("html")!.style.overflow = "scroll";
    }
  };
  return (
    <div>
      <RxHamburgerMenu
        size={25}
        onClick={toggleMenu}
        className="hover:cursor-pointer"
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bg-primary-white top-0 left-0 z-40 h-screen w-full text-primary-black drop-shadow-xl flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
              exit: { opacity: 1, x: 500 },
            }}
          >
            <div>
              <div className="px-[24px] py-[20px] flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/Syntri-Logo.png"
                    width={164}
                    height={164}
                    alt="Syntri Logo"
                    className="w-[41px] md:w-[55px]"
                  />
                  <span className="uppercase font-bold text-2xl xl:text-[37px]">
                    SYNTRI
                  </span>
                </div>
                <IoClose
                  size={25}
                  onClick={toggleMenu}
                  className="hover:cursor-pointer"
                />
              </div>

              <nav className=" text-primary-black px-[24px] py-[20px]">
                <ul className="flex flex-col gap-10 justify-start font-medium tracking-wider">
                  <li className="border-b border-primary-grey pb-4">
                    <Link href="#About" onClick={toggleMenu}>
                      About
                    </Link>
                  </li>
                  <li className="border-b border-primary-grey pb-4">
                    <Link href="#Services" onClick={toggleMenu}>
                      Services
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link href="https://outlook.office.com/bookwithme/user/5f656b29b8954073994cc287e5d243df@syntri.us/meetingtype/TEeP5intjUqtiAVP05XOBg2?anonymous&ep=mlink">
                      <button className="rounded-md bg-secondary-blue text-primary-white py-[16px] px-[20px] font-bold w-full">
                        Contact Us
                      </button>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className={`bg-primary-blue absolute bottom-0 w-full z-50`}>
              <footer className="max-w-[1440px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] xl:px-[100px] py-[5px] flex justify-between">
                <Image
                  src="/assets/Syntri-Logo.png"
                  width={164}
                  height={164}
                  alt="Syntri Logo"
                  className="w-[41px] md:w-[55px]"
                />

                <small className="text-sm my-auto text-secondary-grey">
                  &copy; 2024 Syntri &#x2022; All Rights Reserved
                </small>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
