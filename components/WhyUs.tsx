import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Diajar Langsung Dosen Ekonomi & Akuntansi",
    desc: "Bukan influencer atau trader biasa. Instruktur memiliki latar belakang akademis Ekonomi-Akuntansi yang kuat dan berpengalaman sebagai praktisi.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Garansi Bimbingan Seumur Hidup",
    desc: "Sampai kamu benar-benar jago dan percaya diri berinvestasi. Tidak ada batasan waktu, tidak ada biaya tambahan.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Dari 0 Sampai Paham",
    desc: "Dirancang untuk yang belum tahu saham sama sekali. Materi terstruktur, dari konsep paling dasar hingga strategi lanjutan.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Terbukti Cari Multi-bagger",
    desc: "Bukan teori kosong. Instruktur terbukti membeli saham BUMI di Rp50-an dan menjualnya di atas Rp350+ — keuntungan nyata, bukan janji.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#172A5B] py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white/80 uppercase tracking-widest mb-4">
            Keunggulan Kami
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Kenapa Harus Bimbingan Saham?
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Bukan kelas biasa. Ini bimbingan yang dirancang agar kamu benar-benar mengerti, bukan hanya sekedar mengetahui.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#651818]/30 border border-[#651818]/40 flex items-center justify-center text-[#e8b4b4] mb-5 group-hover:bg-[#651818]/50 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-white font-bold text-base mb-2.5 leading-snug">
                  {f.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
