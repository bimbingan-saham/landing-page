import ScrollReveal from "./ScrollReveal";

export default function Guarantee() {
  return (
    <section className="relative bg-[#651818] py-24 px-5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#7d2020_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#4a1111_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-black/20">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Akses Video Seumur Hidup
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Beli sekali, akses selamanya. Tonton kapan saja, di mana saja, ulang
            sebanyak yang kamu mau.{" "}
            <span className="text-white font-semibold">Termasuk update materi gratis di masa depan.</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            {[
              { icon: "∞", label: "Akses Seumur Hidup" },
              { icon: "📺", label: "Tonton Kapan Saja" },
              { icon: "🔄", label: "Update Gratis" },
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
            href="https://wa.me/62"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#651818] font-bold rounded-xl text-base shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            Mulai Belajar Sekarang
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
