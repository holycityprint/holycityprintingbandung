"use client";
import { motion } from "framer-motion";

export default function PrintingOrnaments() {
  return (
    <>
      {/* Printer kiri – masuk sederhana dari kiri */}
      <motion.img
        className="printer-ornament left"
        src="/left-printer.png"
        alt="Mesin printing kiri"
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
      />

      {/* Printer kanan – masuk sederhana dari kanan */}
      <motion.img
        className="printer-ornament right"
        src="/right-printer.png"
        alt="Mesin printing kanan"
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.4,
          delay: 0.2,
          ease: "easeOut",
        }}
      />
    </>
  );
}