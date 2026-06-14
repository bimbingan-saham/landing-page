import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Identifikasi Katalis",
    desc: "Temukan pemicu pertumbuhan dari laporan keuangan, ekspansi, atau perubahan strategi",
  },
  {
    number: "02",
    title: "Validasi Fundamental",
    desc: "Pastikan perusahaan secara finansial sehat untuk mendukung katalis tersebut",
  },
  {
    number: "03",
    title: "Eksekusi dengan Timing",
    desc: "Beli sebelum pasar menyadari, jual saat valuasi sudah mencerminkan katalis",
  },
];

export default function CatalystAnalysis() {
  return (
    <section className="bg-transparent py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-[#651818]/30 border border-[#651818]/50 rounded-full text-xs font-semibold text-[#e8b4b4] uppercase tracking-widest mb-5">
            Metode Eksklusif
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            Catalyst Analysis:<br />
            Cara Menemukan Saham Sebelum Naik Ratusan Persen.
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            Framework yang dikembangkan oleh Beryansyah, dosen Ekonomi &amp; Akuntansi.
            Catalyst Analysis menemukan &ldquo;katalis&rdquo; — pemicu pertumbuhan yang akan
            mendorong harga saham naik signifikan. Salah satu sumber katalis paling
            powerful: laporan keuangan.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={(i + 1) as 1 | 2 | 3}>
              <div
                className="relative rounded-2xl p-7 h-full hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div className="font-display text-6xl font-bold text-white/10 leading-none mb-4 select-none">
                  {step.number}
                </div>
                <h3 className="text-white font-bold text-lg mb-3 leading-snug uppercase tracking-wide text-sm">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
