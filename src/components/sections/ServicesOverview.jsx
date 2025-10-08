"use client";
import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import AnimatedText from "../hero/AnimatedText";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

const services = [
  {
    title: "Lipo y Remodelación Costal",
    description: "Sculpt your silhouette with advanced tummy tuck procedures",
    detailedDescription:
      "La Liposucción con remodelación costal es un procedimiento estético que combina dos técnicas: la Liposucción para eliminar el exceso de grasa y la remodelación de las costillas flotantes (la 11ª y 12ª) para crear una cintura más estrecha y definida.",
    image: "/sections/Abdominoplastia1.png",
    url: "/servicio/74110d7f8151e96c6cf037d1",
  },
  {
    title: "Liposucción 360 con BBL",
    description: "Remove unwanted fat with precision liposuction techniques",
    detailedDescription:
      "La liposucción utiliza técnicas avanzadas para remover depósitos de grasa localizada que no responden a dieta y ejercicio. Procedimiento mínimamente invasivo con recuperación rápida y resultados duraderos para contornear tu figura ideal.",
    image: "/sections/liposuction1.png",
    url: "/servicio/65330d7f8151e96c6cf058d7",
  },
  {
    title: "Aumento de Busto",
    description: "Enhance your confidence with breast augmentation",
    detailedDescription:
      "El aumento de busto mejora el tamaño y forma de los senos utilizando implantes de alta calidad. Ofrecemos consulta personalizada para seleccionar el tamaño y tipo de implante que mejor se adapte a tu anatomía y estilo de vida.",
    image: "/sections/Implantes_de_busto_01.png",
    url: "/servicio/65330d7f8151e96c6cf058d8",
  },
  {
    title: "Blefaroplastia",
    description: "Restore youthful eye appearance with eyelid surgery",
    detailedDescription:
      "La blefaroplastia corrige los párpados caídos y elimina el exceso de piel y grasa de los párpados superiores e inferiores. Este procedimiento rejuvenece la mirada y puede mejorar la visión en casos de párpados caídos.",
    image: "/sections/blefaroplastia.png",
    url: "/servicio/65330d7f8151e96c6cf057ce",
  },
  {
    title: "Rinoplastia",
    description: "Perfect your profile with expert rhinoplasty",
    detailedDescription:
      "La rinoplastia mejora la forma y función de la nariz, creando armonía facial. Utilizamos técnicas avanzadas para lograr resultados naturales que complementen tus características faciales únicas, mejorando tanto la estética como la respiración.",
    image: "/sections/rhinoplasty1.png",
    url: "/servicio/65330d7f8151k96c6cf058db",
  },
  {
    title: "Mommy Makeover",
    description: "Complete transformation for post-pregnancy body",
    detailedDescription:
      "El Mommy Makeover combina múltiples procedimientos en una sola cirugía para restaurar tu figura pre-embarazo. Típicamente incluye abdominoplastia, aumento o levantamiento de senos, y liposucción para una transformación completa.",
    image: "/sections/mommy_makeover1.png",
    url: "/servicio/65330d7f8151e96c6cf058dc",
  },
];

const ServicesOverview = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 1 },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-5 bg-black rounded-3xl mx-5 my-20 max-w-[1450px] w-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <AnimatedText
              text="Procedimientos"
              text2="Mas populares"
              className="text-white text-4xl font-headerFont md:text-3xl sm:text-2xl mb-6"
            />
          </motion.div>
        </div>
        {/* Services Slider */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="embla__slide flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2"
                >
                  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 w-full h-[500px] relative">
                    {/* Service Image */}
                    <div className="relative h-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 group-hover:via-black/40 transition-all duration-500" />
                    </div>

                    {/* Service Content - Expands on hover */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-black/80 p-4 text-white transition-all duration-500 ease-out group-hover:pb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold mb-3 text-yellow-400">
                          {service.title}
                        </h3>
                        {/* CTA Button */}
                        <Link
                          href={`${service.url}`}
                          className="w-fit bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                          <BsArrowRight size={20} />
                        </Link>
                      </div>

                      {/* Description - Hidden by default, shows on hover */}
                      <div className="overflow-hidden transition-all duration-500 ease-out max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100">
                        <p className="text-gray-200 text-xs leading-relaxed mb-2">
                          {service.detailedDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Navigation Arrows */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute -left-4 top-[40%] z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/90 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PiCaretLeftLight className="text-xl md:text-2xl" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute -right-4 top-[40%] z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/90 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PiCaretRightLight className="text-xl md:text-2xl" />
          </motion.button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-yellow-400 scale-125"
                    : "bg-yellow-400/40 hover:bg-yellow-400/60"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .embla {
          max-width: 100%;
          margin: 0 auto;
        }

        .embla__container {
          backface-visibility: hidden;
          display: flex;
          touch-action: pan-y;
          margin-left: -1rem;
        }

        .embla__slide {
          flex: 0 0 auto;
          min-width: 0;
          padding-left: 1rem;
          position: relative;
        }

        @media (max-width: 640px) {
          .embla__slide {
            flex: 0 0 100%;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .embla__slide {
            flex: 0 0 50%;
          }
        }

        @media (min-width: 1025px) and (max-width: 1280px) {
          .embla__slide {
            flex: 0 0 33.333%;
          }
        }

        @media (min-width: 1281px) {
          .embla__slide {
            flex: 0 0 25%;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesOverview;
