"use client";
import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      className="fixed bottom-8 h-14 w-14 z-[20] cursor-pointer left-8 "
      href="https://wa.link/98ox9t"
      target="_blank"
    >
      <motion.img
        whileHover={{ scale: 1.2 }}
        src="/images/DrFranciscoRodriguexWhatsApp.webp"
        alt="WhatsApp"
      />
    </Link>
  );
};

export default WhatsAppButton;
