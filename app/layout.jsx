import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: {
    default: "Holycity Printing - Jasa Printing & Advertising",
    template: "%s | Holycity Printing",
  },
  description:
    "Holycity Printing melayani printing DTF, custom jersey, goodie bag, topi, jaket, kemeja, dan layanan advertising profesional.",
  metadataBase: new URL("https://www.holycityprinting.com"),
  openGraph: {
    title: "Holycity Printing",
    description:
      "Spesialis Printing DTF dan produk custom untuk kebutuhan promosi.",
    url: "https://www.holycityprinting.com",
    siteName: "Holycity Printing",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {/* HEADER / NAVBAR */}
        <nav className="navbar">
          <div className="logo">
            <Link href="/">Holycity Printing</Link>
          </div>
          <ul>
            <li><Link href="/">Beranda</Link></li>
            <li><Link href="/tentang-kami">Tentang</Link></li>
            <li><Link href="/layanan">Layanan</Link></li>
            <li><Link href="/artikel">Artikel</Link></li>
            <li><Link href="/kontak">Kontak</Link></li>
          </ul>
        </nav>

        {/* KONTEN HALAMAN */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer>
          © 2025 Holycity Printing · Semua hak dilindungi
        </footer>
      </body>
    </html>
  );
}