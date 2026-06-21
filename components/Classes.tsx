"use client";

import { useState } from "react";

const MAROON = "#651818";
const GOLD = "#D4A857";

const parts = [
  {
    n: 1,
    title: "Fondasi",
    meta: "Bab 1–2 · ~40 menit · 2 video",
    bullets: [
      "Kenapa orang nyangkut puluhan juta di saham — dan cara hindarinya",
      'Cara akses "rapor rahasia" tiap perusahaan saham di Indonesia (gratis & legal)',
      "Mindset 1% investor yang konsisten cuan vs 99% yang nyangkut",
    ],
    price: "Rp 49.000",
  },
  {
    n: 2,
    title: "Tiga Laporan Inti",
    meta: "Bab 3–5 · ~75 menit · 3 video",
    bullets: [
      "Bedain perusahaan yang untung beneran vs cuma “akal-akalan akuntansi”",
      "Endus perusahaan yang kelihatan kaya padahal lagi sekarat",
      "Sinyal tersembunyi di arus kas yang bikin investor pro masuk duluan",
    ],
    price: "Rp 99.000",
  },
  {
    n: 3,
    title: "Alat Analisis",
    meta: "Bab 6–9 · ~90 menit · 4 video",
    bullets: [
      "2 angka kunci buat tahu perusahaan yang bisa cetak cuan terus",
      "Deteksi perusahaan yang utangnya bakal nyekik — sebelum harganya anjlok",
      "Tahu saham mahal atau murah dalam 30 detik — jangan beli kemahalan lagi",
      "Pilih saham yang konsisten bagi-bagi cuan ke kamu tiap tahun",
    ],
    price: "Rp 129.000",
  },
  {
    n: 4,
    title: "Praktik Nyata",
    meta: "Bab 10–12 · ~80 menit · 4 video",
    bullets: [
      "4 red flags yang bikin saham anjlok mendadak — yang 90% pemula skip",
      "Cara bedah perusahaan dari nol (sistem yang bisa kamu pakai seumur hidup)",
      "Checklist 15 menit — saring ratusan saham, temuin yang berpotensi naik",
      "BONUS: Teaser metode khusus cari saham yang berpotensi naik puluhan kali",
    ],
    price: "Rp 129.000",
  },
];

const bundleFeatures = [
  "Semua materi Part 1 sampai Part 4",
  "Akses selamanya",
  "Bisa ditonton di HP/laptop kapan saja",
  "Dilengkapi materi presentasi",
  "Update gratis kalau ada revisi materi",
];

function IconCamera() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke={GOLD}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke={GOLD}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconKey() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke={GOLD}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

const intensiveFeatures = [
  {
    Icon: IconCamera,
    title: "Live Zoom Interaktif",
    sub: "Tanya jawab langsung, bukan video rekaman",
  },
  {
    Icon: IconSearch,
    title: "Bongkar Emiten Real-time",
    sub: "Analisis saham aktual bareng peserta",
  },
  {
    Icon: IconKey,
    title: "Framework Lengkap",
    sub: "Metode Catalyst Analysis utuh dari A-Z",
  },
];

type HoveredPart = number | null;

export default function Classes() {
  const [freeEmail, setFreeEmail] = useState("");
  const [freeSubmitted, setFreeSubmitted] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [hoveredPart, setHoveredPart] = useState<HoveredPart>(null);
  const [hoveredBundleBtn, setHoveredBundleBtn] = useState(false);
  const [hoveredFreeBtn, setHoveredFreeBtn] = useState(false);
  const [hoveredWaitBtn, setHoveredWaitBtn] = useState(false);
  const [hoveredPartBtn, setHoveredPartBtn] = useState<HoveredPart>(null);

  return (
    <section id="produk" className="relative py-20">
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>

        {/* ── 1. FREE CLASS ── */}
        <div
          className="flex flex-wrap items-center gap-6"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: `2px solid ${GOLD}`,
            borderRadius: "16px",
            padding: "clamp(24px, 4vw, 40px)",
            marginBottom: "72px",
          }}
        >
          <div className="flex-1 min-w-64">
            <span
              style={{
                background: "rgba(212,168,87,0.15)",
                color: GOLD,
                border: `1px solid ${GOLD}`,
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                padding: "4px 12px",
                display: "inline-block",
                marginBottom: "14px",
              }}
            >
              GRATIS
            </span>
            <h3
              style={{
                color: "#fff",
                fontSize: "clamp(18px,2.5vw,22px)",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              Kenapa Orang Bisa Kaya dari Saham?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", margin: 0 }}>
              Video preview 10 menit — kenalan dengan dunia saham sebelum mulai belajar.
            </p>
          </div>

          <div className="flex-1 min-w-72">
            {freeSubmitted ? (
              <p style={{ color: GOLD, fontWeight: 600, fontSize: "15px" }}>
                ✓ Cek email kamu untuk link video gratis!
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFreeSubmitted(true);
                }}
                className="flex flex-wrap gap-2"
              >
                <input
                  type="email"
                  required
                  value={freeEmail}
                  onChange={(e) => setFreeEmail(e.target.value)}
                  placeholder="Email kamu..."
                  style={{
                    flex: "1 1 180px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "8px",
                    padding: "10px 16px",
                    color: "#fff",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  onMouseEnter={() => setHoveredFreeBtn(true)}
                  onMouseLeave={() => setHoveredFreeBtn(false)}
                  style={{
                    background: hoveredFreeBtn ? GOLD : "transparent",
                    border: `2px solid ${GOLD}`,
                    color: hoveredFreeBtn ? "#1a0800" : GOLD,
                    borderRadius: "8px",
                    padding: "10px 20px",
                    fontWeight: 600,
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  Tonton Sekarang
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── 2. HEADING ── */}
        <div className="text-center mb-12">
          <span
            style={{
              color: GOLD,
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              display: "block",
              marginBottom: "12px",
            }}
          >
            VIDEO COURSE
          </span>
          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(26px,4vw,40px)",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Pilih Paket Sesuai Kebutuhanmu
          </h2>
        </div>

        {/* ── 3. GRID 4 PART ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {parts.map((part) => {
            const isHovered = hoveredPart === part.n;
            const isBtnHovered = hoveredPartBtn === part.n;
            return (
              <div
                key={part.n}
                onMouseEnter={() => setHoveredPart(part.n)}
                onMouseLeave={() => setHoveredPart(null)}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${isHovered ? MAROON : "rgba(255,255,255,0.1)"}`,
                  borderRadius: "16px",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  transition: "all 0.3s ease",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: isHovered
                    ? "0 16px 48px rgba(101,24,24,0.25)"
                    : "none",
                }}
              >
                <span
                  style={{
                    background: "rgba(101,24,24,0.35)",
                    color: "#f8c8c8",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    padding: "4px 12px",
                    display: "inline-block",
                    alignSelf: "flex-start",
                  }}
                >
                  PART {part.n}
                </span>

                <div>
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                      fontWeight: 700,
                      marginBottom: "4px",
                    }}
                  >
                    {part.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", margin: 0 }}>
                    {part.meta}
                  </p>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    flex: 1,
                  }}
                >
                  {part.bullets.map((b, i) => (
                    <li
                      key={i}
                      style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
                    >
                      <span
                        style={{
                          color: MAROON,
                          fontWeight: 700,
                          flexShrink: 0,
                          marginTop: "2px",
                          fontSize: "15px",
                        }}
                      >
                        ✓
                      </span>
                      <span
                        style={{
                          color: "rgba(255,255,255,0.8)",
                          fontSize: "14px",
                          lineHeight: "1.55",
                        }}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    paddingTop: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "12px",
                  }}
                >
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: "22px" }}>
                    {part.price}
                  </span>
                  <button
                    onMouseEnter={() => setHoveredPartBtn(part.n)}
                    onMouseLeave={() => setHoveredPartBtn(null)}
                    style={{
                      background: isBtnHovered ? MAROON : "transparent",
                      border: `1px solid ${isBtnHovered ? MAROON : "rgba(255,255,255,0.45)"}`,
                      color: "#fff",
                      borderRadius: "8px",
                      padding: "8px 18px",
                      fontWeight: 600,
                      fontSize: "13px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Beli Part Ini →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── 4. BUNDEL ── */}
        <div
          style={{
            background: "rgba(101,24,24,0.15)",
            border: `2px solid ${MAROON}`,
            borderRadius: "20px",
            padding: "clamp(32px,5vw,52px)",
            marginBottom: "32px",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: 0,
              right: "clamp(20px,4vw,36px)",
              background: GOLD,
              color: "#1a0800",
              padding: "6px 18px",
              borderRadius: "0 0 12px 12px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            PALING HEMAT
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Kiri */}
            <div>
              <h2
                style={{
                  color: "#fff",
                  fontSize: "clamp(26px,3.5vw,36px)",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                Bundel Lengkap
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "15px",
                  marginBottom: "24px",
                }}
              >
                Semua Part 1–4 — 12 video utama + bonus teaser
              </p>

              <div className="flex items-baseline flex-wrap gap-4 mb-4">
                <span
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    fontSize: "20px",
                    textDecoration: "line-through",
                  }}
                >
                  Rp 406.000
                </span>
                <span
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "clamp(38px,5vw,56px)",
                    lineHeight: 1,
                  }}
                >
                  Rp 249.000
                </span>
              </div>

              <span
                style={{
                  background: "rgba(212,168,87,0.15)",
                  color: GOLD,
                  border: `1px solid ${GOLD}`,
                  padding: "6px 16px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: 700,
                  display: "inline-block",
                }}
              >
                HEMAT Rp 157.000
              </span>
            </div>

            {/* Kanan */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {bundleFeatures.map((f, i) => (
                <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: GOLD, fontWeight: 700, flexShrink: 0, fontSize: "16px" }}>
                    ✓
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: "1.5" }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-10">
            <button
              onMouseEnter={() => setHoveredBundleBtn(true)}
              onMouseLeave={() => setHoveredBundleBtn(false)}
              style={{
                background: MAROON,
                border: "none",
                color: "#fff",
                borderRadius: "12px",
                padding: "16px 52px",
                fontWeight: 700,
                fontSize: "17px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                letterSpacing: "0.02em",
                boxShadow: hoveredBundleBtn
                  ? "0 10px 32px rgba(101,24,24,0.55)"
                  : "none",
                transform: hoveredBundleBtn ? "translateY(-2px)" : "translateY(0)",
                filter: hoveredBundleBtn ? "brightness(1.15)" : "none",
              }}
            >
              Ambil Bundel Sekarang →
            </button>
          </div>
        </div>

        {/* ── 5. KELAS INTENSIF ── */}
        <div
          style={{
            background: "linear-gradient(135deg, #3D0F0F 0%, #651818 100%)",
            border: `1px solid ${GOLD}`,
            borderRadius: "20px",
            padding: "clamp(32px,5vw,52px)",
            marginBottom: "48px",
          }}
        >
          <div className="text-center mb-10">
            <span
              style={{
                background: "rgba(212,168,87,0.15)",
                color: GOLD,
                border: `1px solid ${GOLD}`,
                padding: "5px 16px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                display: "inline-block",
                marginBottom: "20px",
              }}
            >
              PREMIUM · LIVE ZOOM
            </span>
            <h2
              style={{
                color: "#fff",
                fontSize: "clamp(28px,4vw,42px)",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              Catalyst Analysis
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "16px",
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              Kelas live untuk cari saham yang berpotensi naik ratusan persen — bareng aku dan investor lain.
            </p>
          </div>

          {/* Mini cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {intensiveFeatures.map(({ Icon, title, sub }, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  padding: "24px 20px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "12px",
                  }}
                >
                  <Icon />
                </div>
                <p
                  style={{ color: "#fff", fontWeight: 600, fontSize: "14px", marginBottom: "6px" }}
                >
                  {title}
                </p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", margin: 0 }}>
                  {sub}
                </p>
              </div>
            ))}
          </div>

          {/* Harga & status */}
          <div className="text-center mb-8">
            <p
              style={{
                color: GOLD,
                fontSize: "clamp(18px,2.5vw,24px)",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              Rp 500.000 – Rp 1.000.000 per batch
            </p>
            <span
              style={{
                background: "rgba(212,168,87,0.12)",
                color: GOLD,
                border: `1px solid ${GOLD}`,
                padding: "6px 20px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: 600,
                display: "inline-block",
              }}
            >
              Batch Berikutnya: Coming Soon
            </span>
          </div>

          {/* Waitlist form */}
          <div style={{ maxWidth: "480px", margin: "0 auto", textAlign: "center" }}>
            {waitlistSubmitted ? (
              <p style={{ color: GOLD, fontWeight: 600, fontSize: "16px" }}>
                ✓ Kamu sudah masuk waiting list! Kami kabari saat batch berikutnya dibuka.
              </p>
            ) : (
              <>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setWaitlistSubmitted(true);
                  }}
                  className="flex flex-wrap gap-2 mb-3"
                >
                  <input
                    type="email"
                    required
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    placeholder="Email kamu..."
                    style={{
                      flex: "1 1 200px",
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      borderRadius: "8px",
                      padding: "12px 16px",
                      color: "#fff",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                  <button
                    type="submit"
                    onMouseEnter={() => setHoveredWaitBtn(true)}
                    onMouseLeave={() => setHoveredWaitBtn(false)}
                    style={{
                      background: hoveredWaitBtn ? GOLD : "transparent",
                      border: `2px solid ${GOLD}`,
                      color: hoveredWaitBtn ? "#1a0800" : GOLD,
                      borderRadius: "8px",
                      padding: "12px 20px",
                      fontWeight: 600,
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Daftar Waiting List
                  </button>
                </form>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", margin: 0 }}>
                  Kami kabari saat batch berikutnya dibuka.
                </p>
              </>
            )}
          </div>
        </div>

        {/* ── 6. DISCLAIMER ── */}
        <p
          style={{
            color: "rgba(255,255,255,0.38)",
            fontSize: "12px",
            textAlign: "center",
            margin: 0,
          }}
        >
          Konten edukasi — bukan rekomendasi investasi. Keputusan investasi ada di tangan Anda.
        </p>
      </div>
    </section>
  );
}
