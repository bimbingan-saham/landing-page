import ScrollReveal from "./ScrollReveal";

const freeItems = [
  "Pengenalan dunia saham & pasar modal",
  "Cara kerja bursa efek Indonesia",
  "Kesalahan umum investor pemula",
  "Tips awal sebelum mulai investasi",
];

const mainItems = [
  "Fundamental saham dari dasar sampai mahir",
  "Cara membaca laporan keuangan perusahaan",
  "Strategi cari saham multi-bagger (ratusan–ribuan %)",
  "Teknik analisis ala akademisi + praktisi",
  "Sesi tanya jawab langsung dengan instruktur",
  "Akses grup komunitas eksklusif (seumur hidup)",
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function Classes() {
  return (
    <section id="kelas" className="bg-slate-50 py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-[#172A5B]/10 border border-[#172A5B]/20 rounded-full text-xs font-semibold text-[#172A5B] uppercase tracking-widest mb-4">
            Program Belajar
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#172A5B] mb-4">
            Pilih Kelasmu
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Mulai dari yang gratis untuk kenalan, atau langsung masuk kelas intensif untuk hasil nyata.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-7 max-w-4xl mx-auto">

          {/* Free class */}
          <ScrollReveal delay={1}>
            <div className="bg-white rounded-2xl border border-slate-200 p-7 h-full flex flex-col shadow-sm hover:shadow-lg hover:shadow-slate-200/60 transition-all duration-300">
              <div className="mb-5">
                <span className="inline-block px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wide">
                  Gratis
                </span>
              </div>
              <h3 className="text-[#172A5B] text-xl font-bold mb-2">Free Class Saham</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Cocok untuk kamu yang baru mau kenalan dengan dunia saham dan ingin tahu apakah investasi saham cocok untukmu.
              </p>
              <ul className="space-y-3 mb-7 flex-1">
                {freeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="text-emerald-500"><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-[#172A5B]">Gratis</span>
                  <span className="text-slate-400 text-sm ml-2">/ sekali masuk</span>
                </div>
                <a
                  href="https://wa.me/62"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 border-2 border-[#651818] text-[#651818] hover:bg-[#651818] hover:text-white font-semibold rounded-xl text-sm text-center transition-all duration-200"
                >
                  Daftar Gratis
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Main class */}
          <ScrollReveal delay={2}>
            <div className="relative bg-[#172A5B] rounded-2xl border-2 border-[#651818] p-7 h-full flex flex-col shadow-xl shadow-[#172A5B]/25">
              {/* Popular badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-block px-4 py-1 bg-[#651818] text-white text-xs font-bold rounded-full uppercase tracking-wide shadow-lg">
                  🔥 Early Bird
                </span>
              </div>

              <div className="mb-5">
                <span className="inline-block px-2.5 py-1 bg-[#651818]/30 text-[#e8b4b4] text-xs font-bold rounded-full uppercase tracking-wide border border-[#651818]/40">
                  Kelas Intensif
                </span>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Kelas Intensif 2 Hari</h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                2 hari live via Zoom bersama instruktur. Dari dasar sampai bisa analisis saham sendiri dengan percaya diri.
              </p>

              <ul className="space-y-3 mb-7 flex-1">
                {mainItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/75">
                    <span className="text-[#e8b4b4]"><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-white/10">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-white">Rp&nbsp;1.199.000</span>
                  <span className="text-white/40 text-sm">/ 2 hari</span>
                </div>
                <p className="text-white/50 text-xs mb-4 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  Live via Zoom · rekaman tersedia
                </p>
                <a
                  href="https://wa.me/62"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 bg-[#651818] hover:bg-[#7d2020] text-white font-bold rounded-xl text-sm text-center transition-all duration-200 shadow-lg shadow-[#651818]/40 hover:shadow-xl hover:shadow-[#651818]/50 hover:-translate-y-0.5"
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
