"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AnimatedText from "../hero/AnimatedText";
import Link from "next/link";

const testimonials = [
  {
    name: "Maria González",
    procedure: "Abdominoplastia",
    rating: 5,
    text: "Excelente experiencia en Eleganza. El Dr. Francisco y su equipo son muy profesionales y me hicieron sentir cómoda en todo momento. Los resultados superaron mis expectativas.",
    location: "Zamora, Michoacán",
  },
  {
    name: "Ana Rodriguez",
    procedure: "Aumento de Senos",
    rating: 5,
    text: "Estoy muy feliz con mi resultado. El doctor me explicó todo el proceso detalladamente y el personal siempre fue muy atento. ¡Totalmente recomendado!",
    location: "Guadalajara, Jalisco",
  },
  {
    name: "Carmen Jiménez",
    procedure: "Rinoplastia",
    rating: 5,
    text: "Mi experiencia fue increíble. Desde la primera consulta hasta el seguimiento post-operatorio, todo fue perfecto. El Dr. Francisco es un artista.",
    location: "León, Guanajuato",
  },
  {
    name: "Patricia Silva",
    procedure: "Mommy Makeover",
    rating: 5,
    text: "Después de tener mis hijos, necesitaba recuperar mi confianza. El equipo de Eleganza me ayudó a sentirme bella otra vez. ¡Gracias por todo!",
    location: "Morelia, Michoacán",
  },
  {
    name: "Laura Mendoza",
    procedure: "Liposucción",
    rating: 5,
    text: "El trato personalizado y los resultados naturales que logró el doctor son excepcionales. Me siento más segura de mí misma.",
    location: "Zamora, Michoacán",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const ModernTestimonials = () => {
  return (
    <section id="testimonios" className="py-20 bg-card max-w-full">
      <div className="max-w-[1450px] mx-auto ">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Title Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <AnimatedText
                text="Reseñas de "
                text2="Nuestros Pacientes"
                className="text-white text-4xl font-headerFont md:text-3xl sm:text-2xl mb-6"
              />
            </motion.div>
          </div>
          <p className="text-xl  max-w-3xl mx-auto text-gray-300">
            Historias reales de pacientes reales que eligieron Eleganza Cirugía
            Plástica para su viaje de transformación.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8 ">
            <div className="flex items-center space-x-2">
              <StarRating rating={5} />
              <span className="font-semibold text-lg text-gray-300">
                4.9/5 Reseñas
              </span>
            </div>
            <div className="text-lg font-semibold text-gray-300">
              500+ Pacientes Felices
            </div>
            <div className="text-lg font-semibold text-gray-300">
              10+ Años de Experiencia
            </div>
          </div>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".testimonials-prev",
              nextEl: ".testimonials-next",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  {/* Quote Icon */}
                  <div className="text-yellow-400 mb-4">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Patient Info */}
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-white text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-yellow-600 font-medium">
                          {testimonial.procedure}
                        </p>
                        <p className="text-gray-300 text-sm">
                          {testimonial.location}
                        </p>
                      </div>
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button className="testimonials-prev bg-gray-900 hover:bg-yellow-400 hover:text-black text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="testimonials-next bg-gray-900 hover:bg-yellow-400 hover:text-black text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {/* Bottom Title Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <AnimatedText
                text="Únete a Nuestra Familia de"
                text2="Pacientes Satisfechos"
                className="text-white text-4xl font-headerFont md:text-3xl sm:text-2xl mb-6"
              />
            </motion.div>
          </div>
          <p className="text-gray-300 mb-6">
            Programa tu consulta y comienza tu viaje de transformación hoy
          </p>
          <Link
            href={"#reservar"}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Reservar Consulta
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernTestimonials;
