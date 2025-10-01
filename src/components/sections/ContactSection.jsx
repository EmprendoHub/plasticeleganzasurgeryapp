"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MainContactForm from "../forms/MainContactForm";

const ContactSection = () => {
  return (
    <section id="" className="py-5 max-w-[1450px]">
      <div className="grid grid-cols-2 md:grid-cols-1 gap-4 items-center">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl "
        >
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[650px] rounded-2xl overflow-hidden shadow-2xl" // 👈 give it an explicit height
          >
            <Image
              src="/sections/foto-contacto.png" // 👈 safer filename
              alt="Dr. Francisco and Team"
              fill
              className="object-cover"
              priority // optional: loads immediately
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Right Column - Images */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 flex flex-col items-start justify-start bg-white rounded-2xl p-8"
        >
          <h2 className="text-4xl font-bold font-headerFont">Contáctanos</h2>
          <p className="text-gray-700 text-left font-bodyFont">
            Platiquemos sobre tus objetivos estéticos y cómo podemos ayudarte a
            alcanzarlos.
          </p>
          <MainContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
