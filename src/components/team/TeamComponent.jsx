"use client";
import AnimatedText from "@/components/texts/AnimatedText";
import { motion } from "framer-motion";
import Image from "next/image";

const TeamComponemt = () => {
  return (
    <section className="flex flex-col px-5 mt-10 box-border items-center justify-center gap-[30px] text-center  h-full text-gray-white font-roboto">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatedText
          text={`¿Tienes una Idea Para Transformar`}
          text2={`tu Imagen?`}
          text3={`Platiquemos...`}
          className="text-7xl text-white font-headerFont md:text-2xl sm:text-4xl mb-10"
        />
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full relative "
      >
        <Image
          width={900}
          height={700}
          quality={100}
          style={{ objectFit: "contain" }}
          className="relative max-w-full md:max-h-[300px] w-auto mx-auto"
          alt=""
          src="/images/DrFranciscoTeam_2.webp"
        />
      </motion.div>

      <motion.h4
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="m-0 text-white px-40 sm:px-5 font-bodyFont relative text-4xl sm:text-lg leading-[146%] font-medium font-inherit text-darkgray-200"
      >
        <AnimatedText
          descrp="Nuestro equipo esta orgulloso de presentar siempre los mejores resultados de México, con gente que nos visita desde el extranjero tanto locales. Todos y cada uno de los procedimientos son realizados meticulosamente por el cirujano Dr. Francisco Rodríguez siguiendo estrictamente las pautas para el cuidado del paciente.  Todos los pacientes pueden esperar una experiencia que supere sus expectativas."
          className="text-mid"
        />
      </motion.h4>

      <div className="mt-11 sm:h-[full] gap-x-24 flex flex-row md:flex-col py-10 px-[0.44140625px] box-border items-center justify-center gap-[53px] text-left text-mid text-white">
        <div className="relative flex flex-row items-center gap-x-3">
          <Image
            width={20}
            height={20}
            className="flex w-auto h-auto object-cover"
            alt="checkmark"
            src="/images/frame.webp"
          />
          <div className="relative leading-[146%] font-medium inline-block ">
            4.9/5 Reseñas Positivas
          </div>
        </div>
        <div className="relative flex flex-row items-center gap-x-3">
          <Image
            width={20}
            height={20}
            className="flex w-auto h-auto object-cover"
            alt="checkmark"
            src="/images/frame.webp"
          />
          <div className="relative  leading-[146%] font-medium inline-block ">
            Capacitación Continua
          </div>
        </div>
        <div className="relative flex flex-row items-center gap-x-3">
          <Image
            width={20}
            height={20}
            className="flex  w-auto h-auto object-cover"
            alt="checkmark"
            src="/images/frame.webp"
          />
          <div className="relative  leading-[146%] font-medium inline-block ">
            Tecnología de Punta
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamComponemt;
