"use client";
import styles from "../header/style.module.scss";
import { useEffect, useState } from "react";
import Navi from "./Nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function MobileMenuComponent() {
  const [isActive, SetIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) SetIsActive(false);
  }, [pathname, isActive]);

  return (
    <>
      <div className={` hidden md:block`}>
        <div className={`${styles.header}`}>
          <div
            onClick={() => {
              SetIsActive(!isActive);
            }}
            className={styles.button}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Navi />}</AnimatePresence>
    </>
  );
}
