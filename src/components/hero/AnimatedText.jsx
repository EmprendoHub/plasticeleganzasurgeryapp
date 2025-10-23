"use client";
import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleword = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
    },
  },
};

const singleword2 = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
    },
  },
};

const singleword3 = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.3,
    },
  },
};

const descwords = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.4,
    },
  },
};

const AnimatedText = ({
  text = "",
  text2 = "",
  text3 = "",
  descrp = "",
  className = "",
}) => {
  return (
    <div className="">
      <motion.h1
        className={`m-0 self-stretch relative tracking-[0.08em] leading-[108.5%] font-semibold font-headerFont ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text && text.length > 0
          ? text.split(" ").map((word, index) => (
              <motion.span
                key={word + "-" + index}
                className="inline-block m-0 relative  tracking-[0.07em] leading-[123%] capitalize font-playfair-display"
                variants={singleword}
              >
                {word}&nbsp;
              </motion.span>
            ))
          : ""}

        {text2 && text2.length > 0
          ? text2.split(" ").map((word2, index) => (
              <motion.span
                key={word2 + "-" + index}
                className="text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-amber-500 inline-block m-0 relative  tracking-[0.07em] leading-[123%] capitalize font-playfair-display"
                variants={singleword2}
              >
                {word2}
                {index >= 0 ? <>&nbsp;</> : ""}
              </motion.span>
            ))
          : ""}
        <span className="text-gray-300">{` `}</span>

        {text3
          ? text3.split(" ").map((word3, index) => (
              <motion.span
                key={word3 + "-" + index}
                className="m-0 relative  tracking-[0.07em] leading-[123%] capitalize font-playfair-display inline-block"
                variants={singleword3}
              >
                {word3}&nbsp;
              </motion.span>
            ))
          : ""}
        <span className="text-gray-300">{text3 ? ` ` : ""}</span>
        {descrp
          ? descrp.split(" ").map((des, index) => (
              <motion.span
                key={des + "-" + index}
                className="m-0 relative text-lg sm:text-lg  font-light leading-none font-poppins inline-block"
                variants={descwords}
              >
                {des}&nbsp;
              </motion.span>
            ))
          : ""}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
