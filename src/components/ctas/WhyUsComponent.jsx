"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import AnimatedText from "../texts/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import arrowimage from "@/images/arrow-51.png";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { delay: 0.5, duration: 5000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const WhyUsComponent = () => {
  return (
    <section className="bg-black pb-11 px-20 sm:px-10 w-[100%] rounded-26xl flex flex-row flex-wrap pt-[140px] sm:pt-10 box-border justify-between text-left text-14xl text-gray-white font-poppins">
      <div className="w-[50%] md:min-w-[100%] flex flex-col flex-wrap items-start justify-start gap-[30px] mb-11">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatedText
            text={`¿Por qué`}
            text2={`Operarte`}
            text3={`con Nosotros?`}
            descrp={`Usamos las técnicas mas novedosas de la cirugía plástica estética y reconstructiva para mejorar el aspecto físico, estético, funcional y emocional  de todos y cada uno de mis pacientes sin dejar el lado humano, ético y profesional. `}
            className="text-white text-5xl sm:text-4xl font-headerFont"
          />
        </motion.div>

        <div className="max-w-full flex flex-row flex-wrap sm:flex-col">
          <div className="flex flex-col items-start justify-start gap-3 text-silver-200 pr-10 pb-10 sm:px-0">
            <div className="relative tracking-[0.04em] font-medium text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-600 inline-block w-[150px] text-5xl ">
              <AnimatedNumbers value={2000} />+
            </div>
            <h3 className=" text-white m-0 relative text-2xl leading-[146%] font-medium font-roboto inline-block w-[262px]">
              Pacientes Satisfechos
            </h3>
          </div>

          <div className=" flex flex-col items-start justify-start gap-3 text-silver-200">
            <div className="relative tracking-[0.04em] font-medium text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-600 inline-block w-[98px] text-5xl">
              <AnimatedNumbers value={10} />+
            </div>
            <h3 className="text-white m-0 relative text-2xl leading-[146%] font-medium font-roboto inline-block w-[235px]">
              Años de Experiencia
            </h3>
          </div>

          <Link href="/#reservar" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black border-2 border-amber-400 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-amber-400 hover:text-black flex items-center gap-3 mx-auto"
            >
              Agendar Consulta
              <Image
                width={20}
                height={20}
                className="w-6 h-4 object-cover transition-transform duration-300 group-hover:translate-x-1"
                alt="Arrow"
                src={arrowimage}
              />
            </motion.button>
          </Link>
        </div>
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className=" w-[40%] md:min-w-[100%] max-w-[100%] md:mt-[50px] pb-10 sm:mt-0 flex flex-col items-center justify-center relative m-auto"
      >
        <Image
          width={500}
          height={650}
          quality={100}
          className="max-w-[100%] w-[300px] relative my-0 z-[1] lg:top-[15px]  h-auto"
          alt="Eleganza Plastic Surgery"
          src="/images/frame-79.webp"
        />
      </motion.div>
    </section>
  );
};

export default WhyUsComponent;
