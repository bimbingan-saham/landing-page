"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "Apakah cocok untuk yang belum tahu saham sama sekali?",
    a: "Ya, sangat cocok! Kelas ini dirancang dari nol, mulai dari apa itu saham, bagaimana cara kerjanya, sampai strategi lanjutan. Tidak ada pengetahuan awal yang diperlukan — cukup semangat dan keinginan untuk belajar.",
  },
  {
    q: "Bagaimana jika tidak bisa hadir di sesi live?",
    a: "Tidak perlu khawatir. Setiap sesi live via Zoom akan direkam dan rekaman tersebut akan tersedia untuk kamu akses kapan saja. Jadi kamu tetap bisa belajar meskipun ada halangan di jadwal.",
  },
  {
    q: "Apa itu garansi bimbingan seumur hidup?",
    a: "Artinya setelah kamu mengikuti kelas, kamu mendapatkan akses ke grup komunitas eksklusif tanpa batas waktu. Kamu bisa terus bertanya, berdiskusi, dan mendapat bimbingan dari instruktur kapanpun kamu butuhkan — tanpa biaya tambahan.",
  },
  {
    q: "Bagaimana cara mendaftar dan membayar?",
    a: "Caranya mudah! Klik tombol 'Daftar Sekarang' dan kamu akan langsung diarahkan ke WhatsApp instruktur. Tim kami akan membantu proses pendaftaran dan pembayaran secara langsung melalui WhatsApp.",
  },
  {
    q: "Apakah ada jaminan profit setelah ikut kelas?",
    a: "Tidak ada. Investasi saham selalu mengandung risiko dan tidak ada yang bisa menjamin keuntungan. Yang kami ajarkan adalah cara analisis yang tepat, ilmiah, dan terstruktur — agar kamu bisa membuat keputusan investasi yang lebih cerdas dan terhindar dari jebakan.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-20 px-5">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-[#172A5B]/10 border border-[#172A5B]/20 rounded-full text-xs font-semibold text-[#172A5B] uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#172A5B] mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-slate-500 text-base">
            Masih ada pertanyaan? Hubungi kami langsung via WhatsApp.
          </p>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5}>
              <div
                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                  open === i
                    ? "border-[#172A5B]/30 shadow-md shadow-[#172A5B]/5"
                    : "border-slate-200 hover:border-[#172A5B]/20"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className={`font-semibold text-sm sm:text-base leading-snug transition-colors ${open === i ? "text-[#172A5B]" : "text-slate-700"}`}>
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                      open === i
                        ? "bg-[#172A5B] text-white rotate-45"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>
                <div className={`accordion-content ${open === i ? "open" : ""}`}>
                  <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
