import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { BsTiktok } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function index() {
  return (
    <div className={styles.footer}>
      {/* Social Links */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="mt-4 gap-3 flex flex-row sm:flex-col items-center justify-between"
      >
        <div className="flex flex-row gap-3">
          <motion.a
            target="_blank"
            whileHover={{ y: -4 }}
            whileTap={{ y: 1 }}
            transition={{ duration: 0.09 }}
            className="[text-decoration:none] rounded bg-ghostwhite flex flex-col p-2 items-center justify-center border-[1px] border-solid border-gray-white"
            href="https://www.facebook.com/profile.php?id=61567370504889"
          >
            <FaFacebookF color="#ffffff" size={20} />
          </motion.a>
          <motion.a
            target="_blank"
            whileHover={{ y: -4 }}
            whileTap={{ y: 1 }}
            transition={{ duration: 0.09 }}
            className="[text-decoration:none] rounded bg-ghostwhite  flex flex-col p-2 items-center justify-center border-[1px] border-solid border-gray-white"
            href="https://www.tiktok.com/@eleganzaplasticsurgery"
          >
            <BsTiktok color="#ffffff" size={20} />
          </motion.a>
          <motion.a
            target="_blank"
            whileHover={{ y: -4 }}
            whileTap={{ y: 1 }}
            transition={{ duration: 0.09 }}
            className="[text-decoration:none] rounded bg-ghostwhite flex flex-col p-2 items-center justify-center border-[1px] border-solid border-gray-white"
            href="https://www.instagram.com/eleganza_plastic_surgery"
          >
            <FaInstagram color="#ffffff" size={20} />
          </motion.a>
          <motion.a
            target="_blank"
            whileHover={{ y: -4 }}
            whileTap={{ y: 1 }}
            transition={{ duration: 0.09 }}
            className="[text-decoration:none] rounded bg-ghostwhite flex flex-col p-2 items-center justify-center border-[1px] border-solid border-gray-white"
            href="https://www.youtube.com/@eleganzaplasticsurgery"
          >
            <FaYoutube color="#ffffff" size={20} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
