"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import { useRouter } from "next/navigation";
import { getOneLocalProduct } from "../../app/_actions";

const FooterComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <section className="self-stretch max-w-full bg-black py-[81px] box-border items-center justify-start [text-decoration:none]">
      <div className="w-full  px-40 md:px-34 sm:px-10 justify-between py-[60px] items-start  md:w-auto md:gap-[0px]">
        <footer className="">
          <div className=" flex flex-row justify-between gap-x-12 flex-wrap items-start text-left text-5xl text-whitesmoke-300 font-body-regular-400 md:flex-1 md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
            {/* Services Column */}
            <div className=" flex flex-col w-1/2 lg:w-full mb-10">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className=" m-0 mb-4 font-headerFont relative text-3xl font-semibold font-inherit text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500 "
              >
                Servicios
              </motion.p>
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="text-base list-none text-start pl-0 "
              >
                <li className="mb-4">
                  <p className="text-white  duration-200 [decoration-none] left-0 no-underline ">
                    Abdominoplastía
                  </p>

                  <span className=" text-white text-xs ">
                    La abdominoplastia es mucho más que un procedimiento
                    estético; es una transformación que le devuelve la seguridad
                    y autoestima que merece. Durante la cirugía, se elimina el
                    exceso de piel y grasa en el área abdominal, y se redefine
                    su figura, logrando un abdomen más firme. Agenda tu cita de
                    valoración mandando WhatsApp al +52 (351) 120 3448. Aparta
                    tu cirugía agregando al carrito
                  </span>
                  {/* add to cart button */}
                  <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gold-gradient flex flex-row items-center justify-between px-4 py-2 text-sm gap-x-4 tracking-wide rounded-full text-black hover:bg-darkText  duration-500 mt-5 mb-10"
                    onClick={async () => {
                      const product = await getOneLocalProduct(
                        "653310c18d22988a4a58dff4"
                      );

                      dispatch(addToCart(product)) && router.push("/cart");
                    }}
                  >
                    Agregar a carrito
                    <span className="text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-black duration-200  rounded-full py-2">
                      <IoMdCart />
                    </span>
                  </motion.button>
                </li>
                <li className="mb-">
                  <p className="text-white  duration-200 [decoration-none] left-0 no-underline ">
                    Implantes Mamarios
                  </p>

                  <span className=" text-white text-xs ">
                    La abdominoplastia es mucho más que un procedimiento
                    estético; es una transformación que le devuelve la seguridad
                    y autoestima que merece. Durante la cirugía, se elimina el
                    exceso de piel y grasa en el área abdominal, y se redefine
                    su figura, logrando un abdomen más firme. Agenda tu cita de
                    valoración mandando WhatsApp al +52 (351) 120 3448. Aparta
                    tu cirugía agregando al carrito
                  </span>
                  {/* add to cart button */}
                  <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gold-gradient flex flex-row items-center justify-between px-4 py-2 text-sm gap-x-4 tracking-wide rounded-full text-black hover:bg-darkText  duration-500 mt-5 mb-10"
                    onClick={async () => {
                      const product = await getOneLocalProduct(
                        "65330d7f8151e96c6cf058d8"
                      );
                      dispatch(addToCart(product)) && router.push("/cart");
                    }}
                  >
                    Agregar a carrito
                    <span className="text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-black duration-200  rounded-full py-2">
                      <IoMdCart />
                    </span>
                  </motion.button>
                </li>
                <li className="mb-4">
                  <p className="text-white  duration-200 [decoration-none] left-0 no-underline ">
                    Liposucción
                  </p>

                  <span className=" text-white text-xs leading-none">
                    Si ha estado buscando una manera de realzar su figura de
                    forma natural, la liposucción puede ser una opción a
                    considerar. Es un procedimiento que ayuda a redefinir esas
                    áreas que han sido difíciles de moldear, brindándole un
                    contorno más equilibrado y armonioso. Es una manera de
                    sentirse más a gusto con su cuerpo, potenciando su confianza
                    y bienestar. Agenda tu cita de valoración mandando WhatsApp
                    al +52 (351) 120 3448. Aparta tu cirugía agregando al
                    carrito
                  </span>
                  {/* add to cart button */}
                  <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gold-gradient flex flex-row items-center justify-between px-4 py-2 text-sm gap-x-4 tracking-wide rounded-full text-black hover:bg-darkText  duration-500 mt-5 mb-10"
                    onClick={async () => {
                      const product = await getOneLocalProduct(
                        "65330d7f8151e96c6cf058d6"
                      );
                      dispatch(addToCart(product)) && router.push("/cart");
                    }}
                  >
                    Agregar a carrito
                    <span className="text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-black duration-200  rounded-full py-2">
                      <IoMdCart />
                    </span>
                  </motion.button>
                </li>
                <li className="mb-4">
                  <p className="text-white  duration-200 [decoration-none] left-0 no-underline ">
                    Mommy Makeover
                  </p>

                  <span className=" text-white text-xs ">
                    La abdominoplastia es mucho más que un procedimiento
                    estético; es una transformación que le devuelve la seguridad
                    y autoestima que merece. Durante la cirugía, se elimina el
                    exceso de piel y grasa en el área abdominal, y se redefine
                    su figura, logrando un abdomen más firme. Agenda tu cita de
                    valoración mandando WhatsApp al +52 (351) 120 3448. Aparta
                    tu cirugía agregando al carrito
                  </span>
                  {/* add to cart button */}
                  <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gold-gradient flex flex-row items-center justify-between px-4 py-2 text-sm gap-x-4 tracking-wide rounded-full text-black hover:bg-darkText  duration-500 mt-5 mb-10"
                    onClick={async () => {
                      const product = await getOneLocalProduct(
                        "65330d7f8151e96c6cf058dc"
                      );
                      dispatch(addToCart(product)) && router.push("/cart");
                    }}
                  >
                    Agregar a carrito
                    <span className="text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-black duration-200  rounded-full py-2">
                      <IoMdCart />
                    </span>
                  </motion.button>
                </li>
              </motion.ul>
            </div>
            {/* Site Column */}
            <div className=" flex flex-col">
              {/* Contact Column */}
              <div className="flex flex-col pr-5 items-start justify-start gap-[20px] text-base mb-10">
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="m-0 font-headerFont relative text-3xl leading-[32px] font-semibold font-inherit text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500 "
                >
                  Contáctenos
                </motion.p>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full flex flex-col items-start justify-start gap-[13px] text-white"
                >
                  <motion.a
                    whileHover={{ y: -4 }}
                    whileTap={{ y: 1 }}
                    transition={{ duration: 0.7 }}
                    className="[text-decoration:none] relative leading-[24px] text-[inherit]"
                    href="teL:+523511091423"
                  >
                    Llama al : +52 (351) 120 3448
                  </motion.a>
                  <Link
                    href={"https://maps.app.goo.gl/DB5yDk2vo8LgSE158"}
                    target="_blank"
                  >
                    <div className="relative leading-[24px] flex items-end ">
                      <span className="[line-break:anywhere] w-full">
                        <p className="m-0">{`Calz. Zamora-Jacona 716, `}</p>
                        <p className="m-0">{`2ndo piso, Jacona de Plancarte, Mich.`}</p>
                        <p className="m-0">
                          Fraccionamiento El Ensueño, CP 59813
                        </p>
                      </span>
                    </div>
                  </Link>

                  <motion.a
                    whileHover={{ y: -4 }}
                    whileTap={{ y: 1 }}
                    transition={{ duration: 0.8 }}
                    className="[text-decoration:none] relative text-[inherit]"
                    href="mailto:plasticsurgeryzamora@gmail.com"
                    target="_blank"
                  >
                    plasticsurgeryzamora@gmail.com
                  </motion.a>
                </motion.div>
                {/* Social Links */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9 }}
                  className="mt-4 gap-3 flex flex-row sm:flex-col items-center justify-between"
                >
                  <div className="flex flex-row gap-3">
                    <motion.a
                      target="_blank"
                      whileHover={{ y: -4 }}
                      whileTap={{ y: 1 }}
                      transition={{ duration: 0.09 }}
                      className="[text-decoration:none] rounded bg-ghostwhite flex flex-col p-2 items-center justify-center border-[1px] border-solid border-gray-white"
                      href="https://m.facebook.com/drfranciscorodriguezplasticsurgeon"
                    >
                      <FaFacebookF color="#ffffff" size={20} />
                    </motion.a>
                    <motion.a
                      target="_blank"
                      whileHover={{ y: -4 }}
                      whileTap={{ y: 1 }}
                      transition={{ duration: 0.09 }}
                      className="[text-decoration:none] rounded bg-ghostwhite flex flex-col p-2 items-center justify-center border-[1px] border-solid border-gray-white"
                      href="https://www.linkedin.com/in/drfrancisco-rodriguez-336771297/"
                    >
                      <FaLinkedin color="#ffffff" size={20} />
                    </motion.a>
                    <motion.a
                      target="_blank"
                      whileHover={{ y: -4 }}
                      whileTap={{ y: 1 }}
                      transition={{ duration: 0.09 }}
                      className="[text-decoration:none] rounded bg-ghostwhite flex flex-col p-2 items-center justify-center border-[1px] border-solid border-gray-white"
                      href="https://www.instagram.com/eleganza_plasticsurgery_center?igsh=azRtbjhlMTg2cHp3&utm_source=qr"
                    >
                      <FaInstagram color="#ffffff" size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="m-0 mb-4 relative font-headerFont text-3xl leading-[32px] font-semibold font-inherit text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500  "
              >
                Sitio
              </motion.p>
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="text-base list-none text-start pl-0 "
              >
                <motion.li
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 1 }}
                  transition={{ duration: 0.09 }}
                  className="mb-4"
                >
                  <Link
                    href={"/"}
                    className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline "
                  >
                    Inicio
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 1 }}
                  transition={{ duration: 0.09 }}
                  className="mb-4"
                >
                  <Link
                    href={"/acerca"}
                    className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline "
                  >
                    Acerca
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 1 }}
                  transition={{ duration: 0.09 }}
                  className="mb-4"
                >
                  <Link
                    href={"/faq"}
                    className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline "
                  >
                    Preguntas
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 1 }}
                  transition={{ duration: 0.09 }}
                  className="mb-4"
                >
                  <Link
                    href={"/testimonios"}
                    className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline "
                  >
                    Testimonios
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 1 }}
                  transition={{ duration: 0.09 }}
                  className="mb-4"
                >
                  <Link
                    href={"/servicios"}
                    className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline "
                  >
                    Procedimientos
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 1 }}
                  transition={{ duration: 0.09 }}
                  className="mb-4"
                >
                  <Link
                    href={"/contacto"}
                    className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline "
                  >
                    Contacto
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 1 }}
                  transition={{ duration: 0.09 }}
                  className="mb-4"
                >
                  <Link
                    href={"/servicios"}
                    className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline "
                  >
                    Reserva tu Cirugía
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 1 }}
                  transition={{ duration: 0.09 }}
                  className="mb-4"
                >
                  <Link
                    href={"/galeria"}
                    className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline "
                  >
                    Galería de Imágenes
                  </Link>
                </motion.li>
              </motion.ul>
              {/* Legal Column */}
              <div>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="m-0 relative text-3xl font-headerFont mb-4 leading-[32px] font-semibold font-inherit text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500  mt-5"
                >
                  Polizas
                </motion.p>
                <motion.ul
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="text-base gap-y-4 list-none text-start pl-0 "
                >
                  <motion.li
                    whileHover={{ y: -4 }}
                    whileTap={{ y: 1 }}
                    transition={{ duration: 0.09 }}
                    className="mb-4"
                  >
                    <Link
                      href={"/terminos"}
                      className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline "
                    >
                      Términos de Uso
                    </Link>
                  </motion.li>
                  <motion.li
                    whileHover={{ y: -4 }}
                    whileTap={{ y: 1 }}
                    transition={{ duration: 0.09 }}
                    className="mb-4"
                  >
                    <Link
                      href={"/politica"}
                      className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline "
                    >
                      Política de Privacidad
                    </Link>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FooterComponent;
