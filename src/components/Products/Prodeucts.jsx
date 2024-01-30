// ProductsPage.js
"use client";
// ProductsPage.js
import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";

const ProductsPage = () => {
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.1 } },
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    // <section className="flex flex-col items-center justify-center p-20  bg-gradient-to-b from-[#262A4B] via-[#31586D] to-[#419A9F]">
    //   <motion.div
    //     initial="hidden"
    //     animate={controls}
    //     variants={variants}
    //     className="bg-slate-600 p-8 m-20 rounded-lg shadow-md w-full lg:w-2/3"
    //   >
    //     <motion.h2 className="text-2xl font-bold mb-4">
    //       Advanced Threat Detection Browser Extension
    //     </motion.h2>
    //     <motion.p className="py-2">
    //       Elevate your web security with our browser extension. Benefit from
    //       advanced threat detection capabilities to enhance your online security
    //       during web-based activities.
    //     </motion.p>

    //     <motion.h2 className="text-2xl font-bold mt-8 mb-4">
    //       Real-Time Threat Detection
    //     </motion.h2>
    //     <motion.p className="py-2">
    //       Experience the next level of cybersecurity with real-time threat
    //       detection coupled with MITRE mapping. This ensures that your
    //       organization can maintain and redefine its approach to safeguarding
    //       digital assets against evolving threats.
    //     </motion.p>
    //     {/* Add more product-related content here */}
    //   </motion.div>
    //   <motion.div
    //     initial="hidden"
    //     animate={controls}
    //     variants={variants}
    //     className="bg-slate-600 p-8 rounded-lg shadow-md w-full lg:w-2/3"
    //   >
    //     <motion.h2 className="text-2xl font-bold mb-4">
    //       Advanced Threat Detection Browser Extension
    //     </motion.h2>
    //     <motion.p className="py-2">
    //       Elevate your web security with our browser extension. Benefit from
    //       advanced threat detection capabilities to enhance your online security
    //       during web-based activities.
    //     </motion.p>

    //     <motion.h2 className="text-2xl font-bold mt-8 mb-4">
    //       Real-Time Threat Detection
    //     </motion.h2>
    //     <motion.p className="py-2">
    //       Experience the next level of cybersecurity with real-time threat
    //       detection coupled with MITRE mapping. This ensures that your
    //       organization can maintain and redefine its approach to safeguarding
    //       digital assets against evolving threats.
    //     </motion.p>
    //     {/* Add more product-related content here */}
    //   </motion.div>
    // </section>
    <div className=" font-sans leading-normal tracking-normal">
      <section className=" py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 ">We're launching soon</h1>
            <p className="text-gray-300 mb-12">
              Enter your email to be the first to know when we launch.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex items-center">
                <input
                  type="email"
                  className="bg-gray-100 mr-3 py-2 px-4 w-full rounded-md focus:outline-none caret-black text-black"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 ">What to expect</h2>
            <p className="text-gray-300 mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
              orci quis justo aliquam euismod eget a leo. Sed eget orci feugiat,
              porttitor nibh vel, faucibus mauris.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4 mt-12">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-md bg-slate-600 shadow-md p-8">
                <div className="text-4xl font-bold text-purple-300 mb-4">
                  01
                </div>
                <h3 className="text-2xl font-bold mb-4 ">Feature 1</h3>
                <p className="text-gray-200 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nec orci quis justo aliquam euismod eget a leo.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-md bg-slate-600 shadow-md p-8">
                <div className="text-4xl font-bold text-purple-300 mb-4">
                  02
                </div>
                <h3 className="text-2xl font-bold mb-4">Feature 2</h3>
                <p className="text-gray-200 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nec orci quis justo aliquam euismod eget a leo.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-md bg-slate-600 shadow-md p-8">
                <div className="text-4xl font-bold text-purple-300 mb-4">
                  03
                </div>
                <h3 className="text-2xl font-bold mb-4 ">Feature 3</h3>
                <p className="text-gray-200 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nec orci quis justo aliquam euismod eget a leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
