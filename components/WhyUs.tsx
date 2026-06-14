import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Metode Catalyst Analysis",
    desc: "Framework eksklusif untuk menemukan katalis pertumbuhan perusahaan sebelum tercermin di harga saham.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12 15.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Akses Video Seumur Hidup",
    desc: "Sekali bayar, akses selamanya. Tonton kapan saja dan termasuk update materi gratis di masa depan.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: "Dirancang untuk Pemula",
    desc: "Tidak perlu latar akuntansi. Materi hanya berfokus pada bagian yang benar-benar penting untuk keputusan investasi.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Dibimbing Dosen Ekonomi & Akuntansi",
    desc: "Backing akademik yang kuat. Bukan influencer — instruktur adalah akademisi sekaligus praktisi di bidang investasi.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-transparent py-20 px-5">
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
