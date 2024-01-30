"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import threat from "./.././../../public/threat_detection.png";

const StandOut = () => {
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
        <section className="min-h-[calc(120vh)]  p-20 flex-col  justify-center bg-white text-black">
            <div className="py-2 pb-8 text-5xl text-[#292929] font-bold flex justify-start">
                Why Choose Us ?
            </div>
            <div className="py-2 flex justify-start">
                <div className="bg-[#3BACB6] w-40 rounded-lg h-0.5"></div>
            </div>
            <div className="flex w-full">
                <div className="flex w-full">
                    <motion.div
                        ref={ref}
                        className="w-full p-4"
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                    >
                        <div className="w-full p-4 flex flex-col lg:flex-row justify-center">
                        <div className="w-full lg:w-1/3 cursor-pointer mr-20 ">
                                <div className="rounded-md bg-white-600 shadow-lg p-8 pb-24 bg-[#3BACB6]">
                                    <h3 className="w-full flex  text-2xl font-bold mb-4 text-[#ffffff] border-b-2 border-[#292929] pb-4">Behavioral Threat Detection</h3>
                                    <p className="text-[#FFFFFF] pb-2">
                                        We utilize advanced behavioral algorithms to enhance threat detection capabilities, enabling the identification of evolving cyber threats with improved accuracy and efficiency.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 cursor-pointer">
                                <div className="rounded-md bg-white-600 shadow-lg p-8">
                                    <h3 className="w-full flex text-2xl font-bold mb-4 text-[#292929] border-b-2 border-[#3BACB6]  pb-4">
                                        Threat Intelligence
                                    </h3>
                                    <p className="text-[#2F2F2F] mb-4 pb-2">
                                        We aggregate and utilize diverse threat intelligence feeds to provide a comprehensive view of emerging cyber threats and vulnerabilities.
                                        Our analysts enrich the threat intelligence through analysis of the active threat landscape and aggressive threat hunting.
                                    </p>
                                </div>
                            </div>
                            
                        </div>

                        <div className="w-full p-4 flex flex-col lg:flex-row justify-center mt-8 ">
                           
                            <div className="w-full lg:w-1/3 cursor-pointer mr-20">
                                <div className="rounded-md bg-white-600 shadow-lg p-8">
                                    <h3 className="w-full flex  text-2xl font-bold mb-4 text-[#292929] border-b-2 border-[#3BACB6]  pb-4">Integrated Solution At One Place</h3>
                                    <p className="text-[#2F2F2F] mb-4 pb-8">
                                        We offer a unified platform that consolidates real time information of the cyber risks and potential gaps across the endpoints in your infrastructure, presenting a complete picture of the cybersecurity posture in one place.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 cursor-pointer">
                                <div className="rounded-md bg-white-600 shadow-lg p-8 pb-24 bg-[#3BACB6]">
                                    <h3 className="w-full flex  text-2xl font-bold mb-4 text-[#FFFFFF] border-b-2 border-[#292929] pb-4">Advisories as per Your Needs</h3>
                                    <p className="text-[#FFFFFF] pb-2">
                                        We publish customized advisories for Organizations for novel threats they are susceptible to, tailored as per their operational sector and region.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default StandOut;