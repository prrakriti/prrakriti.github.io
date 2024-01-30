"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { Button } from "../ui/button";

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start({ scale: 1, transition: { duration: 1 } });
        } else {
          controls.start({ scale: 0.7, transition: { duration: 1 } });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [controls]);
  return (
    <section
      ref={ref}
      className="min-h-[calc(100vh-80px)] flex items-center justify-center p-10 pb-56  bg-gradient-to-b from-[#262A4B] via-[#31586D] to-[#419A9F]"
    >
      <motion.div
        className="text-center items-center "
        initial={{ scale: 0 }}
        animate={controls}
      // animate={{ opacity: 1, x: 0 }}
      // initial={{ opacity: 0, x: -30 }}
      // transition={{ duration: 0.6, delay: 0.2 }}

      // animate={controls}
      >
        {/* Your existing content */}
        <div className="flex flex-col items-center text-center justify-center ">
          <Image
            src="/logo_transparent.svg"
            width={292}
            height={54}
            priority
            alt="Infinity Logo"
            className="dir-rtl text-right pl-[1.1em]"
          />
        </div>
        <div className="flex flex-col items-center text-center justify-center mt-4 ">
          <p className="capitalize tracking-[0.5rem] text-5xl p-2 dir-rtl text-right pl-[1.1em] font-semibold" >
            <span style={{ WebkitTextFillColor: 'white', WebkitTextStroke: '0.1rem black' }}>
              I N F I N I T Y
            </span>
          </p>

          <p className="capitalize text-md p-2">BY</p>
          <div className="flex flex-col items-center text-center justify-center mb-6">
            <Image
              src="/infinity-name.svg"
              width={200}
              height={10}
              priority
              alt="Infinity Logo"
              className="dir-rtl text-right pl-[1.1em]"
            />
          </div>
          <div className="bg-[#3BACB6] w-40 rounded-lg h-0.5 mb-3 ml-2"></div>
          <div className="text-shadow-md font-mono text-3xl ml-7 text-gray-700 font-semibold mt-5" >
            Cyber Risk Assessment & Breach Detection Platform
          </div>
          {/* <button className="bg-gradient-to-b from-[#0B0058] to-[#490095] px-4 py-2 rounded-md mt-7">
            GET STARTED
          </button> */}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
