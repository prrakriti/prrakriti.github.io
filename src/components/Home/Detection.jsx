"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import threat from "./.././../../public/threat_detection.png";

const Detection = () => {
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
        <section id="detectionSection" className="min-h-[calc(120vh)]  p-20 flex-col  justify-center bg-white text-black">
            <div className="py-2 pb-8 text-5xl text-[#292929] font-bold flex justify-center">
                InfinitY Breach Detection Module
            </div>
            <div className="py-2 flex justify-center">
                <div className="bg-[#3BACB6] w-40 rounded-lg h-0.5"></div>
            </div>
            <div className="py-2 flex justify-center text-center">
                Our Breach Detection Module combines various threat detection technologies, including traditional signature and rule-based methods, extensive threat intelligence data modeling, and machine learning-based user behavior analysis.
                Our solution is tailored for identifying advanced threats like ransomware and crypto-mining malware, safeguarding critical servers, and preventing unauthorized access or theft of sensitive data. With robust threat hunting analytics and enhanced visibility, InfinitY empowers security admins to detect Indicators of Compromise (IOCs), pinpoint risky hosts and servers, and efficiently disrupt the attack chain.
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
                                        Real Time Threat Analysis
                                    </h3>
                                    <p className="text-[#2F2F2F] mb-4 pb-2">
                                        Advanced threat intelligence data modeling based on conventional signatures and heuristic algorithms, with a focus on safeguarding endpoints from unknown threat attacks.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 cursor-pointer">
                                <div className="rounded-md bg-white-600 shadow-lg p-8">
                                    <h3 className="w-full flex  text-2xl font-bold mb-4 text-[#292929] border-b-2 border-[#3BACB6]  pb-4">Real Time Investigation & Resolution</h3>
                                    <p className="text-[#2F2F2F] mb-4">
                                        Seamlessly establish a direct and secure connection to any endpoint, facilitating in-depth investigations to identify and address breaches promptly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full p-4 flex flex-col lg:flex-row justify-around mt-8">
                            <div className="w-full lg:w-1/2 cursor-pointer mr-16">
                                <div className="rounded-md bg-white-600 shadow-lg p-8">
                                    <h3 className="w-full flex  text-2xl font-bold mb-4 text-[#292929] border-b-2 border-[#3BACB6] pb-4">Continuous Detection Improvement</h3>
                                    <p className="text-[#2F2F2F]">
                                        Adapting and evolving, we continuously learn from emerging threats, delivering updates to enhance malware detection capabilities.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 cursor-pointer">
                                <div className="rounded-md bg-white-600 shadow-lg p-8">
                                    <h3 className="w-full flex  text-2xl font-bold mb-4 text-[#292929] border-b-2 border-[#3BACB6] pb-4">Endpoint Isolation</h3>
                                    <p className="text-[#2F2F2F] pb-8">
                                        In case of suspected malicious activity, endpoints can be promptly isolated from the internet and other network devices in real-time.
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

export default Detection;