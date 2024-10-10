"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoMdCart } from "react-icons/io";
import { AiOutlineUser, AiOutlineUserDelete } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";
import { BsBookmarks } from "react-icons/bs";
import MobileMenuComponent from "./MobileMenuComponent";
import LogoComponent from "./LogoComponent";
import { useSession, signIn, signOut } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import FormatedPrice from "@/helpers/FormatedPrice";
import { useState, useEffect } from "react";
import PageTransition from "../transitions/PageTransition";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-gradient-to-r from-amber-200 to-amber-500 group-hover:w-full transition-[width] ease duration-300 absolute left-0 bottom-0 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const MainMenuComponent = () => {
  const dispatch = useDispatch();
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
    <header className="self-stretch flex flex-row px-1 box-border items-center justify-start sticky mx-auto ">
      <PageTransition />
      {/* Logo  */}
      <LogoComponent />
      {/* Navigation left */}
      <nav className="md:hidden m-0 flex-1  flex flex-row py-2.5 px-5 items-center justify-start gap-7 text-sm tracking-widest ">
        <CustomLink
          href="/servicios"
          title={`SERVICIOS`}
          className="text-gray-white no-underline font-bold"
        />
        <CustomLink
          href="/faq"
          title={`PREGUNTAS`}
          className="text-gray-white no-underline"
        />
        <CustomLink
          href="/testimonios"
          title={`TESTIMONIOS`}
          className="text-gray-white no-underline"
        />
        <CustomLink
          href="/acerca"
          title={`ACERCA`}
          className="text-gray-white no-underline"
        />
        <CustomLink
          href="/contacto"
          title={`CONTACTO`}
          className="text-gray-white no-underline"
        />
      </nav>

      <nav className="md:hidden m-0 flex-1  flex flex-row py-2.5 px-5 items-center  justify-end gap-7 font-poppins text-sm tracking-widest">
        {/* Cart Button */}
        <Link href={"/cart"}>
          <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px]  border-black hover:border-yellow-600 cursor-pointer">
            <IoMdCart className="text-xl" />
            <p className="text-sm font-semibold">
              <FormatedPrice amount={totalAmt ? totalAmt : 0} />
            </p>
            <span className="bg-white text-black rounded-full font-bold text-xs relative -right-2 -top-2 flex items-center justify-center w-4 h-5 shadow-xl ">
              {productData ? productData?.length : 0}
            </span>
          </div>
        </Link>
        {/*  Order Button */}
        {orderData?.order && orderData?.order.length > 0 && session && (
          <Link
            href={"/ordenes"}
            className="flex justify-center items-center gap-x-2"
          >
            <BsBookmarks />
            <p className="text-sm font-semibold">Ordenes</p>
          </Link>
        )}

        {/* User Image */}
        {isLoggedIn && session?.user?.image ? (
          <Image
            src={session?.user?.image}
            alt="avatar"
            width={35}
            height={35}
            className="rounded-full object-cover"
          />
        ) : (
          isLoggedIn && (
            <div className="h-10 w-10 bg-gold-gradient rounded-full object-cover flex justify-center items-center">
              <p className=" text-black text-2xl uppercase relative flex top-0 font-boldest">
                {session?.user?.email.substring(0, 1)}
              </p>
            </div>
          )
        )}

        {/** Logout Button */}
        {isLoggedIn && (
          <div
            onClick={() => signOut()}
            className="cursor-pointer flex justify-center items-center gap-x-1 "
          >
            <FiLogOut className="text-2xl flex" />
            <p className="text-sm font-semibold">Salir</p>
          </div>
        )}
      </nav>
    </header>
  );
};

export default MainMenuComponent;
