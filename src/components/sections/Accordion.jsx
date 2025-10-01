"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

const Accordion = ({ pregunta, respuesta }) => {
  const [show, setshow] = useState(false);

  return (
    <>
      {/** Question section */}
      <div
        onClick={() => setshow(!show)}
        className="flex justify-between mx-auto items-center text-xl text-silver-300  font-headerFont duration-500"
      >
        <h1
          className={`mb-2 ${
            show &&
            "text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-600  text-2xl duration-500"
          }`}
        >
          {pregunta}
        </h1>
        <BiChevronDown
          className={`text-5xl transition-all duration-500 ${
            show ? "rotate-180 text-yellow-500" : ""
          }`}
        ></BiChevronDown>
      </div>
      {/** answer section */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-clip"
          >
            <p className="my-0 mx-auto font-bodyFont text-lg">{respuesta}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
