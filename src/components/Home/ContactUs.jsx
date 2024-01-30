"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import check from "./../../../public/checkmark.png";
import { Input } from "@/components/ui/input";
import { useGoogleForm, GoogleFormProvider } from 'react-google-forms-hooks';

const ContactUs = () => {
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

    // Use the useGoogleForm hook and pass the form data obtained from the Google Form
    const methods = useGoogleForm({
        form: {
            fvv: 1,
            pageHistory: 0,
            fbzx: '-3094744882344152868',
            action: 'e/1FAIpQLSfJTYihaA_ZdTe8apVuFQW51AhDH02x54zzl9ZTFPs4V5GYVA',
            title: null,
            description: null,
            fields: [
                {
                    label: 'Name',
                    description: null,
                    type: 'SHORT_ANSWER',
                    id: '296613243',
                    required: false
                },
                {
                    label: 'Email',
                    description: null,
                    type: 'SHORT_ANSWER',
                    id: '1427369040',
                    required: false
                },
                {
                    label: 'Message',
                    description: null,
                    type: 'LONG_ANSWER',
                    id: '1580869620',
                    required: false
                }
            ],
            fieldsOrder: { '296613243': 0, '1427369040': 1, '1580869620': 2 }
        },
    });

    // Define your onSubmit function
    const onSubmit = async (data) => {
        await methods.submitToGoogleForms(data).then(() => {
            // Handle success or show an alert
            console.log("data", data)
            window.alert('Form submitted with success!');
        });
    };

    return (
        <section className="min-h-[calc(100vh)] p-20 flex justify-center text-black bg-[#31586D]">
            <div className="w-1/2 flex flex-col items-start justify-start ml-32 text-white">
                <div className="flex items-center justify-start">
                    <Image
                        src="/logo_transparent.svg"
                        width={80}
                        height={54}
                        priority
                        alt="Infinity Logo"
                        className="text-right"
                    />
                    <p className="ml-4 text-3xl">Infinity</p>
                </div>
                <div className="py-2 pb-8 text-5xl text-[#FFFFFF] font-bold flex justify-start">
                    Connect With Us
                </div>
                <div className="py-2 flex justify-start">
                    <div className="bg-[#3BACB6] w-40 rounded-lg h-0.5"></div>
                </div>
                <div className="flex w-full">
                    <div className="flex w-full">
                        <motion.div
                            ref={ref}
                            className="w-full p-4 flex flex-col justify-start"
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                        >
                            <div className="text-xl font-bold">

                                <p> Interested in seeing us in action?</p>
                            </div>
                            <div className="text-xl font-semibold">
                                <p> Tell us about yourself and we'll connect you with an Infinity expert. </p>
                            </div>
                            <div className="mt-20 font-semibold flex items-start">
                                <Image
                                    src={check}
                                    height={20}
                                    width={20}
                                />
                                <p className="ml-4"> Stop Threats at Faster Speed, Greater Scale, and Higher Accuracy Than Humanly Possible. </p>
                            </div>
                            <div className="mt-8 font-semibold flex items-start">
                                <Image
                                    src={check}
                                    height={20}
                                // width={20}
                                />
                                <p className="ml-4">Reduce Risk and Accelerate Your Multi-Hybrid Transformation with AI-Powered Cloud Security. </p>
                            </div>
                            <div className="mt-8 font-semibold flex items-start">
                                <Image
                                    src={check}
                                    height={20}
                                    width={20}
                                />
                                <p className="ml-4"> Create Actionable Insights, and Reduce Spend with SentinelOne Security Data Lake. </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex flex-col items-start justify-start ml-32 bg-white rounded-md">
                {/* Wrap your form in GoogleFormProvider */}
                <GoogleFormProvider {...methods}>
                    <form
                        className="w-full h-full bg-white-600 rounded-lg shadow-md p-20"
                        id="ContactForm"
                        onSubmit={methods.handleSubmit(onSubmit)}
                    >
                        {/* Use the useShortAnswerInput and useLongAnswerInput hooks for your input fields */}
                        <div className="mb-16">
                            <label className="block text-black text-[#292929] font-bold text-xl mb-2" htmlFor="name">
                                Name
                            </label>
                            <Input
                                className="border bg-white rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                id="Name"
                                type="text"
                                placeholder="Enter your name"
                                {...methods.register('Name')} // Register the input field with the library
                            />
                        </div>
                        <div className="mb-16">
                            <label className="block text-black text-[#292929] font-bold text-xl mb-2" htmlFor="email">
                                Email
                            </label>
                            <Input
                                className="border bg-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="Email"
                                type="email"
                                placeholder="Enter your email"
                                {...methods.register('Email')} // Register the input field with the library
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-[#292929] font-bold text-xl mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="appearance-none border bg-white rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                id="Message"
                                rows="6"
                                placeholder="Enter your message"
                                {...methods.register('Message')} // Register the input field with the library
                            />
                        </div>
                        <div className="flex justify-end mt-10">
                            <button
                                className="bg-[#3BACB6] hover:bg-blue-700 text-white font-bold py-2 px-8 rounded hover:bg-[#3BACB6] focus:outline-none focus:shadow-md hover:text-white active:transform active:scale-95"
                                type="submit"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </GoogleFormProvider>
            </div>
        </section>
    );
};

export default ContactUs;
