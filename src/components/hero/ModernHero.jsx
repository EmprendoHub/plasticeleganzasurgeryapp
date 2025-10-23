"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ModernHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    procedure: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const procedures = [
    "Abdominoplastia",
    "Liposucción",
    "Aumento de Senos",
    "Levantamiento de Senos",
    "Rinoplastia",
    "Mommy Makeover",
    "Otra Consulta",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Here you would integrate with your API
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        procedure: "",
        message: "",
      });

      // Reset the success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="reservar"
      className="relative max-w-[1450px] w-full h-auto rounded-xl flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden mb-10"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/covers/portada eleganza web.png"
          alt="Dr. Francisco Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center z-10 mx-auto  lg:px-8 text-center p-5 px-8 sm:px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 flex items-end justify-between flex-row md:flex-col gap-10"
        >
          {/* Left Title */}
          <div className="w-full ">
            {/* Main Heading */}
            <h1 className="sm:text-4xl md:text-5xl text-7xl font-bold text-white leading-0 text-start font-headerFont">
              <span className="block">Centro Líder</span>
              <span className="block text-yellow-500">
                {" "}
                de Cirugía Plástica en el area Zamora
              </span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base text-start mt-5 text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Cuerpos hechos a mano por expertos exclusivos en cirugía plástica.{" "}
            </motion.p>
          </div>

          {/* Contact Form */}
          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full bg-white/60 text-gray-900 rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-4xl font-bodyFont mb-6 text-left text-gray-900">
              Consulta Virtual Gratuita
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/0 px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 border-b-2 border-gray-300 placeholder:text-gray-500"
                  placeholder="Agrega tu nombre completo"
                />
              </div>

              {/* Phone & Email */}
              <div className="flex flex-row md:flex-col justify-start gap-4">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/0 px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 border-b-2 border-gray-300 placeholder:text-gray-500"
                  placeholder="Teléfono"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/0 px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 border-b-2 border-gray-300 placeholder:text-gray-500"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Procedure */}
              <div>
                <select
                  id="procedure"
                  name="procedure"
                  value={formData.procedure}
                  onChange={handleInputChange}
                  className="w-full bg-white/0 px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 border-b-2 border-gray-300 placeholder:text-gray-500"
                >
                  <option value="">Selecciona un procedimiento</option>
                  {procedures.map((procedure) => (
                    <option key={procedure} value={procedure}>
                      {procedure}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 ${
                  isSubmitted
                    ? "bg-green-600 hover:bg-green-600"
                    : "bg-yellow-600 hover:bg-yellow-500"
                } disabled:opacity-50 disabled:cursor-not-allowed text-white`}
              >
                {isSubmitting
                  ? "Enviando..."
                  : isSubmitted
                  ? "✓ Enviado exitosamente"
                  : "Enviar Formulario"}
              </button>

              <p className="text-sm text-gray-700 text-center">
                Privacidad y suscripción: Al suscribirse, acepta recibir
                mensajes recurrentes de Eleganza Plastic Surgery. Todas las
                solicitudes de suscripción incluyen los datos de suscripción y
                el consentimiento del remitente de los mensajes de texto; esta
                información no se compartirá con terceros.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernHero;
