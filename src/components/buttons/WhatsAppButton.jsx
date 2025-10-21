"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const WhatsAppButton = () => {
  return (
    <Link
      className="fixed bottom-8 h-14 w-14 z-[20] cursor-pointer left-8"
      href="https://api.whatsapp.com/send?phone=5213511800950&text=%C2%A1HOLA%20ELEGANZA%20BY%20DR.%20FRANCISCO%20RODRIGUEZ!%20%F0%9F%91%8B%0AME%20INTERESA%20SABER%20M%C3%81S%20INFORMACI%C3%93N%20SOBRE%20SUS%20SERVICIO."
      target="_blank"
    >
      <motion.img
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        src="/images/whatsapp.png"
        alt="WhatsApp"
      />
    </Link>
  );
};

export default WhatsAppButton;
