"use client";
import styles from "@/components/header/mobilenav/style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "@/components/header/anim";
import CustomLink from "@/components/header/mobilenav/Link";
import Link from "next/link";
import Curve from "@/components/header/mobilenav/Curve";
import Footer from "@/components/header/mobilenav/Footer";
import FormatedPrice from "@/helpers/FormatedPrice";
import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useEffect } from "react";

const navItems = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Acerca",
    href: "/acerca",
  },
  {
    title: "Preguntas",
    href: "/faq",
  },
  {
    title: "Contacto",
    href: "/contacto",
  },
  {
    title: "Testimonios",
    href: "/testimonios",
  },
  {
    title: "Servicios",
    href: "/servicios",
  },
  {
    title: "Galería",
    href: "/galeria",
  },
];

export default function Navi({ SetIsActive }) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const { data: session } = useSession();
  const isLoggedIn = Boolean(session?.user);

  const { productData, orderData } = useSelector((state) => state.shopping);

  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    let amt = 0;
    productData.map((item) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmt(amt);
  }, [productData]);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={`${styles.menu} bg-transparent `}
    >
      {/* Cart Button */}
      <Link href={"/cart"} className=" absolute left-5 top-10">
        <div className="bg-black mt-5 hover:bg-stone-950 rounded-full text-slate-100 hover:text-white flex items-center justify-start gap-x-1 px-3 py-1.5 border-[1px]  border-black hover:border-yellow-600 cursor-pointer duration-500 ease-in-out">
          <IoMdCart className="text-lg" />
          <p className="text-base font-semibold">
            <FormatedPrice amount={totalAmt ? totalAmt : 0} />
          </p>

          <span className="bg-white text-black text-center rounded-full font-extrabold text-sm relative -right-2 -top-2 flex items-center justify-center w-5 h-5 shadow-xl ">
            {productData ? productData?.length : 0}
          </span>
        </div>
      </Link>
      <div
        className={`${styles.body} pl-16 pr-10 pb-5 pt-20 bg-black-gradient`}
      >
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={" gap-y-4 "}
        >
          <div className={`${styles.header}`}></div>
          <div className="text-xl font-headerFont pt-10 flex flex-col gap-y-6">
            {navItems.map((data, index) => {
              return (
                <CustomLink
                  key={index}
                  data={{ ...data, index }}
                  SetIsActive={SetIsActive}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                ></CustomLink>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
