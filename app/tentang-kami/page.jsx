"use client";
import { motion } from "framer-motion";
import "./about.css"; // pastikan file CSS diimport di sini

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="paper-bg">
        <motion.h1
          className="about-title"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Tentang Kami
        </motion.h1>

        <motion.p
          className="about-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        >
          <span className="brand">Holycity Printing</span> adalah digital printing di Bandung yang
          berfokus menghadirkan hasil cetak berkualitas dengan 
          <span className="highlight"> kecepatan </span>, 
          <span className="highlight"> harga kompetitif </span>, serta 
          <span className="highlight"> pelayanan ramah </span>.{" "}
          Kami percaya bahwa setiap karya visual memiliki kekuatan untuk
          menyampaikan identitas dan karakter brand secara kuat dan berkesan.{"\n\n"}
          Dari DTF Printing, Custom Jersey, Goodie Bag, souvenir, hingga produk promosi lainnya — 
          kami berkomitmen menjadi 
          <span className="highlight"> mitra cetak terpercaya </span> yang mampu memahami kebutuhan
          dan gaya visual setiap klien.{"\n\n"}
          <span className="brand">Holycity Printing</span> bukan sekadar tempat mencetak, tetapi 
          <span className="highlight"> partner kreatif </span> yang membantu Anda mewujudkan visi,
          ide, dan identitas brand melalui hasil cetak yang presisi dan penuh karakter.{"\n\n"}
          Dengan tagline 
          <span className="quote">“Express Your Color”</span>, kami menghadirkan setiap hasil cetak
          sebagai media ekspresi yang berani, autentik, dan memperkuat keunikan brand Anda.
        </motion.p>
      </div>
    </section>
  );
}