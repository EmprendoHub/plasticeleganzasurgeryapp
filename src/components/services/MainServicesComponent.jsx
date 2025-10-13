"use client";
import Image from "next/image";
import AnimatedText from "../texts/AnimatedText";
import { motion } from "framer-motion";

const MainServicesComponent = () => {
  return (
    <div className="max-w-[1450px] min-h-[400px] rounded-3xl overflow-hidden sm:w-full mx-auto relative mt-10 rounded-3xs  flex flex-col text-center justify-center  text-gray-white  shadow-lg shadow-black/10">
      {/* Cover Image */}
      <div className="  w-full -z-10 h-full">
        <Image
          src="/covers/procedimientos_cover.jpg"
          alt="Cover"
          className="w-full h-full object-cover "
          layout="fill"
        />
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center flex-row text-left mb-10 sm:mb-2  font-headerFont"
      >
        <AnimatedText
          text={`Enfoque en`}
          text2={`Servicio Centrado`}
          text3={`en el Paciente`}
          className="text-5xl md:text-3xl text-center"
        />
      </motion.div>
      {/* <div className=" w-full">
        <div className="w-full flex flex-row md:flex-col">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full top-0 flex flex-col py-0 pr-[40px] md:pr-[0px] box-border items-start justify-start gap-[48px] text-whitesmoke-100 md:self-stretch mb-[40px] font-bodyFont -tracking-widest leading-7 text-xl"
          >
            <AnimatedText
              descrp={`Estamos sumamente orgullosos de ofrecer un valor verdaderamente inigualable a los pacientes a quienes servimos con un aprecio sincero. Nuestros cirujanos plásticos, todos certificados por La Asociación Mexicana de Cirugía Plástica, comprenden plenamente que cada individuo trae consigo necesidades y metas completamente únicas. Poseen un vasto cúmulo de experiencia y un don innato para la expresión artística que les capacita de manera excepcional para concretar los resultados anhelados.`}
              className="justify-center text-center"
            />
          </motion.div>
        </div>
      </div> */}
    </div>
  );
};

export default MainServicesComponent;
