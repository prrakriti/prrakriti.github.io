"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import compliance from "./../../../public/compliance.png";
import cert from "./../../../public/cert-in.png";
import gdpr from "./../../../public/gdpr.png";
import hippa from "./../../../public/hippa.png";
import iso from "./../../../public/iso.png";
import pcidss from "./../../../public/pci-dss.svg";

const Compliance =React.forwardRef((props, sectionref) => {
    const controls = useAnimation();

    const complianceSectionRef = useRef(null);

    useEffect(() => {
      ref.current = complianceSectionRef.current;
    }, [sectionref]);

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
        <section ref={complianceSectionRef} id="complianceSection" className="min-h-[calc(120vh)]  p-20 flex-col  justify-center bg-white text-black">
            <div className="py-2 pb-8 text-5xl text-[#292929] font-bold flex justify-center">
                InfinitY Continuous Compliance Module
            </div>
            <div className="py-2 flex justify-center">
                <div className="bg-[#3BACB6] w-40 rounded-lg h-0.5"></div>
            </div>
            <div className="py-2 flex justify-center text-center">
                Our compliance Monitoring module automates the assessment of procedural and technical controls for vendor risk management, internal IT compliance, and general best practices in securing IT systems.
            </div>
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
                                    Vender Risk Management
                                </h3>
                                <p className="text-[#2F2F2F] mb-4 pb-6">
                                    We perform comprehensive evaluation and mitigation of vendor security practices and potential risks.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 cursor-pointer">
                            <div className="rounded-md bg-white-600 shadow-lg p-8">
                                <h3 className="w-full flex  text-2xl font-bold mb-4 text-[#292929] border-b-2 border-[#3BACB6]  pb-4">Live Audit</h3>
                                <p className="text-[#2F2F2F] mb-4">
                                    Conduct real-time endpoint audits tailored to your specifications for immediate cybersecurity hygiene assessment.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full p-4 flex flex-col lg:flex-row justify-around mt-8">
                        <div className="w-full lg:w-1/2 cursor-pointer mr-16">
                            <div className="rounded-md bg-white-600 shadow-lg p-8">
                                <h3 className="w-full flex  text-2xl font-bold mb-4 text-[#292929] border-b-2 border-[#3BACB6] pb-4">Regulatory Compliance Assurance</h3>
                                <p className="text-[#2F2F2F]">
                                    We ensure alignment with internal IT policies and regulatory standards provided by compliances by performing regular audits to confirm adherence and address any deviations promptly.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 cursor-pointer">
                            <div className="rounded-md bg-white-600 shadow-lg p-8">
                                <h3 className="w-full flex  text-2xl font-bold mb-4 text-[#292929] border-b-2 border-[#3BACB6] pb-4">Real Time System Process Monitoring</h3>
                                <p className="text-[#2F2F2F]">
                                    We maintain constant vigilance over endpoints, observing for any shifts in events and actively scrutinizing the execution of running processes in real time.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref}
                    className="w-1/2 pt-20"
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                >
                    <div className="w-full flex justify-center items-center">
                        <Image
                            src={compliance}
                            height={400}
                            width={600}
                        />
                    </div>
                    <div className="w-full flex justify-around mt-20 text-2xl font-bold mb-4 text-[#292929]">Compliances Supported</div>
                    <div className="w-full flex justify-around mt-4">
                        <div className="w-1/5 flex justify-center items-center rounded-md border border-solid border-[#3BACB6] border-[1px] p-4 h-32 mr-4">
                            <Image
                                src={iso}
                                height={300}
                                width={500}
                            />
                        </div>
                        <div className="w-1/5 flex justify-center items-center rounded-md border border-solid border-[#3BACB6] border-[1px] p-4 h-32 mr-4">
                            <Image
                                src={pcidss}
                                height={300}
                                width={500}
                            />
                        </div>
                        <div className="w-1/5 flex justify-center items-center rounded-md border border-solid border-[#3BACB6] border-[1px] p-4 h-32 mr-4">
                            <Image
                                src={cert}
                                height={300}
                                width={500}
                            />
                        </div>
                        <div className="w-1/5 flex justify-center items-center rounded-md border border-solid border-[#3BACB6] border-[1px] p-4 h-32 mr-4">
                            <Image
                                src={gdpr}
                                height={100}
                                width={100}
                            />
                        </div>
                        <div className="w-1/5 flex justify-center items-center rounded-md border border-solid border-[#3BACB6] border-[1px] p-4 h-32 mr-4">
                            <Image
                                src={hippa}
                                height={300}
                                width={500}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
});

export default Compliance;