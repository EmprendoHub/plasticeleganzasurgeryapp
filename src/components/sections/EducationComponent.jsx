"use client";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ place, years, position, description }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[80%] sm:w-[65%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className=""
      >
        <h3 className="relative tracking-[0.04em] font-medium text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 mb-3 to-yellow-600 text-5xl sm:text-3xl  font-headerFont">
          {place}&nbsp;
        </h3>
        <span className="font-small md:text-base">{years}</span>
        <h3 className="m-0 mb-1 top-[0px] text-17xl leading-[123%] font-medium sm:text-xl md:text-7xl font-poppins text-lightgray-200 font-bodyFont">
          {position}
        </h3>
        <p className="m-0  top-[54px] left-[0px] leading-[146%] text-lg  font-bodyFont">
          <span className="block md:mb-10 sm:mb-3 mb-20">{description}</span>
        </p>
      </motion.div>
    </li>
  );
};

const EducationComponent = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <section className="bg-black pt-11  box-border items-center justify-center gap-[39px] text-left text-5xl text-lightgray-200 font-poppins">
      <h2 className="m-0 relative text-inherit items-center text-center mb-11 tracking-[0.03em] leading-[123%] font-semibold font-inherit text-white font-headerFont">
        Nuestra Trayectoria de Excelencia
      </h2>

      <div
        ref={ref}
        className="w-[60%] sm:w-[90%]  mx-auto relative left-0 ṕb-20"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-4 top-[50px] w-[4px] h-[72%] bg-slate-400 origin-top"
        />

        <ul className="text-white ">
          <Details
            place={`Fundación de Eleganza`}
            years={`2010 - 2015`}
            position={`Inicio de Operaciones`}
            description={`Eleganza Plastic Surgery nace con la visión de ofrecer servicios de cirugía plástica de clase mundial en la región de Zamora. Desde nuestros inicios, nos comprometimos con los más altos estándares de calidad, seguridad y atención personalizada para cada paciente.`}
          />

          <Details
            place={`Expansión y Certificaciones`}
            years={`2015 - 2020`}
            position={`Crecimiento Institucional`}
            description={`Consolidamos nuestro equipo de especialistas certificados y ampliamos nuestras instalaciones con tecnología de última generación. Obtenemos certificaciones internacionales que respaldan nuestra excelencia quirúrgica y nos posicionan como referentes en cirugía plástica estética y reconstructiva.`}
          />

          <Details
            place={`Liderazgo Regional`}
            years={`2020 - Presente`}
            position={`Centro de Excelencia`}
            description={`Hoy, Eleganza es reconocida como el centro líder de cirugía plástica en la región. Con más de 2,000 pacientes satisfechos, un equipo multidisciplinario de expertos y tecnología de vanguardia, continuamos transformando vidas y estableciendo nuevos estándares de excelencia en cirugía plástica.`}
          />
        </ul>
      </div>
    </section>
  );
};

export default EducationComponent;
