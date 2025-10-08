"use client";
import React, { useRef, useState, useEffect } from "react";
import { IoMdCart } from "react-icons/io";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import { IoIosStar, IoMdCheckmark } from "react-icons/io";
import {
  BsCheckCircle,
  BsClock,
  BsCalendar3,
  BsShield,
  BsHeart,
  BsPeople,
  BsShieldCheck,
  BsStarFill,
} from "react-icons/bs";
import {
  FaUserMd,
  FaHeart,
  FaWhatsapp,
  FaPhone,
  FaCalendarPlus,
  FaAward,
  FaDollarSign,
  FaStar,
  FaQuestionCircle,
  FaShieldAlt,
  FaCertificate,
} from "react-icons/fa";
import {
  MdLocalOffer,
  MdHealthAndSafety,
  MdOutlineHealthAndSafety,
  MdOutlineSecurity,
  MdVerified,
  MdSecurity,
  MdLocalHospital,
} from "react-icons/md";
import {
  HiOutlineSparkles,
  HiOutlineHeart,
  HiShieldCheck,
} from "react-icons/hi";
import {
  RiCustomerService2Fill,
  RiHeartLine,
  RiShieldCheckLine,
  RiStarFill,
} from "react-icons/ri";
import {
  AiOutlineCheckCircle,
  AiOutlineHeart,
  AiOutlineSafety,
} from "react-icons/ai";
import { TbHeart, TbMedicalCross, TbShield } from "react-icons/tb";

import FormatedPrice from "@/helpers/FormatedPrice";
import { calculatePercentage } from "@/helpers";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ProductDetails = ({ ctx, product }) => {
  const router = useRouter();
  const imageRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("process");
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Icon mapping object
  const iconMap = {
    BsCalendar3,
    BsCheckCircle,
    BsHeart,
    BsShieldCheck,
    BsStarFill,
    BsPeople,
    FaUserMd,
    FaHeart,
    FaShieldAlt,
    FaAward,
    FaCertificate,
    FaDollarSign,
    MdVerified,
    MdSecurity,
    MdLocalHospital,
    MdHealthAndSafety,
    MdOutlineHealthAndSafety,
    HiOutlineHeart,
    HiShieldCheck,
    RiHeartLine,
    RiShieldCheckLine,
    AiOutlineHeart,
    AiOutlineSafety,
    TbHeart,
    TbShield,
  };

  // Helper function to render icons from string names
  const renderIcon = (iconName, className = "w-6 h-6 text-[#D4AF37]") => {
    const IconComponent = iconMap[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    // Fallback icon if the specified icon is not found
    return <BsCheckCircle className={className} />;
  };

  const setImgPreview = (image, index) => {
    imageRef.current.src = image;
    setSelectedImage(index);
  };

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="max-w-[1450px] mx-auto mb-10">
        <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={
              product?.coverImage ? product.coverImage : "/images/faq@3x.webp"
            }
            alt="product cover"
            className="w-full h-full object-cover"
            width={1450}
            height={600}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-left mt-10"
          >
            <h1 className="text-7xl md:text-5xl font-bold text-amber-500 mb-4 font-headerFont">
              {product?.title}:
              <p className=" mb-6 font-semibold font-bodyFont text-black">
                {product?.subTitle}
              </p>
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              {product?.titleDescription}
            </p>

            <div className="flex flex-col gap-4 justify-center max-w-md">
              {/* Pricing Section */}
              <div className="">
                {product?.promoPrice > 0 && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        OFERTA
                      </span>
                      <span className="text-red-600 font-semibold">
                        {calculatePercentage(
                          product?.price,
                          product?.promoPrice
                        )}
                        % DESCUENTO
                      </span>
                    </div>
                    <p className="line-through text-gray-500 text-lg">
                      <FormatedPrice amount={product?.promoPrice} />
                    </p>
                  </div>
                )}

                <div className="flex md:flex-col gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Depósito inicial
                    </p>
                    <p className="text-2xl font-bold text-gray-600">
                      {product?.deposit > 0 ? (
                        <FormatedPrice amount={product?.deposit} />
                      ) : (
                        "Consultar"
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Precio total</p>
                    <p className="text-2xl font-semibold text-gray-950">
                      <FormatedPrice amount={product?.price} />
                    </p>
                  </div>
                </div>
              </div>
              {/* CTA Buttons */}
              <div className="w-full min-w-[600px] md:min-w-full flex md:flex-col gap-4 mt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
                  onClick={() =>
                    dispatch(addToCart(product)) &&
                    toast.success(
                      `${product?.title.substring(
                        0,
                        15
                      )}... se agregó al carrito`,
                      {
                        position: toast.POSITION.TOP_CENTER,
                        className: "foo-bar",
                        theme: "dark",
                        transition: Bounce,
                      }
                    ) &&
                    router.push("/cart")
                  }
                >
                  <IoMdCart className="text-xl" />
                  Reservar Ahora
                </motion.button>

                <Link
                  href="/#reservar"
                  target="_blank"
                  className="block w-full"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <FaWhatsapp className="text-xl" />
                    Consulta Gratuita
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-2 lg:px-8 py-1">
        {/* Why Choose This Procedure - Benefits Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          {/* Benefits Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir {product?.title}?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre los beneficios únicos de nuestros procedimientos
            </p>
          </div>

          <div className="  sm:flex-col flex  gap-8 md:gap-2">
            {/* Benefits Left */}
            <div className="flex flex-col sm:order-2">
              {/* Benefit 1 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 md:p-4 text-center"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {product.whyProcedure[0]?.icon &&
                    renderIcon(
                      product.whyProcedure[0].icon,
                      "text-3xl text-blue-600"
                    )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {product.whyProcedure[0].title}
                </h3>
                <p className="text-gray-600">
                  {product.whyProcedure[0].detail}
                </p>
              </motion.div>

              {/* Benefit 2 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 md:p-4  text-center"
              >
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {product.whyProcedure[1]?.icon &&
                    renderIcon(
                      product.whyProcedure[1].icon,
                      "text-3xl text-purple-600"
                    )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {product.whyProcedure[1].title}
                </h3>
                <p className="text-gray-600">
                  {product.whyProcedure[1].detail}
                </p>
              </motion.div>

              {/* Benefit 3 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 md:p-4  text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {product.whyProcedure[2]?.icon &&
                    renderIcon(
                      product.whyProcedure[2].icon,
                      "text-3xl text-green-600"
                    )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {product.whyProcedure[2].title}
                </h3>
                <p className="text-gray-600">
                  {product.whyProcedure[2].detail}
                </p>
              </motion.div>
            </div>

            {/* Benefits Image */}
            <div className="flex items-center justify-center sm:order-first">
              <div className="relative w-full h-full rounded-xl overflow-hidden ">
                <Image
                  src={product?.whyImage}
                  alt="Benefits Image"
                  className="w-full h-full object-cover"
                  width={650}
                  height={950}
                />
              </div>
            </div>
            {/* Benefits Right */}
            <div className="flex flex-col md:order-3">
              {/* Benefit 4 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {product.whyProcedure[3]?.icon &&
                    renderIcon(
                      product.whyProcedure[3].icon,
                      "text-3xl text-yellow-600"
                    )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {product.whyProcedure[3].title}
                </h3>
                <p className="text-gray-600">
                  {product.whyProcedure[3].detail}
                </p>
              </motion.div>

              {/* Benefit 5 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 md:p-4  text-center"
              >
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {product.whyProcedure[4]?.icon &&
                    renderIcon(
                      product.whyProcedure[4].icon,
                      "text-3xl text-red-600"
                    )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {product.whyProcedure[4].title}
                </h3>
                <p className="text-gray-600">
                  {product.whyProcedure[4].detail}
                </p>
              </motion.div>

              {/* Benefit 6 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 md:p-4  text-center"
              >
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {product.whyProcedure[5]?.icon &&
                    renderIcon(
                      product.whyProcedure[5].icon,
                      "text-3xl text-indigo-600"
                    )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {product.whyProcedure[5].title}
                </h3>
                <p className="text-gray-600">
                  {product.whyProcedure[5].detail}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Understanding the Procedure */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Entendiendo el Procedimiento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aprende más sobre cómo este procedimiento puede transformar tu
              cuerpo
            </p>
          </div>

          {/* GRID */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="grid sm:grid-cols-1  md:grid-cols-2 grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BsCalendar3 className="text-2xl text-blue-600" />
                    {product.understandingProcedure[0]?.icon &&
                      renderIcon(
                        product.understandingProcedure[0].icon,
                        "text-3xl text-red-600"
                      )}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {product.understandingProcedure[0]?.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {product.understandingProcedure[0]?.detail}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {renderIcon(
                      product.understandingProcedure[1].icon,
                      "text-3xl text-green-600"
                    )}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {product.understandingProcedure[1]?.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {product.understandingProcedure[1]?.detail}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {renderIcon(
                      product.understandingProcedure[2].icon,
                      "text-3xl text-purple-600"
                    )}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {product.understandingProcedure[2]?.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {product.understandingProcedure[2]?.detail}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {renderIcon(
                      product.understandingProcedure[3].icon,
                      "text-3xl text-yellow-600"
                    )}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {product.understandingProcedure[3]?.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {product.understandingProcedure[3]?.detail}
                    Soporte integral para una recuperación suave
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {renderIcon(
                      product.understandingProcedure[4].icon,
                      "text-3xl text-red-600"
                    )}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {product.understandingProcedure[4]?.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {product.understandingProcedure[4]?.detail}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {renderIcon(
                      product.understandingProcedure[5].icon,
                      "text-3xl text-indigo-600"
                    )}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {product.understandingProcedure[5]?.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {product.understandingProcedure[5]?.detail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Free Consultation CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-black mb-4">
              Consulta Gratuita
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Agenda tu consulta gratuita y descubre cómo podemos ayudarte a
              lograr tus objetivos estéticos
            </p>
            <div className="flex md:flex-col flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black hover:bg-yellow-500  text-yellow-500 hover:text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
                onClick={() =>
                  dispatch(addToCart(product)) &&
                  toast.success(
                    `${product?.title.substring(
                      0,
                      15
                    )}... se agregó al carrito`,
                    {
                      position: toast.POSITION.TOP_CENTER,
                      className: "foo-bar",
                      theme: "dark",
                      transition: Bounce,
                    }
                  ) &&
                  router.push("/cart")
                }
              >
                <IoMdCart className="text-xl" />
                Reservar Ahora
              </motion.button>

              <Link href="/#reservar" target="_blank" className="block w-full">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-black hover:bg-gray-950 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <FaCalendarPlus className="text-xl" />
                  Consulta Gratuita
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Patient Reviews */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Reseñas de Pacientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce las experiencias de nuestros pacientes satisfechos
            </p>
          </div>

          <div className="grid sm:grid-cols-1 grid-cols-2 gap-8">
            {product.reviews.map((review, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
                <div className="font-semibold text-gray-900">{review.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Before & After Gallery */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Antes y Después
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Observa los increíbles resultados de nuestros pacientes
            </p>
            <Link
              href="/galeria"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              VISITAR GALERÍA
            </Link>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre el
              procedimiento
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {product.faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <FaQuestionCircle
                    className={`text-yellow-500 transition-transform duration-300 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Meet Our Expert Staff */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl p-12 shadow-xl text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Conoce a Nuestro Equipo de Expertos
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Nuestro equipo de cirujanos plásticos experimentados y
              profesionales médicos se dedica a brindar el más alto nivel de
              atención. Cada miembro de nuestro personal está comprometido a
              ayudarte a alcanzar tus objetivos estéticos con seguridad y
              precisión.
            </p>
            <Link
              href="/acerca"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              CONOCER AL EQUIPO
            </Link>
          </div>
        </motion.div>

        {/* State-of-the-Art Center */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Centro de Última Generación
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Explora nuestras modernas instalaciones diseñadas para tu
              comodidad y seguridad. Nuestros centros están equipados con la
              última tecnología para garantizar los mejores resultados posibles
              para tu cirugía.
            </p>

            {/* Newsletter Signup */}
            <div className="bg-white/10 rounded-lg p-8 max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Desbloquea Tu Mejor Versión
              </h3>
              <p className="text-gray-300 mb-6">
                ¡Mantente informado y conserva tus resultados!
              </p>
              <div className="flex md:flex-col gap-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-3 rounded-lg text-black"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300">
                  ¡REGÍSTRAME!
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
