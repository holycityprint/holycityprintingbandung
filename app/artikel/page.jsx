export const metadata = {
  title: "Artikel | Holycity Printing",
  description:
    "Artikel seputar printing, DTF, dan tips promosi untuk bisnis Anda.",
};

export default function ArtikelPage() {
  const demoArtikel = [
    {
      slug: "mengapa-printing-dtf-lebih-awet",
      title: "Mengapa Printing DTF Lebih Awet dari Sablon Konvensional",
    },
    {
      slug: "tips-desain-topi-promosi",
      title: "5 Tips Desain Topi Promosi agar Brand Anda Dikenal",
    },
  ];

  return (
    <section className="section">
      <h1>Artikel & Insight</h1>
      <ul>
        {demoArtikel.map((a) => (
          <li key={a.slug}>
            <a href={`/artikel/${a.slug}`}>{a.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}