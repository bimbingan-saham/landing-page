import ScrollReveal from "./ScrollReveal";

export default function Guarantee() {
  return (
    <section className="relative bg-[#651818] py-24 px-5 overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#7d2020_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#4a1111_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-black/20">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Garansi Bimbingan Seumur Hidup
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Kami tidak akan meninggalkanmu sampai kamu benar-benar jago.{" "}
            <span className="text-white font-semibold">Itu janji kami.</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            {[
              { icon: "∞", label: "Tanpa Batas Waktu" },
              { icon: "💬", label: "Grup Eksklusif" },
              { icon: "🎓", label: "Akses Rekaman" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5 border border-white/20">
                <span className="text-lg">{item.icon}</span>
                <span className="text-white/85 text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={4}>
          <a
            href="#kelas"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#651818] font-bold rounded-xl text-base shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            Mulai Sekarang
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
