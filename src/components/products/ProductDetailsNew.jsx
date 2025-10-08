"use client";
import React, { useRef } from "react";
import { IoMdCart } from "react-icons/io";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
} from "react-icons/bs";
import {
  FaUserMd,
  FaHeart,
  FaWhatsapp,
  FaPhone,
  FaCalendarPlus,
  FaAward,
  FaDollarSign,
  FaHandHeart,
  FaStar,
  FaQuestionCircle,
} from "react-icons/fa";
import {
  MdLocalOffer,
  MdHealthAndSafety,
  MdOutlineHealthAndSafety,
  MdOutlineSecurity,
} from "react-icons/md";
import { HiOutlineSparkles, HiOutlineHeart } from "react-icons/hi";
import { RiCustomerService2Fill, RiStarFill } from "react-icons/ri";
import { AiOutlineCheckCircle, AiOutlineSafety } from "react-icons/ai";
import { TbMedicalCross } from "react-icons/tb";
import classes from "@/components/products/catalog.module.css";
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

  const setImgPreview = (image, index) => {
    imageRef.current.src = image;
    setSelectedImage(index);
  };

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const starRating = (props) => {
    if (props) {
      let stars = props;
      if (stars == 0 || stars == 1 || stars == 1.5) {
        stars = 1;
      } else if (stars == 2 || stars == 2.5) {
        stars = 2;
      } else if (stars == 3 || stars == 3.5) {
        stars = 3;
      } else if (stars == 4 || stars == 4.5) {
        stars = 4;
      } else if (stars == 5) {
        stars = 5;
      }
    }

    const starArray = Array.from({ length: props }, (_, index) => (
      <span key={index} className="text-yellow-500">
        <IoIosStar />
      </span>
    ));
    return <>{starArray}</>;
  };

  // FAQ data
  const faqs = [
    {
      question: "¿Quién es candidato para este procedimiento?",
      answer:
        "Los candidatos ideales son aquellas personas con grasa persistente resistente a la dieta y el ejercicio, con buena salud general y expectativas realistas.",
    },
    {
      question: "¿Cuáles son las áreas donde se puede realizar?",
      answer:
        "Se puede realizar en abdomen, muslos, brazos, espalda, cuello, glúteos y otras áreas donde se acumule grasa localizada.",
    },
    {
      question: "¿Cuál es el tiempo de recuperación?",
      answer:
        "La recuperación inicial es de 1-2 semanas, con resultados visibles a los 3-6 meses cuando la inflamación ha cedido completamente.",
    },
    {
      question: "¿Se puede combinar con otros procedimientos?",
      answer:
        "Sí, frecuentemente se combina con abdominoplastia, aumento de glúteos, o lifting corporal para resultados más completos.",
    },
    {
      question: "¿Cuánto cuesta el procedimiento?",
      answer:
        "El costo varía según las áreas a tratar y la complejidad. Ofrecemos consulta gratuita y planes de financiamiento flexibles.",
    },
    {
      question: "¿Cuánta grasa se puede eliminar?",
      answer:
        "Por seguridad, se recomienda eliminar no más de 5 litros de grasa en una sola sesión, dependiendo de cada paciente.",
    },
  ];

  // Patient reviews data
  const reviews = [
    {
      name: "María García",
      rating: 5,
      comment:
        "La clínica es muy bonita y limpia. Todo el personal fue muy dulce y me dieron mucho apoyo. Hay una señora que me mandaba besos y realmente calmó mis nervios.",
    },
    {
      name: "Ana Rodríguez",
      rating: 5,
      comment:
        "Tuve una experiencia fantástica en Eleganza. El personal fue increíblemente amigable y me hicieron sentir cómoda desde el momento en que entré. ¡Definitivamente recomendaré esta clínica a mis amigas!",
    },
    {
      name: "Carmen López",
      rating: 5,
      comment: "Personal agradable y amigable, ¡¡¡servicio profesional!!!",
    },
    {
      name: "Sofía Martínez",
      rating: 5,
      comment:
        "He tenido una experiencia increíble en Eleganza. El equipo ha ido más allá respondiendo todas mis preguntas y preocupaciones, ¡muy emocionada de seguir adelante!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-headerFont">
              {product?.title}
            </h1>
            <p className="text-xl md:text-2xl text-yellow-400 mb-6 font-semibold">
              Esculpe Tu Cuerpo Perfecto
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              {starRating(product?.rating)}
              <span className="text-white text-lg ml-2">
                {product?.rating} / 5 estrellas
              </span>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Procedimiento profesional realizado por especialistas certificados
              con tecnología de vanguardia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaPhone className="text-xl" />
                CONSULTA GRATIS
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaCalendarPlus className="text-xl" />
                RESERVAR AHORA
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-2xl shadow-2xl overflow-hidden">
              {isLoading ? (
                <div className={`${classes.loader} absolute h-20`} />
              ) : (
                <Image
                  ref={imageRef}
                  src={
                    product?.imageUrls
                      ? product.imageUrls[selectedImage]
                      : "/images/faq@3x.webp"
                  }
                  alt="product image"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              )}
            </div>

            {/* Image Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product?.imageUrls?.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setImgPreview(image, index)}
                  className={`aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedImage === index
                      ? "ring-4 ring-yellow-400 shadow-lg"
                      : "hover:shadow-md"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`product image ${index + 1}`}
                    className="w-full h-full object-cover"
                    width={200}
                    height={200}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Pricing Section */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <MdLocalOffer className="text-3xl text-yellow-500" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Precios Especiales
                </h3>
              </div>

              {product?.promoPrice && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      OFERTA
                    </span>
                    <span className="text-red-600 font-semibold">
                      {calculatePercentage(
                        product?.deposit,
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

              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-600 mb-1">Depósito inicial</p>
                  <p className="text-4xl font-bold text-gray-900">
                    {product?.deposit > 0 ? (
                      <FormatedPrice amount={product?.deposit} />
                    ) : (
                      "Consultar"
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Precio total</p>
                  <p className="text-2xl font-semibold text-gray-700">
                    <FormatedPrice amount={product?.price} />
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 mt-8">
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
                  href="https://wa.link/98ox9t"
                  target="_blank"
                  className="block"
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

            {/* What is this procedure? */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ¿Qué es {product?.title}?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <IoMdCheckmark className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Procedimiento quirúrgico para eliminación de grasa
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <IoMdCheckmark className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Dirigido a áreas específicas del cuerpo
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <IoMdCheckmark className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Se puede combinar con otros procedimientos como aumento de
                    glúteos
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <IoMdCheckmark className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Elimina células de grasa para esculpir y contornear el
                    cuerpo
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <IoMdCheckmark className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Proporciona una silueta más esbelta y definida
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir Eleganza Plastic Surgery?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaAward className="text-blue-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Cirujanos plásticos experimentados y certificados
                    </h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TbMedicalCross className="text-red-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Instalaciones de última generación
                    </h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaHandHeart className="text-purple-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Planes de tratamiento personalizados
                    </h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RiCustomerService2Fill className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Atención excepcional al paciente
                    </h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HiOutlineSparkles className="text-yellow-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Técnicas avanzadas de cirugía
                    </h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BsShield className="text-indigo-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Soporte integral pre y post operatorio
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose This Procedure - Benefits Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir {product?.title}?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre los beneficios únicos de nuestros procedimientos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-xl text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MdOutlineHealthAndSafety className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Efectivo donde la dieta y el ejercicio fallan
              </h3>
              <p className="text-gray-600">
                Dirigido a depósitos de grasa resistentes a los métodos
                tradicionales de pérdida de peso.
              </p>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-xl text-center"
            >
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HiOutlineHeart className="text-3xl text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Atractivo estético mejorado
              </h3>
              <p className="text-gray-600">
                Contornea tu cuerpo para que se vea más atractivo y
                proporcionado.
              </p>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-xl text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUserMd className="text-3xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Cirujanos expertos
              </h3>
              <p className="text-gray-600">
                Realizado por cirujanos plásticos experimentados y certificados.
              </p>
            </motion.div>

            {/* Benefit 4 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-xl text-center"
            >
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HiOutlineSparkles className="text-3xl text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Técnicas avanzadas
              </h3>
              <p className="text-gray-600">
                Nuestro equipo utiliza las últimas técnicas de cirugía estética.
              </p>
            </motion.div>

            {/* Benefit 5 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-xl text-center"
            >
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BsCheckCircle className="text-3xl text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Eliminación permanente de células de grasa
              </h3>
              <p className="text-gray-600">
                Una vez que se eliminan las células de grasa, no regresan.
              </p>
            </motion.div>

            {/* Benefit 6 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-xl text-center"
            >
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BsHeart className="text-3xl text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Confianza mejorada
              </h3>
              <p className="text-gray-600">
                Aumenta tu autoestima con una nueva apariencia.
              </p>
            </motion.div>

            {/* Benefit 7 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-xl text-center"
            >
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MdOutlineSecurity className="text-3xl text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Procedimiento seguro
              </h3>
              <p className="text-gray-600">
                Realizado bajo anestesia general con los más altos estándares de
                seguridad.
              </p>
            </motion.div>

            {/* Benefit 8 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-xl text-center"
            >
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MdHealthAndSafety className="text-3xl text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Beneficios para la salud
              </h3>
              <p className="text-gray-600">
                La reducción del exceso de grasa ayuda a mejorar la salud
                general.
              </p>
            </motion.div>

            {/* Benefit 9 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-xl text-center"
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaDollarSign className="text-3xl text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Precios accesibles
              </h3>
              <p className="text-gray-600">
                Costo competitivo con planes de financiamiento disponibles.
              </p>
            </motion.div>
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

          {/* Tab Navigation */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex">
                {[
                  { id: "process", label: "Proceso" },
                  { id: "benefits", label: "Beneficios" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-4 text-sm font-medium border-b-2 ${
                      activeTab === tab.id
                        ? "border-yellow-500 text-yellow-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-8">
              {activeTab === "process" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BsCalendar3 className="text-2xl text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Consulta y Evaluación
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Nuestros expertos evalúan tu idoneidad para el
                      procedimiento
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BsCheckCircle className="text-2xl text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Preparaciones Pre-Operatorias
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Instrucciones detalladas para prepararte para la cirugía
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaUserMd className="text-2xl text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      El Procedimiento
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Realizado bajo anestesia general con pequeñas incisiones
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MdHealthAndSafety className="text-2xl text-yellow-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Cuidado Post-Operatorio
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Soporte integral para una recuperación suave
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BsClock className="text-2xl text-red-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Proceso de Recuperación
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Espera hinchazón y moretones inicialmente, con resultados
                      completos visibles en 3-6 meses
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BsHeart className="text-2xl text-indigo-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Resultados a Largo Plazo
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Mantén un estilo de vida saludable para disfrutar de
                      beneficios duraderos
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "benefits" && (
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <HiOutlineSparkles className="text-2xl text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Beneficios Completos
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Experimenta una transformación corporal completa. Elimina
                    células de grasa persistentes resistentes a la dieta y el
                    ejercicio, y logra una apariencia más suave y contorneada.
                    Disfruta de mayor confianza, atractivo estético mejorado y
                    beneficios para la salud al reducir el exceso de grasa.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <BsCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Eliminación permanente de grasa
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Las células eliminadas no regresan
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BsCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Contorneo corporal
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Silueta más definida y proporcionada
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BsCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Autoestima mejorada
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Mayor confianza en tu apariencia
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BsCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Beneficios para la salud
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Reducción de riesgos asociados con el exceso de grasa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-yellow-400 font-bold py-4 px-8 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaPhone className="text-xl" />
                LLAMAR AHORA
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaCalendarPlus className="text-xl" />
                RESERVAR AHORA
              </motion.button>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
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
            {faqs.map((faq, index) => (
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
              <div className="flex gap-2">
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
