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
import { BsCheckCircle, BsClock, BsCalendar3, BsShield, BsHeart, BsPeople } from "react-icons/bs";
import { FaUserMd, FaHeart, FaWhatsapp, FaPhone, FaCalendarPlus, FaAward, FaDollarSign, FaHandHeart, FaStar } from "react-icons/fa";
import { MdLocalOffer, MdHealthAndSafety, MdOutlineHealthAndSafety, MdOutlineSecurity } from "react-icons/md";
import { HiOutlineSparkles, HiOutlineHeart } from "react-icons/hi";
import { RiCustomerService2Fill, RiStarFill } from "react-icons/ri";
import { AiOutlineCheckCircle, AiOutlineSafety } from "react-icons/ai";
import { TbMedicalCross } from "react-icons/tb";
import classes from "@/components/products/catalog.module.css";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FormatedPrice from "@/helpers/FormatedPrice";
import { calculatePercentage } from "@/helpers";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ProductDetails = ({ ctx, product }) => {
  const router = useRouter();
  const imageRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);

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
            <h1 className="md:text-4xl text-6xl font-bold text-white mb-4 font-headerFont">
              {product?.title}
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              {starRating(product?.rating)}
              <span className="text-white text-lg ml-2">
                {product?.rating} / 5
              </span>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Procedimiento profesional realizado por especialistas certificados
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-1 grid-cols-2 gap-12">
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
                    <FaUserMd className="text-xl" />
                    Consulta Gratuita
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir este procedimiento?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <BsCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Resultados duraderos
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Procedimiento con técnicas avanzadas y resultados
                      comprobados
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaUserMd className="text-blue-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Especialistas certificados
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Equipo médico con años de experiencia y certificaciones
                      internacionales
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BsClock className="text-purple-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Recuperación rápida
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Técnicas mínimamente invasivas para una recuperación más
                      cómoda
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaHeart className="text-red-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Atención personalizada
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Seguimiento completo antes, durante y después del
                      procedimiento
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Detalles del Procedimiento
              </h3>
              <div className="prose max-w-none text-gray-600">
                {product?.description ? (
                  <p className="leading-relaxed">{product?.description}</p>
                ) : (
                  <p className="leading-relaxed">
                    Procedimiento realizado con las técnicas más avanzadas y
                    equipos de última generación. Nuestro equipo de
                    especialistas te acompañará durante todo el proceso.
                  </p>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">SKU:</span>
                    <span className="text-gray-600 ml-2">{product?._id}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">
                      Categoría:
                    </span>
                    <span className="text-gray-600 ml-2">
                      {product?.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Information Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Información Importante
            </h3>
            <div className="grid md:grid-cols-1 grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BsCalendar3 className="text-2xl text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Consulta Previa
                </h4>
                <p className="text-gray-600 text-sm">
                  Evaluación completa y plan personalizado antes del
                  procedimiento
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUserMd className="text-2xl text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Cirujano Especialista
                </h4>
                <p className="text-gray-600 text-sm">
                  Procedimiento realizado por cirujanos plásticos certificados
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BsCheckCircle className="text-2xl text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Seguimiento
                </h4>
                <p className="text-gray-600 text-sm">
                  Acompañamiento completo durante todo el proceso de
                  recuperación
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
