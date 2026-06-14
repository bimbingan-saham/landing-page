import ScrollReveal from "./ScrollReveal";

const parts = [
  {
    number: "Part 1",
    title: "Fondasi",
    duration: "Bab 1–2 · ~40 menit",
    items: [
      "Kenapa orang nyangkut di saham",
      "Di mana cari laporan keuangan (yang banyak orang nggak tau)",
    ],
    price: "Rp 49.000",
  },
  {
    number: "Part 2",
    title: "Tiga Laporan Inti",
    duration: "Bab 3–5 · ~75 menit",
    items: [
      "Baca laba rugi dalam 5 menit",
      "Cara cepat membaca neraca perusahaan",
      "Sinyal tersembunyi di arus kas",
    ],
    price: "Rp 99.000",
  },
  {
    number: "Part 3",
    title: "Alat Analisis",
    duration: "Bab 6–9 · ~90 menit",
    items: [
      "Cek kualitas perusahaan dengan 2 angka kunci",
      "Deteksi perusahaan yang utangnya berbahaya",
      "Tau saham mahal atau murah dalam 30 detik",
      "Rahasia memilih saham yang rajin bagi dividen",
    ],
    price: "Rp 129.000",
  },
  {
    number: "Part 4",
    title: "Praktik Nyata",
    duration: "Bab 10–12 · ~80 menit",
    items: [
      "Red flags yang bikin saham anjlok mendadak",
      "Bedah perusahaan dari nol",
      "Checklist 15 menit melihat potensi perusahaan",
    ],
    price: "Rp 129.000",
  },
];

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function Classes() {
  return (
    <section id="kelas" className="bg-transparent py-20 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Free Class — full width coming soon banner */}
        <ScrollReveal className="mb-14">
          <div
            className="rounded-2xl px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div className="flex items-center gap-4">
              <span className="inline-block px-2.5 py-1 bg-white/10 text-white/50 border border-white/15 text-xs font-bold rounded-full uppercase tracking-wide">
                Coming Soon
              </span>
              <div>
                <p className="text-white font-bold text-base">Free Class Saham</p>
                <p className="text-white/50 text-sm mt-0.5">Pengenalan dunia saham untuk pemula total — segera hadir</p>
              </div>
            </div>
            <button
              disabled
              className="flex-shrink-0 px-5 py-2.5 border border-white/20 text-white/40 font-semibold rounded-xl text-sm cursor-not-allowed"
            >
              Akan Hadir Segera
            </button>
          </div>
        </ScrollReveal>

        {/* Video Course — 4 parts */}
        <ScrollReveal className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Struktur Video Course
          </h2>
          <p className="text-white/60 text-lg">
            12 modul dipecah jadi 4 part — bisa dibeli satuan maupun bundel
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {parts.map((part, i) => (
            <ScrollReveal key={i} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div
                className="group rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 bg-white/[0.07] border border-white/[0.13] hover:border-[#651818] hover:shadow-xl hover:shadow-[#651818]/25"
              >
                <div className="mb-4">
                  <span className="inline-block px-2 py-0.5 bg-[#651818]/30 border border-[#651818]/40 text-[#e8b4b4] text-[10px] font-bold rounded-full uppercase tracking-widest mb-3">
                    {part.number}
                  </span>
                  <h3 className="text-white font-bold text-lg leading-snug">{part.title}</h3>
                  <p className="text-white/40 text-xs mt-1">{part.duration}</p>
                </div>
                <ul className="space-y-2 flex-1 mb-5">
                  {part.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-white/65 text-sm leading-snug">
                      <span className="text-[#e8b4b4] mt-0.5"><CheckIcon /></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.09)" }}>
                  <p className="text-white font-bold text-lg mb-3">{part.price}</p>
                  <a
                    href="https://wa.me/62"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2.5 border border-white/25 hover:border-[#651818] hover:bg-[#651818] text-white/80 hover:text-white font-semibold rounded-xl text-xs text-center transition-all duration-200"
                  >
                    Beli Part Ini →
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pricing Model */}
        <ScrollReveal className="text-center mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Model Harga: Beli Per Part atau Bundel
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* Satuan */}
          <ScrollReveal delay={1}>
            <div
              className="rounded-2xl p-7 h-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <h3 className="text-white/70 font-semibold text-sm uppercase tracking-widest mb-5">
                Harga Satuan
              </h3>
              <div className="space-y-3 mb-5">
                {[
                  { label: "Part 1 — Fondasi", price: "Rp 49.000" },
                  { label: "Part 2 — Tiga Laporan Inti", price: "Rp 99.000" },
                  { label: "Part 3 — Alat Analisis", price: "Rp 129.000" },
                  { label: "Part 4 — Praktik Nyata", price: "Rp 129.000" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-white/65">{row.label}</span>
                    <span className="text-white/65 font-medium">{row.price}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}>
                <div className="flex justify-between items-center">
                  <span className="text-white/40 text-sm">Total satuan</span>
                  <span className="text-white/40 text-sm font-medium line-through">Rp 406.000</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bundel */}
          <ScrollReveal delay={2}>
            <div
              className="relative rounded-2xl p-7 h-full flex flex-col shadow-xl shadow-black/30"
              style={{
                background: "rgba(101,24,24,0.18)",
                border: "2px solid #651818",
              }}
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-block px-4 py-1 bg-[#651818] text-white text-xs font-bold rounded-full uppercase tracking-wide shadow-lg">
                  Paling Populer
                </span>
              </div>

              <h3 className="text-[#e8b4b4] font-semibold text-sm uppercase tracking-widest mb-4">
                Bundel Lengkap
              </h3>

              <div className="flex-1">
                <div className="mb-2">
                  <span className="font-display text-4xl font-bold text-white">Rp 249.000</span>
                </div>
                <p className="text-[#e8b4b4]/80 text-sm mb-1">
                  Hemat Rp 157.000 dibanding beli satuan — ini harga jangkar.
                </p>
                <p className="text-white/35 text-xs mb-6">
                  Free Class (live, menyusul)
                </p>
              </div>

              <a
                href="https://wa.me/62"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-[#651818] hover:bg-[#7d2020] text-white font-bold rounded-xl text-sm text-center transition-all duration-200 shadow-lg shadow-[#651818]/40 hover:shadow-xl hover:-translate-y-0.5"
              >
                Ambil Bundel Lengkap →
              </a>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
