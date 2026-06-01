import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function AboutInstructor() {
  return (
    <section id="tentang" className="bg-transparent py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <ScrollReveal className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 bg-gradient-to-br from-white/10 to-[#651818]/20 rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 aspect-[3/4]">
                <Image
                  src="/images/AF_PHOTOGRAPHY-52.jpg"
                  alt="Beryansyah — Instruktur Bimbingan Saham"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e4a]/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/15">
                    <p className="text-white font-semibold text-sm">Dosen Ekonomi &amp; Akuntansi</p>
                    <p className="text-white/65 text-xs mt-0.5">Akademisi &amp; Praktisi Investasi Saham</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <div>
            <ScrollReveal>
              <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white/80 uppercase tracking-widest mb-5">
                Dosen Ekonomi &amp; Akuntansi
              </span>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                Beryansyah., S. Ak., S. Kom., M. Ak
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                Seorang akademisi sekaligus praktisi investasi saham. Dengan latar
                belakang pendidikan Ekonomi-Akuntansi, Beryansyah mengajarkan
                investasi saham dengan pendekatan ilmiah, terstruktur, dan mudah
                dipahami — bahkan untuk pemula sekalipun.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div
                className="rounded-2xl p-5 mb-7"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#651818] flex items-center justify-center shadow-md shadow-[#651818]/30">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">Rekam Jejak Nyata</p>
                    <p className="text-white/65 text-sm leading-relaxed">
                      Membeli saham{" "}
                      <span className="font-bold text-[#e8b4b4]">BUMI</span> di harga{" "}
                      <span className="font-bold text-white">Rp50-an</span> dan berhasil menjualnya
                      di harga{" "}
                      <span className="font-bold text-[#4ade80]">Rp350+</span> — bukti
                      nyata bahwa metode yang diajarkan terbukti menghasilkan.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: "M.Ak", label: "Ekonomi-Akuntansi" },
                  { num: "2+", label: "Kelas Tersedia" },
                  { num: "∞", label: "Garansi Bimbingan" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center p-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.10)" }}
                  >
                    <div className="text-2xl font-bold text-white">{stat.num}</div>
                    <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
