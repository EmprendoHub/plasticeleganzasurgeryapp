"use client";
import { useRef, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import arrowimage from "@/images/arrow-9.png";
import mainimage from "@/images/highqltysalvadornoback-1.png";
import starsimages from "@/images/stars.png";

const imagevariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const listvarinats1 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.3,
      staggerChildren: 0.08,
    },
  },
};

const listvarinats2 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
      staggerChildren: 0.08,
    },
  },
};

const listvarinats3 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.8,
      staggerChildren: 0.08,
    },
  },
};

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 4000 });
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

const NewHero = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start text-center  text-gray-100 text-[72px] md:text-[48px]">
      <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" flex flex-col items-center justify-start md:max-w-full"
        >
          <AnimatedText
            text={`Te Convertimos en una`}
            text2={`Estrella`}
            className=" text-53xl md:text-21xl"
          />
        </motion.div>
        <motion.div
          className="self-stretch flex flex-col items-center justify-start text-left text-lg text-gray-white font-poppins"
          variants={imagevariants}
          initial="initial"
          animate="animate"
        >
          <div className="hero-columns self-stretch flex flex-row items-center justify-center gap-[29px] md:flex-col">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="w-[33%] flex flex-col items-end justify-center relative gap-[67px] lg:hidden"
            >
              <motion.div
                className="flex flex-row items-center justify-between z-[0]"
                variants={listvarinats1}
              >
                <Image
                  width={40}
                  height={40}
                  className="pr-5 relative object-cover"
                  alt=""
                  src={arrowimage}
                />
                <div className="relative tracking-[0.12em] leading-[123%] font-light inline-block w-[360px] shrink-0">
                  CIRUJANO PLÁSTICO
                </div>
              </motion.div>
              <motion.div
                className=" flex flex-row items-center justify-between z-[1]"
                variants={listvarinats2}
              >
                <Image
                  width={40}
                  height={40}
                  className="pr-5 relative object-cover"
                  alt=""
                  src={arrowimage}
                />
                <div className="relative tracking-[0.12em] leading-[123%] font-light inline-block w-[360px] shrink-0">
                  DR. FRANCISCO RODRÍGUEZ
                </div>
              </motion.div>
              <motion.div
                className=" flex flex-row items-center justify-between z-[2]"
                variants={listvarinats3}
              >
                <Image
                  width={40}
                  height={40}
                  className="pr-5 relative object-cover"
                  alt=""
                  src={arrowimage}
                />
                <div className="relative tracking-[0.12em] leading-[123%] font-light inline-block w-[360px] shrink-0">{`SUPERANDO EXPECTATIVAS `}</div>
              </motion.div>
              <div className="self-stretch my-0 mx-[!important] absolute top-[416.5px] left-[-218px] flex flex-row p-2.5 items-center justify-between z-[3]">
                <div className="absolute my-0 mx-[!important] top-[0px] left-[0px] w-[706px] h-0 z-[0]" />
              </div>
            </motion.div>

            <motion.div
              className="w-[33%] md:w-[50%] sm:w-full shrink-0 flex flex-col items-center justify-start relative"
              variants={imagevariants}
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
              ></motion.div>
              <Image
                width={1000}
                height={30}
                quality={100}
                className="self-stretch my-0 px-4 rounded-3xs max-w-full h-[664px] shrink-0 object-cover z-[0]"
                alt=""
                src={mainimage}
              />
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="w-[33%] md:w-[50%] h-[238px] flex flex-col pt-[42px] pl-10 sm:pl-0 pb-0 box-border items-start justify-end md:justify-center md:items-center relative gap-[11px] text-center text-13xl "
            >
              <Image
                width={200}
                height={30}
                className="relative w-[100$] md:m-auto h-8 o z-[1]"
                alt=""
                src={starsimages}
              />
              <h3 className="m-0 relative font-headerFont text-4xl tracking-[0.09em] leading-[123%] font-semibold font-inherit ">
                Experiencia
              </h3>
              <div className="relative box-border w-[221px] h-[3px] z-[1] border-t-[3px] border-solid border-amber-400 " />
              <div className="relative text-5xl sm:text-3xl font-bodyText tracking-[0.12em] leading-[123%] font-semibold ">
                +<AnimatedNumbers value={20} /> Años
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewHero;
