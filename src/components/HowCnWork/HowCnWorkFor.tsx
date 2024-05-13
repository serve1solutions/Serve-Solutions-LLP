"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/images/about/Implement.json";

const HowCnWorkFor = () => {
  const container = useRef(null);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  // useEffect(() => {
  //   // Initialize Lottie animation
  //   Lottie.loadAnimation({
  //     container: container.current,
  //     // renderer: 'svg', // or 'canvas', 'html'
  //     loop: true,
  //     autoplay: true,
  //     animationData: animationData,
  //   });
  // }, []);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={variants}
    >
      <section className="pb-[10px]">
        <div className="container">
          {/* <div className="container"> */}
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                  data-wow-delay=".15s"
                >
                  <Lottie animationData={animationData} loop={true} />
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="max-w-[470px]">
                  <div className="mb-9">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    3. Implement: Timely execution as per the plan
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    We choose to implement our plans under a mechanized strategy for best results in limited time. Our aim is to create a healthy environment for your business to expand to multiple targeted markets. From deciding upon the right keywords to framing stunning informational content, eye catchy graphics and web designs to making the best use of technology for your website, we manage all fine details to improve engagement with your target audience that drives response and conversions.

                    </p>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </section>
    </motion.div>
  );
};

export default HowCnWorkFor;
