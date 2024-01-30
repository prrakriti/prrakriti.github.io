"use client";
import { useAnimation, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Overview = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

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

  return (
    <section className="min-h-[calc(100vh-95px)] w-full p-20 flex-col bg-white text-white">
      <div className="py-2 pb-10 text-5xl text-[#292929] font-bold">
        ASSESS. IDENTIFY. SAFEGUARD
      </div>
      <div className="w-full flex">
        <div className="w-full flex flex-col lg:flex-row flex-wrap">
          <motion.div
            ref={ref}
            className="w-full lg:w-1/2 p-4 pt-20 pl-12"
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            {/* <motion.p
              initial="hidden"
              animate={controls}
              variants={variants}
              className="py-2 pb-10 text-black text-4xl text-black font-bold"
            >ASSESS. IDENTIFY. SAFEGAURD
            </motion.p> */}
            <motion.p
              initial="hidden"
              animate={controls}
              variants={variants}
              className="py-2 text-[#2F2F2F] text-xl font-sans"
            >
              <b>InfinitY</b>  is a  Cyber Risk Assessment & Breach Detection Platform that helps you safeguard your organization from potential cyber breaches. Using cutting-edge tech, we actively monitor your digital perimeter for irregularities, taking a proactive approach to potential cyber threats.
            </motion.p>
            <motion.p
              initial="hidden"
              animate={controls}
              variants={variants}
              className="py-2 text-[#2F2F2F] text-xl font-sans pt-12"
            >
              With its intuitive interface and robust functionality, Infinity revolutionizes the way organizations approach cybersecurity, offering real-time threat analysis and proactive prevention measures.
            </motion.p>
            <motion.p
              initial="hidden"
              animate={controls}
              variants={variants}
              className="py-2 pt-12"
            >
              <div className="bg-[#3BACB6] w-60 rounded-lg h-0.5 mb-3"></div>
            </motion.p>
          </motion.div>
          <div className="w-full lg:w-1/2 pr-32 pb-32  pl-32 mx-auto">
            <motion.div
              ref={ref}
              className="w-full"
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <div className="relative w-full" style={{ paddingTop: '56.25%', height: 0 }}>
                <iframe
                  src="https://www.youtube-nocookie.com/embed/DUs8fzvAlCo?si=SfZv2ghH9Luz3zW9&amp;controls=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Overview;
