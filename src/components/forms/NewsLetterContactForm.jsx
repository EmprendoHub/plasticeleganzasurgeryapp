"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import AnimatedText from "../hero/AnimatedText";

const NewsletterContactForm = ({ cookie }) => {
  const [formStatus, setFormStatus] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    honeypot: "",
  });
  const form = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (form.current.honeypot.value.length > 0) {
      setData({ email: "" });
      setError("Este mensaje si se mando no te preocupes bot.");
      return;
    }

    if (form.current.email_id.value === "") {
      setError("Por favor ingresa tu email");
      return;
    }
    setButtonStatus(true);
    try {
      const res = await fetch(`/api/newsletter`, {
        headers: {
          "Content-Type": "application/json",
          Cookie: cookie,
        },
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          honeypot: data.honeypot,
        }),
      });

      if (res.status === 400) {
        setError("Este correo electrónico ya esta inscrito");
        setButtonStatus(false);
      }
      if (res.status === 200) {
        setError("Quedaste registrado exitosamente");
        setFormStatus(true);
        setButtonStatus(false);
        setData({
          email: "",
          honeypot: "",
        });
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormChange = (event) => {
    const from_name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [from_name]: value });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {!formStatus ? (
        <motion.form
          ref={form}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          method="post"
          onSubmit={handleFormSubmit}
          className={`flex flex-col gap-y-2 md:w-full w-full mx-auto`}
        >
          <div className="flex flex-col gap-y-2">
            <AnimatedText
              text="Desbloquea tu mejor"
              text2="versión"
              className="text-white text-4xl font-headerFont md:text-3xl sm:text-2xl mb-6"
            />
            <input
              className="inputFields w-full py-5 px-2 text-gray-300 bg-black/10 font-bodyFont focus:outline-none border-b-2 border-yellow-600 placeholder:text-gray-500 text-2xl"
              type="email"
              value={data.email}
              name="email"
              onChange={handleFormChange}
              id="email_id"
              placeholder="ejemplo@gmail.com"
            />
            <input type="hidden" id="honeypot" onChange={handleFormChange} />
          </div>
          {/* Send Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {!buttonStatus ? (
              <Link
                href={`https://api.whatsapp.com/send?phone=5213511800950&text=${encodeURIComponent(
                  `¡HOLA ELEGANZA BY DR. FRANCISCO RODRIGUEZ! 👋\nME INTERESA SABER MÁS INFORMACIÓN SOBRE SUS SERVICIO.\nMi email es: ${
                    data.email || "No proporcionado"
                  }`
                )}`}
                target="_blank"
                className="block w-full mt-5"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 1 }}
                  transition={{ duration: 0.02 }}
                  className="cursor-pointer px-10 py-5 sm:px-5 bg-black items-start justify-center border border-yellow-600 hover:bg-yellow-600 duration-300 ease-linear rounded-full"
                >
                  <div className="self-stretch relative flex flex-row justify-between items-center">
                    <h4 className="m-0 text-white top-[14.5px] left-[25px] text-[18px] pr-5 font-medium font-barlow-condensed text-gray-white text-center inline-block ">
                      Subscribirse
                    </h4>
                    <Image
                      className="w-[30.5px] sm:w-[25.5px] h-full object-cover"
                      width={30}
                      height={30}
                      alt=""
                      src="/images/arrow-5.webp"
                    />
                  </div>
                </motion.div>
              </Link>
            ) : (
              <div className="loader flex self-center" />
            )}
          </motion.div>
        </motion.form>
      ) : (
        <div>
          <span className="text-yellow-500 font-headerFont text-base">
            El mensaje se envió exitosamente.
          </span>
        </div>
      )}
      {error && (
        <div className="mt-2">
          <span className="text-gray-200 font-headerFont text-base">
            *{error}
          </span>
        </div>
      )}
    </div>
  );
};

export default NewsletterContactForm;
