import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#172A5B] flex items-center pt-16 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#1e3a7a_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#0F1E42_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <div className="order-2 md:order-1">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white/90 uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Dosen Ekonomi &amp; Akuntansi
              </span>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.15] font-bold text-white mb-6">
                Dibimbing Sampai Jago.{" "}
                <span className="text-[#e8b4b4] italic">Bukan Sekadar</span>{" "}
                Nonton Video.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
                Belajar saham langsung dari Dosen Ekonomi &amp; Akuntansi. Dari 0
                sampai tau cara mainnya — dengan{" "}
                <span className="text-white font-semibold">garansi bimbingan seumur hidup.</span>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href="#kelas"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#651818] hover:bg-[#7d2020] text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-[#651818]/40 hover:shadow-xl hover:shadow-[#651818]/50 hover:-translate-y-0.5 text-sm"
                >
                  Daftar Sekarang
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#kelas"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/40 hover:border-white/70 text-white font-semibold rounded-xl transition-all duration-200 hover:bg-white/10 text-sm"
                >
                  Lihat Kelas Gratis
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <div className="flex flex-wrap gap-4 text-sm text-white/60">
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-4 rounded-full bg-emerald-400" />
                  2 Kelas Tersedia
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-4 rounded-full bg-blue-400" />
                  Live via Zoom
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-4 rounded-full bg-[#e8b4b4]" />
                  Garansi Seumur Hidup
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — instructor photo */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <ScrollReveal delay={1} className="w-full max-w-sm md:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 aspect-[3/4] max-h-[500px] md:max-h-none">
                <Image
                  src="/images/AF_PHOTOGRAPHY-52.jpg"
                  alt="Beryansyah — Instruktur Bimbingan Saham"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E42] via-[#172A5B]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#172A5B]/20 to-transparent" />

                {/* Name tag at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3">
                    <p className="text-white font-semibold text-sm">Beryansyah., S. Ak., S. Kom., M. Ak</p>
                    <p className="text-white/65 text-xs mt-0.5">Dosen Ekonomi &amp; Akuntansi</p>
                  </div>
                </div>

                {/* Achievement badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-[#651818]/90 backdrop-blur-sm border border-[#651818] rounded-xl px-3 py-2 shadow-lg">
                    <p className="text-white text-xs font-bold">BUMI: Rp50 → Rp350+</p>
                    <p className="text-white/70 text-[10px]">Multi-bagger nyata</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
