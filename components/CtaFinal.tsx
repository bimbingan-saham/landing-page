import ScrollReveal from "./ScrollReveal";

export default function CtaFinal() {
  return (
    <section className="relative py-28 px-5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#172A5B] via-[#2a1a4a] to-[#651818]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#651818]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#172A5B]/40 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <span className="inline-block px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white/80 uppercase tracking-widest mb-6">
            Mulai Sekarang
          </span>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Berhenti Nebak. Mulai Analisis.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Pelajari Catalyst Analysis hari ini, dan jadilah investor yang bisa
            baca arah perusahaan dari laporan keuangannya sendiri.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <a
            href="https://wa.me/62"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 bg-white text-[#172A5B] font-bold text-base rounded-xl shadow-2xl shadow-black/30 hover:shadow-white/10 hover:-translate-y-1 transition-all duration-200"
            style={{ paddingTop: "1.125rem", paddingBottom: "1.125rem" }}
          >
            Mulai Belajar Sekarang →
          </a>
          <p className="text-white/35 text-sm mt-4">
            Mulai dari Rp 49.000 per part. Akses seumur hidup.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
