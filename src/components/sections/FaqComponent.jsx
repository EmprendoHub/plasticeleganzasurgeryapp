"use client";
import { accordions } from "@/data/faqdata";
import Accordion from "./Accordion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "../hero/AnimatedText";

const FaqComponent = () => {
  return (
    <section
      id="faq"
      className="py-10 px-1 w-full h-[100%] md:h-full  flex flex-row  box-border items-center justify-center text-left text-base text-gray-white font-playfair-display"
    >
      <div className="w-full flex flex-col items-center justify-center gap-10 max-w-[1450px] mx-auto md:mx-5">
        {/* Title Section */}
        <div className="text-center ">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <AnimatedText
              text="Preguntas "
              text2="Frecuentes"
              className="text-white text-4xl font-headerFont md:text-3xl sm:text-2xl mb-6"
            />
          </motion.div>
        </div>
        {/* FAQ */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className=" w-full flex flex-col"
        >
          {accordions.map((item, id) => {
            const { pregunta, respuesta } = item;
            return (
              <div
                key={id}
                className="text-white cursor-pointer  rounded-t-md rounded-b-none bg-transparent shadow-[0px_32px_64px_rgba(57,_20,_0,_0.04)] p-2 border-t border-yellow-600"
              >
                <Accordion
                  pregunta={pregunta}
                  respuesta={respuesta}
                ></Accordion>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative leading-[32px] font-text inline-block shrink-0 text-gray-300 font-bodyFont text-base"
        >
          ¿Tienes dudas adicionales? mándanos un mensaje o agenda una consulta y
          aclaramos tus preguntas.
        </motion.div>

        {/* Go to Contact form */}
        <Link href={"/#reserva"}>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className=""
          >
            <motion.button
              whileHover={{ y: -4 }}
              whileTap={{ y: 1 }}
              transition={{ duration: 0.02 }}
              className="mt-5 cursor-pointer px-10 py-5  sm:px-5 bg-black border border-yellow-600 items-start justify-center hover:bg-yellow-600 duration-300 ease-linear rounded-full"
            >
              <div className="self-stretch relative flex flex-row justify-between items-center">
                <h4 className="m-0 text-white top-[14.5px] left-[25px] text-[24px] sm:text-[18px] pr-5 font-medium font-barlow-condensed text-gray-white text-center inline-block">
                  Solicitar consulta
                </h4>
                <Image
                  className="w-[30.5px] sm:w-[25.5px] h-full object-cover"
                  width={30}
                  height={30}
                  alt=""
                  src="/images/arrow-5.webp"
                />
              </div>
            </motion.button>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default FaqComponent;
