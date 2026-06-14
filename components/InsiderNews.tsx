import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    icon: "📊",
    title: "Lebih Dulu",
    desc: "Dirilis tiap kuartal, sebelum media memberitakan",
  },
  {
    icon: "🔍",
    title: "Lebih Akurat",
    desc: "Data langsung dari perusahaan, bukan opini analis",
  },
  {
    icon: "🎯",
    title: "Lebih Yakin",
    desc: "Keputusan beli/jual berdasarkan fakta, bukan tip",
  },
];

export default function InsiderNews() {
  return (
    <section className="bg-transparent py-20 px-5">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <ScrollReveal>
          <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white/80 uppercase tracking-widest mb-5">
            Insight
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            Laporan Keuangan Adalah Insider News yang Legal.
          </h2>
          <div className="text-white/65 text-lg leading-relaxed space-y-4">
            <p>
              Saat media mulai memberitakan sebuah perusahaan, harga sahamnya
              biasanya sudah naik.
            </p>
            <p>
              Tapi laporan keuangan dirilis lebih awal. Di sana tersembunyi
              sinyal-sinyal yang tidak diperhatikan kebanyakan orang —
              pertumbuhan yang stabil, ekspansi yang masif, perubahan strategi
              yang akan mengubah arah perusahaan.
            </p>
            <p>
              Investor profesional baca ini setiap kuartal. Kamu juga bisa —
              bahkan tanpa latar akuntansi.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-5">
        {cards.map((card, i) => (
          <ScrollReveal key={i} delay={(i + 1) as 1 | 2 | 3}>
            <div
              className="rounded-2xl p-7 text-center hover:-translate-y-1 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{card.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
