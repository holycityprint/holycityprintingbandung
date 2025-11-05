"use client";
import { motion } from "framer-motion";
import PrintingOrnaments from "./components/PrintingOrnaments"; // <— ditambahkan

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero textured">
        {/* Ornamen mesin kiri dan kanan */}
        <PrintingOrnaments />

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="hero-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Selamat Datang di
          </motion.span>
          <br />
          <motion.span
            className="spray-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: [1, 0.4, 1, 0.6, 1],
              scale: [1, 1.02, 1, 1.01, 1],
              textShadow: [
                "0 0 10px #b8ff00",
                "0 0 30px #b8ff00",
                "0 0 50px #b8ff00",
                "0 0 20px #b8ff00",
                "0 0 40px #b8ff00",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut",
            }}
          >
            HOLYCITY PRINTING
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Solusi lengkap untuk kebutuhan promosi Anda — dari DTF printing, 
          jersey custom, hingga souvenir perusahaan.
        </motion.p>

        <motion.a
          href="/layanan"
          className="btn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            ease: "easeOut",
          }}
        >
          Jelajahi Layanan Kami
        </motion.a>
      </section>

      {/* Divider */}
      <div className="tear-divider">
        <img src="/torn-edge.png" alt="Efek robekan kertas" />
      </div>

      {/* ===== SECTION PRODUK ===== */}
      <section className="section-dark textured">
        <h2>Produk Unggulan Kami</h2>

        <div className="projects-grid">
          {/* === PRODUCT 1 === */}
          <motion.div
            className="product-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="image-wrapper">
              <motion.img
                src="/kaos-base.png"
                alt="Kaos Printing DTF"
                className="kaos-img"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <h3>Printing DTF</h3>
            <div className="price-wrapper">
              <span className="price-label">Start from</span>
              <span className="price-graffiti">50K</span>
            </div>
            <motion.a
              href="https://wa.me/6285724922172"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-order"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              Order Sekarang
            </motion.a>
          </motion.div>

          {/* === PRODUCT 2 === */}
          <motion.div
            className="product-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="image-wrapper">
              <motion.img
                src="/jersey-base.png"
                alt="Jersey Printing Custom"
                className="kaos-img"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <h3>Printing Jersey</h3>
            <div className="price-wrapper">
              <span className="price-label">Start from</span>
              <span className="price-graffiti">95K</span>
            </div>
            <motion.a
              href="https://wa.me/6285724922172"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-order"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              Order Sekarang
            </motion.a>
          </motion.div>

          {/* === PRODUCT 3 === */}
          <motion.div
            className="product-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="image-wrapper">
              <motion.img
                src="/goodiebag-base.png"
                alt="Goodie Bag Printing"
                className="kaos-img"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <h3>Digital Print</h3>
            <div className="price-wrapper">
              <span className="price-label">Start from</span>
              <span className="price-graffiti">35K</span>
            </div>
            <motion.a
              href="https://wa.me/6285724922172"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-order"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              Order Sekarang
            </motion.a>
          </motion.div>

          {/* === PRODUCT 4: JAKET === */}
          <motion.div
            className="product-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <div className="image-wrapper">
              <motion.img
                src="/jaket-base.png"
                alt="Jaket Custom Printing"
                className="kaos-img"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <h3>Jaket Custom</h3>
            <div className="price-wrapper">
              <span className="price-label">Start from</span>
              <span className="price-graffiti">120K</span>
            </div>
            <motion.a
              href="https://wa.me/6285724922172"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-order"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              Order Sekarang
            </motion.a>
          </motion.div>

          {/* === PRODUCT 5: KEMEJA === */}
          <motion.div
            className="product-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <div className="image-wrapper">
              <motion.img
                src="/kemeja-base.png"
                alt="Kemeja Custom Printing"
                className="kaos-img"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <h3>Kemeja Custom</h3>
            <div className="price-wrapper">
              <span className="price-label">Start from</span>
              <span className="price-graffiti">110K</span>
            </div>
            <motion.a
              href="https://wa.me/6285724922172"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-order"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              Order Sekarang
            </motion.a>
          </motion.div>

          {/* === PRODUCT 6: LANYARD === */}
          <motion.div
            className="product-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          >
            <div className="image-wrapper">
              <motion.img
                src="/lanyard-base.png"
                alt="Lanyard Custom Printing"
                className="kaos-img"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <h3>Lanyard Custom</h3>
            <div className="price-wrapper">
              <span className="price-label">Start from</span>
              <span className="price-graffiti">25K</span>
            </div>
            <motion.a
              href="https://wa.me/6285724922172"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-order"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              Order Sekarang
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Divider bawah */}
      <div className="tear-divider">
        <img src="/torn-edge.png" alt="Efek robekan kertas" />
      </div>
    </>
  );
}