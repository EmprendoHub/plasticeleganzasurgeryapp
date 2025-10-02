"use client";
import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "../texts/AnimatedText";
import arrowimage from "@/images/arrow-51.png";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Slider data - using images from sliders folder
const sliderData = [
  {
    id: 1,
    title: "Aumento de Busto",
    image: "/sliders/AUMENTO_DE_BUSTO.png",
  },
  {
    id: 2,
    title: "Blefaroplastia",
    image: "/sliders/BLEFAROPLASTIA.png",
  },
  {
    id: 3,
    title: "Lipo 360 con BBL",
    image: "/sliders/LIPO_360_CON_BBL.png",
  },
  {
    id: 4,
    title: "Lipo con Remodelación",
    image: "/sliders/LIPO_CON_REMODEL.png",
  },
  {
    id: 5,
    title: "Mommy Makeover",
    image: "/sliders/Mommy_Makeover.png",
  },
  {
    id: 6,
    title: "Rinoplastia",
    image: "/sliders/RINOPLASTIA.png",
  },
];

const ProceduresSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 1 },
      },
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

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
    <section className="w-full py-20 px-5 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-[1450px] mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <AnimatedText
              text="Antes y después de la "
              text2="Cirugía Plástica"
              className="text-white text-4xl font-headerFont md:text-3xl sm:text-2xl mb-6"
            />
          </motion.div>
        </div>

        {/* Slider Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-3">
              {sliderData.map((item, index) => (
                <div
                  key={item.id}
                  className="embla__slide flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2"
                >
                  <motion.div className="rounded-2xl  transition-all duration-1000 ease-out">
                    <div className="relative rounded-xl overflow-hidden h-[350px] w-[350px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover grayscale"
                        priority={index < 3}
                      />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Navigation Arrows */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-4 top-[40%] z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/90 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 flex items-center justify-center backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PiCaretLeftLight className="text-xl md:text-2xl" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-4 top-[40%] z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/90 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 flex items-center justify-center backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PiCaretRightLight className="text-xl md:text-2xl" />
          </motion.button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {sliderData.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-amber-400 scale-125"
                    : "bg-amber-400/40 hover:bg-amber-400/60"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Main CTA Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link href="/galeria" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black border-2 border-amber-400 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-amber-400 hover:text-black flex items-center gap-3 mx-auto"
            >
              Ver Más Resultados
              <Image
                width={20}
                height={20}
                className="w-6 h-4 object-cover transition-transform duration-300 group-hover:translate-x-1"
                alt="Arrow"
                src={arrowimage}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .embla {
          max-width: 100%;
          margin: 0 auto;
          min-height: 350px;
        }

        .embla__container {
          backface-visibility: hidden;
          display: flex;
          touch-action: pan-y;
          margin-left: -1rem;
          min-height: 350px;
        }

        .embla__slide {
          flex: 0 0 auto;
          min-width: 0;
          padding-left: 1rem;
          position: relative;
          min-height: 350px;
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

export default ProceduresSlider;
