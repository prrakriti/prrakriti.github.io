"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Compliance from "./Compliance";

const Info = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView();
  const complianceRef = useRef(null);
  const detectionRef = useRef(null);
  const intelligenceRef = useRef(null);
  const vulnerabilityRef = useRef(null);
  // Define animation variants
  const variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.1 } },
  };

  // Trigger animation when the content is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[calc(100vh-95px)]  p-20 flex-col  justify-center bg-white text-black">
      <div className="py-2 pb-10 text-5xl text-[#292929] font-bold flex justify-center">
        We Are Here To Offer You
      </div>
      <div className="flex-col w-full">
        <motion.div
          ref={ref}
          className="w-full p-4"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <div className="w-9/12 p-4 flex flex-col md:flex-row justify-between ml-44"
          >
            <div className="w-full md:w-1/3 cursor-pointer" onClick={() => scrollToSection(complianceRef)}>
              <div className="rounded-md bg-white-600 shadow-lg p-8">
                <div className="text-4xl font-bold text-[#3BACB6] mb-4">
                  01
                </div>
                <h3 className="w-full flex  text-2xl font-bold mb-4 text-[#292929]">InfinitY Continuous Compliance Module</h3>
                <button className="border border-solid border-[#3BACB6] border-[2px] text-[#3BACB6] font-bold rounded-full pt-2 pl-4 pr-4 pb-2 hover:bg-[#3BACB6] focus:outline-none focus:shadow-md hover:text-white active:transform active:scale-95">Learn More</button>
              </div>
            </div>
            <div className="w-full md:w-1/3 cursor-pointer">
              <div className="rounded-md bg-white-600 shadow-lg p-8">
                <div className="text-4xl font-bold text-[#3BACB6] mb-4">
                  02
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#292929]">InfinitY Vulnerability Management Module</h3>
                <button className="border border-solid border-[#3BACB6] border-[2px] text-[#3BACB6] font-bold rounded-full pt-2 pl-4 pr-4 pb-2 hover:bg-[#3BACB6] focus:outline-none focus:shadow-md hover:text-white active:transform active:scale-95">Learn More</button>
              </div>
            </div>
          </div>

        </motion.div>
        <div className="w-9/12 p-4 flex justify-center ml-44">
          <Image
            src="/overview.svg"
            width={250}
            height={100}
            priority
            alt="Infinity Logo"
          />
        </div>
        <motion.div
          className="w-full p-4"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <div className="w-9/12 p-4 flex flex-col md:flex-row justify-between ml-44"
          >
            <div className="w-full md:w-1/3 cursor-pointer">
              <div className="rounded-md bg-white-600 shadow-lg p-8">
                <div className="text-4xl font-bold text-[#3BACB6] mb-4">
                  03
                </div>
                <h3 className="w-full flex text-2xl font-bold mb-4 text-[#292929]">InfinitY Breach Detection Module </h3>
                <button className="border border-solid border-[#3BACB6] border-[2px] text-[#3BACB6] font-bold rounded-full pt-2 pl-4 pr-4 pb-2 hover:bg-[#3BACB6] focus:outline-none focus:shadow-md hover:text-white active:transform active:scale-95">Learn More</button>
              </div>
            </div>
            <div className="w-full md:w-1/3 cursor-pointer">
              <div className="rounded-md bg-white-600 shadow-lg p-8">
                <div className="text-4xl font-bold text-[#3BACB6] mb-4">
                  04
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#292929]">InfinitY Threat Intelligence Module</h3>
                <button className="border border-solid border-[#3BACB6] border-[2px] text-[#3BACB6] font-bold rounded-full pt-2 pl-4 pr-4 pb-2 hover:bg-[#3BACB6] focus:outline-none focus:shadow-md hover:text-white active:transform active:scale-95">Learn More</button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* <Compliance sectionref={complianceRef}/> */}
    </section>
  );
};

export default Info;
