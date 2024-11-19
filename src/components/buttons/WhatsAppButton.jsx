"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const WhatsAppButton = () => {
  return (
    <Link
      className="fixed bottom-8 h-14 w-14 z-[20] cursor-pointer left-8"
      href="https://wa.link/98ox9t"
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
