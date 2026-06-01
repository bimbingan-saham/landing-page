import ScrollReveal from "./ScrollReveal";

const pains = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Takut Salah Pilih Saham",
    desc: "Mau investasi tapi takut salah pilih saham dan rugi besar? Bingung mana yang benar-benar berpotensi dan mana yang jebakan?",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Sudah Baca Tapi Masih Bingung",
    desc: "Sudah baca artikel, nonton YouTube, ikut webinar — tapi masih bingung harus mulai dari mana dan langkah konkretnya apa?",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Takut Kena Saham Gorengan",
    desc: "Takut kena saham gorengan atau ditipu oknum tidak bertanggung jawab yang mengatasnamakan investasi tapi malah merugikan?",
  },
];

export default function PainPoint() {
  return (
    <section className="bg-transparent py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Apakah Kamu Merasakan Ini?
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Kalau iya, kamu tidak sendirian. Ribuan orang merasakan hal yang sama sebelum menemukan cara yang benar.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {pains.map((item, i) => (
            <ScrollReveal key={i} delay={(i + 1) as 1 | 2 | 3}>
              <div
                className="group rounded-2xl p-7 h-full hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-white mb-5">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
