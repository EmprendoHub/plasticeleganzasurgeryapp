"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useRef } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const MainContactForm = ({ cookie }) => {
  const [formStatus, setFormStatus] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    from_name: "",
    email: "",
    message: "",
    tel: "",
    honeypot: "",
  });
  const form = useRef();
  const toastConfig = {
    position: toast.POSITION.BOTTOM_CENTER,
    className: "foo-bar",
    theme: "dark",
    transition: Bounce,
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (form.current.honeypot.value.length > 0) {
      setData({ from_name: "", email: "", message: "", tel: "" });
      toast.error(`Este mensaje si se mando no te preocupes bot.`);
      return;
    }

    if (form.current.from_name_id.value === "") {
      toast.warning(`Por favor ingresa tu nombre`, toastConfig);
      return;
    } else if (form.current.email_id.value === "") {
      toast.warning(`Por favor ingresa tu email`, toastConfig);
      return;
    } else if (form.current.tel_id.value === "") {
      toast.warning(`Por favor ingresa tu Teléfono`, toastConfig);
      return;
    } else if (form.current.message_id.value === "") {
      toast.warning(`Por favor ingresa tu mensaje`, toastConfig);
      return;
    }
    setButtonStatus(true);
    try {
      const res = await fetch(`/api/email`, {
        headers: {
          "Content-Type": "application/json",
          Cookie: cookie,
        },
        method: "POST",
        body: JSON.stringify({
          name: data.from_name,
          phone: data.tel,
          email: data.email,
          message: data.message,
          honeypot: data.honeypot,
        }),
      });

      if (res.status === 400) {
        toast.warning("Este correo electrónico y/o el teléfono ya esta en uso");
        setButtonStatus(false);

        setError("Este correo electrónico y/o el teléfono ya esta en uso");
      }
      if (res.status === 200) {
        toast.success("Su mensaje se envió exitosamente");
        setFormStatus(true);
        setButtonStatus(false);
        setData({
          from_name: "",
          email: "",
          message: "",
          tel: "",
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
    console.log(from_name, value);
    setData({ ...data, [from_name]: value });
  };

  return (
    <>
      {!formStatus ? (
        <motion.form
          ref={form}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          method="post"
          onSubmit={handleFormSubmit}
          className={`flex flex-col gap-y-2 w-full mx-auto`}
        >
          <div className="flex flex-row gap-x-2">
            <input
              className="inputFields w-full py-5 px-2 bg-gray-100 text-gray-900 font-bodyFont focus:outline-none"
              type="text"
              value={data.from_name}
              name="from_name"
              onChange={handleFormChange}
              id="from_name_id"
              placeholder="Nombre"
            />
            <input
              className="inputFields w-full py-5 px-2  bg-gray-100 text-gray-900 font-bodyFont focus:outline-none"
              type="email"
              value={data.email}
              name="email"
              onChange={handleFormChange}
              id="email_id"
              placeholder="Email"
            />
          </div>
          <input
            className="inputFields w-full py-5 px-2  bg-gray-100 text-gray-900 font-bodyFont focus:outline-none"
            type="tel"
            value={data.tel}
            name="tel"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            onChange={handleFormChange}
            id="tel_id"
            placeholder="555 555 5555"
          />
          <input type="hidden" id="honeypot" onChange={handleFormChange} />
          <textarea
            className="py-5 px-4 bg-opacity-90 bg-gray-100 text-gray-900 font-bodyFont focus:outline-none"
            name="message"
            value={data.message}
            onChange={handleFormChange}
            id="message_id"
            cols="30"
            rows="5"
            placeholder="Tu mensaje aqui..."
          />
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {!buttonStatus ? (
              <motion.button
                whileHover={{ y: -4 }}
                whileTap={{ y: 1 }}
                transition={{ duration: 0.02 }}
                className="mt-5 cursor-pointer [border:none] px-10 py-5  sm:px-5 bg-black  items-start justify-center hover:bg-yellow-600 duration-300 ease-linear rounded-full"
                type="submit"
              >
                <div className="self-stretch relative flex flex-row justify-between items-center">
                  <h4 className="m-0 text-white top-[14.5px] left-[25px] text-[18px] pr-5 font-medium font-barlow-condensed text-gray-white text-center inline-block ">
                    Enviar Mensaje
                  </h4>
                  <Image
                    className="w-[30.5px] sm:w-[25.5px] h-full object-cover"
                    width={30}
                    height={30}
                    alt=""
                    src="/images/arrow-5.webp"
                  />
                </div>
              </motion.button>
            ) : (
              <div className="loader flex self-center" />
            )}
          </motion.div>
        </motion.form>
      ) : (
        <div>
          <span className="text-emerald-600">
            El mensaje se envió exitosamente.
          </span>
        </div>
      )}
      {error && (
        <div className="mt-2">
          <span className="text-red-500">{error}</span>
        </div>
      )}

      <ToastContainer autoClose={1000} />
    </>
  );
};

export default MainContactForm;
