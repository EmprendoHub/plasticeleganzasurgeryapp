"use client";
import React, { useEffect } from "react";
import ContainerComponent from "@/components/containers/ContainerComponent";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { IoLogoGoogle } from "react-icons/io";
import LogoComponent from "@/components/header/LogoComponent";
import PageTransition from "@/components/transitions/PageTransition";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/cart");
    }
  }, [session, router]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toastConfig = {
    position: toast.POSITION.TOP_CENTER,
    className: "foo-bar",
    theme: "dark",
    autoClose: 500,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      toast.error("Por favor ingresa tu email!", toastConfig);
      return;
    }
    if (password === "") {
      toast.error("Por favor ingresa tu contraseña!");
      return;
    }

    if (password.length < 6) {
      toast.error("La contraseña debe contener 6 caracteres como mínimo");
      return;
    }
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error == null) {
        router.push("/servicios");
      } else {
        toast.error("Se produjo un error al iniciar sesión");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PageTransition />
      <ContainerComponent>
        <div className="flex flex-col bg-black p-5 justify-center items-center h-[100%] w-[30%] md:w-[40%] sm:w-[70%] mx-auto my-20">
          <h2 className="py-5 text-white">Iniciar Session</h2>
          <div className="logo-class w-fit mb-5">
            <LogoComponent />
          </div>
          <button
            className="w-full text-black bg-slate-300 duration-500 ease-in-out hover:text-white hover:bg-stone-900 mb-4 flex flex-row gap-4 items-center py-4 justify-center"
            onClick={() => {
              signIn("google");
            }}
          >
            <IoLogoGoogle />
            Ingresa con Google
          </button>
          <div className="text-center text-slate-200 my-4 ">- O -</div>
          <form
            className="flex flex-col w-full justify-center items-center text-center gap-y-4 "
            onSubmit={handleSubmit}
          >
            <input
              className="text-center py-2 w-full"
              type="email"
              placeholder="email..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="text-center py-2 w-full"
              type="password"
              placeholder="contraseña..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="text-white bg-gold-gradient w-[150px] p-2 rounded-sm mt-5">
              Entrar
            </button>
            <Link
              className="text-xs text-center mt-1 text-white"
              href={`/registro`}
            >
              Aun no tienes una cuenta? <br /> Registro aquí.
            </Link>
          </form>
        </div>
        <ToastContainer autoClose={1000} />
      </ContainerComponent>
    </>
  );
};

export default Login;
