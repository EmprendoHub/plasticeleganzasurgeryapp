"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ContainerComponent from "@/components/containers/ContainerComponent";
import LogoComponent from "@/components/header/LogoComponent";
import { IoLogoGoogle } from "react-icons/io";
import Link from "next/link";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      toast.error("Por favor ingresa un email!");
      return;
    }
    if (password === "") {
      toast.error("Por favor ingresa una contraseña!");
      return;
    }

    if (password.length < 6) {
      toast.error("La contraseña debe contener 6 caracteres como mínimo");
      return;
    }

    try {
      const res = await fetch(`/api/register`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username, email, password }),
      });

      if (res.ok) {
        toast.success("Successfully registered the user");
        setTimeout(() => {
          signIn();
        }, 1500);
        return;
      } else {
        toast.error("Se produjo un error al registrarse");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerComponent>
      <div
        className={`wrapper flex flex-col bg-black p-5 justify-center items-center h-[100%] w-[30%] md:w-[40%] sm:w-[70%] mx-auto my-20`}
      >
        <h2 className="my-4 text-white ">Registro Nuevo</h2>
        <div className="logo-class w-fit mb-5">
          <LogoComponent />
        </div>
        <button
          className="w-full text-black bg-slate-300 duration-500 ease-in-out hover:text-white hover:bg-stone-900 mb-4 flex flex-row gap-4  items-center py-4 justify-center"
          onClick={() => {
            signIn("google");
          }}
        >
          <IoLogoGoogle />
          Ingresa con Google
        </button>
        <div className="text-center text-slate-200 my-4 ">- O -</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-full">
          <input
            className="text-center py-2"
            type="text"
            placeholder="nombre..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="text-center py-2"
            type="email"
            placeholder="email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="text-center py-2"
            type="password"
            placeholder="contraseña..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className={`bg-gold-gradient text-white py-4 text-base hover:bg-yellow-600 duration-700 rounded-sm`}
          >
            Registrar
          </button>
          <button
            className={`text-white text-xs text-center mt-1`}
            onClick={() => signIn()}
          >
            Ya tienes una cuenta? <br /> Inicia Session.
          </button>
        </form>
      </div>

      <ToastContainer autoClose={1000} />
    </ContainerComponent>
  );
};

export default Register;
