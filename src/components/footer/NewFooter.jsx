"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import mainlogoimage from "@/images/Eleganza_Plastic_Surgery_Logo_wide_small.png";
import LogoComponent from "../header/LogoComponent";
import NewsletterContactForm from "../forms/NewsLetterContactForm";
import Image from "next/image";

const NewFooter = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <section className="flex mx-auto self-stretch  bg-black py-10 px-5 box-border items-center justify-center [text-decoration:none]">
      <div className="w-full max-w-[1450px] justify-between py-[60px] items-start  md:w-auto md:gap-[0px]">
        <footer className="">
          <div className=" flex flex-row md:flex-col justify-between gap-x-12 items-start text-left text-5xl text-whitesmoke-300 font-body-regular-400  md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
            {/* Site Column */}
            <div className="w-full flex flex-col">
              {/* Company Info Column */}
              <div className="flex flex-col pr-5 items-start justify-start gap-[20px] text-base mb-10">
                <Image
                  width={350}
                  height={90}
                  priority={true}
                  className=""
                  alt="Eleganza Plastic Surgery"
                  src={mainlogoimage}
                />
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="m-0 font-headerFont relative text-4xl leading-[45px] font-semibold font-inherit text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500 "
                >
                  La mejor experiencia en cirugía plástica de Zamora
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
                        <p className="m-0">{`Calz. Zamora-Jacona 716 2ndo piso`}</p>
                        <p className="m-0">{`Jacona de Plancarte, Michoacan Fracc. El Ensueño, CP 59813`}</p>
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
                  className="mt-4 gap-6 flex flex-row sm:flex-col items-center justify-between"
                >
                  <div className="flex flex-row gap-6">
                    <motion.a
                      target="_blank"
                      whileHover={{ y: -4 }}
                      whileTap={{ y: 1 }}
                      transition={{ duration: 0.09 }}
                      className="[text-decoration:none] rounded bg-ghostwhite flex flex-col p-2 items-center justify-center border-[1px] border-solid border-gray-white"
                      href="https://www.facebook.com/profile.php?id=61567370504889"
                    >
                      <FaFacebookF color="#ffffff" size={20} />
                    </motion.a>
                    <motion.a
                      target="_blank"
                      whileHover={{ y: -4 }}
                      whileTap={{ y: 1 }}
                      transition={{ duration: 0.09 }}
                      className="[text-decoration:none] rounded bg-ghostwhite  flex flex-col p-2 items-center justify-center border-[1px] border-solid border-gray-white"
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
            </div>
            {/* Newsletter Column */}
            <NewsletterContactForm />
          </div>
          {/* Legal Column */}
          <div className="w-full flex md:flex-col justify-between mt-10">
            <motion.ul
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-sm gap-x-4 flex items-center text-start pl-0 "
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
            <div className="text-sm text-white">
              © {new Date().getFullYear()}. Todos los derechos reservados.
              Cirugía Plástica Eleganza.
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default NewFooter;
