"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <RxHamburgerMenu size={25} onClick={toggleMenu} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bg-primary-white right-0 bottom-0 z-40 h-full w-full text-primary-black drop-shadow-xl"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
              exit: { opacity: 1, x: 450 },
            }}
          >
            <div className="mx-auto px-[24px] py-[20px] flex justify-between items-center">
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
              <IoClose size={40} onClick={toggleMenu} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
