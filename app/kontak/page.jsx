export const metadata = {
  title: "Kontak | Holycity Printing",
  description:
    "Hubungi Holycity Printing untuk konsultasi dan penawaran harga layanan percetakan custom Anda.",
};

export default function KontakPage() {
  return (
    <section className="section">
      <h1>Hubungi Kami</h1>
      <p>
        📞 0812‑xxx‑xxxx  
        📧 holycityprinting@email.com  
        📍 Jl. Contoh No. 123, Surabaya
      </p>
      <iframe
        src="https://www.google.com/maps/embed?...yourmap..."
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </section>
  );
}