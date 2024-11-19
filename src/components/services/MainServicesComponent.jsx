"use client";
import AnimatedText from "../texts/AnimatedText";
import { motion } from "framer-motion";

const MainServicesComponent = () => {
  return (
    <div className="w-[85%] sm:w-full mx-auto relative px-8 sm:mt-10 mt-20 rounded-3xs bg-sendblack flex flex-col text-center justify-center  text-gray-white  ">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center flex-row text-left mb-10 sm:mb-2 text-white text-6xl font-headerFont"
      >
        <AnimatedText
          text={`Enfoque en`}
          text2={`Servicio Centrado`}
          text3={`en el Paciente`}
          className="text-3xl md:text-5xl text-center"
        />
      </motion.div>
      <div className=" w-full">
        <div className="w-full flex flex-row md:flex-col">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full top-0 flex flex-col py-0 pr-[40px] md:pr-[0px] box-border items-start justify-start gap-[48px] text-whitesmoke-100 md:self-stretch mb-[40px] text-white font-bodyFont -tracking-widest leading-7 text-xl"
          >
            <AnimatedText
              descrp={`Estamos sumamente orgullosos de ofrecer un valor verdaderamente inigualable a los pacientes a quienes servimos con un aprecio sincero. Nuestros cirujanos plásticos, todos certificados por La Asociación Mexicana de Cirugía Plástica, comprenden plenamente que cada individuo trae consigo necesidades y metas completamente únicas. Poseen un vasto cúmulo de experiencia y un don innato para la expresión artística que les capacita de manera excepcional para concretar los resultados anhelados.`}
              className="justify-center text-center"
            />
            <AnimatedText
              descrp={`Ya sea que usted esté buscando someterse a una cirugía de senos, buscar un refinamiento corporal, interesado en procedimientos faciales o bien anhele un rejuvenecimiento cutáneo, nuestro equipo está completamente dedicado a hacer de su visión una realidad.`}
              className="justify-center text-center"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MainServicesComponent;
