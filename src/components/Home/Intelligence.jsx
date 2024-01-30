"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import threat from "./.././../../public/threat_detection.png";

const Intelligence = () => {
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
        <section id="intelligenceSection" className="min-h-[calc(120vh)]  p-20 flex-col  justify-center bg-white text-black">
            <div className="py-2 pb-8 text-5xl text-[#292929] font-bold flex justify-center">
                InfinitY Threat Intelligence Module
            </div>
            <div className="py-2 flex justify-center">
                <div className="bg-[#3BACB6] w-40 rounded-lg h-0.5"></div>
            </div>
            <div className="py-2 flex justify-center text-center">
                With our threat intelligence module, find hidden threats faster and in real time.
                Elevate your cybersecurity with SignalZero Infinity's tailored defenses. Our strength lies in region-specific and sector-specific threat intelligence, ensuring robust protection based on historical attack patterns. Defend effectively against latest threats and evolving threat landscapes.

            </div>
            <div className="flex w-full">
                <div className="flex w-full">
                    <motion.div
                        ref={ref}
                        className="w-1/2 p-4"
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                    >
                        <div className="w-full p-4 flex flex-col lg:flex-row justify-around">
                            <div className="w-full lg:w-1/2 cursor-pointer mr-16">
                                <div className="rounded-md bg-white-600 shadow-lg p-8">
                                    <h3 className="w-full flex text-2xl font-bold mb-4 text-[#292929] border-b-2 border-[#3BACB6]  pb-4">
                                        Detection Capabilities Based On IoC
                                    </h3>
                                    <p className="text-[#2F2F2F] mb-4 pb-2">
                                        Leverages IoC-based detection to identify cyber threats by monitoring file hashes, IP addresses, domains and other indicators.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 cursor-pointer">
                                <div className="rounded-md bg-white-600 shadow-lg p-8">
                                    <h3 className="w-full flex  text-2xl font-bold mb-4 text-[#292929] border-b-2 border-[#3BACB6]  pb-4">Detection Capabilities Based On IoA</h3>
                                    <p className="text-[#2F2F2F] mb-4 pb-8">
                                        Enhanced threat detection with IoA-driven capabilities to identify malicious behaviors and executions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full p-4 flex flex-col lg:flex-row justify-around mt-8">
                            <div className="w-full lg:w-1/2 cursor-pointer mr-16">
                                <div className="rounded-md bg-white-600 shadow-lg p-8">
                                    <h3 className="w-full flex  text-2xl font-bold mb-4 text-[#292929] border-b-2 border-[#3BACB6] pb-4">Dynamic Threat Feeds</h3>
                                    <p className="text-[#2F2F2F] pb-8">
                                        Stay ahead of the threat landscape with real-time integration of dynamic threat feeds, providing up-to-the-minute intelligence on malicious actors, vulnerabilities, and emerging attack vectors.                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 cursor-pointer">
                                <div className="rounded-md bg-white-600 shadow-lg p-8">
                                    <h3 className="w-full flex  text-2xl font-bold mb-4 text-[#292929] border-b-2 border-[#3BACB6] pb-4">Behavioral Analytics</h3>
                                    <p className="text-[#2F2F2F] pb-8">
                                        Infinity employs advanced behavioral analytics, leveraging threat intelligence to identify and block anomalous activities, enabling proactive threat detection and mitigating risks before they escalate.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        className="w-1/2 flex justify-center items-center"
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                    >
                        <div className="w-full flex justify-center">
                            <Image
                                src={threat}
                                height={400}
                                width={600}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Intelligence;