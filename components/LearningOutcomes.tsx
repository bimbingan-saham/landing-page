import ScrollReveal from "./ScrollReveal";

const outcomes = [
  "Membaca laporan keuangan tanpa pusing — cukup yang penting saja",
  "Mengenali sinyal pertumbuhan sebelum tercermin di harga",
  "Menggunakan metode Catalyst Analysis untuk skrining saham",
  "Membedakan perusahaan sehat vs perusahaan \"gorengan\"",
  "Menemukan saham multi-bagger sebelum dibahas media",
  "Mengambil keputusan investasi sendiri, tanpa tergantung rekomendasi",
];

export default function LearningOutcomes() {
  return (
    <section className="bg-transparent py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Yang Akan Kamu Kuasai
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Tidak semua bagian laporan keuangan perlu kamu baca. Kamu bukan
            akuntan. Kita fokus ke yang benar-benar penting untuk mengambil
            keputusan investasi.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.map((item, i) => (
            <ScrollReveal key={i} delay={Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5}>
              <div
                className="flex items-start gap-4 rounded-2xl p-6 h-full hover:-translate-y-0.5 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.11)",
                }}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p className="text-white/80 text-sm leading-relaxed">{item}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
