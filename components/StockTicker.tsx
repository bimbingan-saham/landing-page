import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface Stock {
  code: string;
  entryPrice: number;
  exitPrice: number;
  pct: number;
  color: string;
  logo: string;
}

const stocks: Stock[] = [
  { code: "GTSI", entryPrice: 104,  exitPrice: 400,  pct: 285, color: "#1abc9c", logo: "/images/GTSI.png" },
  { code: "BUMI", entryPrice: 115,  exitPrice: 422,  pct: 267, color: "#e74c3c", logo: "/images/BUMI.png" },
  { code: "KETR", entryPrice: 590,  exitPrice: 1480, pct: 151, color: "#3498db", logo: "/images/KETR.png" },
  { code: "APEX", entryPrice: 130,  exitPrice: 270,  pct: 108, color: "#9b59b6", logo: "/images/APEX.png" },
  { code: "TRIN", entryPrice: 940,  exitPrice: 1600, pct: 70,  color: "#f39c12", logo: "/images/TRIN.png" },
  { code: "TOBA", entryPrice: 800,  exitPrice: 1315, pct: 64,  color: "#f39c12", logo: "/images/TOBA.png" },
];

function fmt(n: number) {
  return n.toLocaleString("id-ID");
}

function TickerCard({ stock }: { stock: Stock }) {
  return (
    <div
      className="flex items-center gap-3 mx-3 px-4 py-3 rounded-2xl flex-shrink-0"
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.15)",
        minWidth: "220px",
      }}
    >
      {/* Logo */}
      <div
        className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-xs overflow-hidden"
        style={{ background: stock.color }}
      >
        <Image
          src={stock.logo}
          alt={stock.code}
          width={40}
          height={40}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col min-w-0">
        <span className="text-white font-bold text-sm leading-none mb-1">
          {stock.code}
        </span>
        <span className="text-white/55 text-xs whitespace-nowrap">
          Rp{fmt(stock.entryPrice)} → Rp{fmt(stock.exitPrice)}
        </span>
      </div>

      {/* Percentage */}
      <div className="ml-auto flex-shrink-0">
        <span className="text-sm font-bold whitespace-nowrap" style={{ color: "#4ade80" }}>
          +{stock.pct}%
        </span>
      </div>
    </div>
  );
}

export default function StockTicker() {
  const doubled = [...stocks, ...stocks];

  return (
    <section className="py-10 overflow-hidden" style={{ background: "rgba(0,0,0,0.18)" }}>
      <div className="max-w-6xl mx-auto px-5 mb-6">
        <ScrollReveal>
          <p className="text-center text-white/60 text-xs font-semibold uppercase tracking-widest">
            Saham yang Terdeteksi Lebih Dulu Lewat Laporan Keuangan
          </p>
        </ScrollReveal>
      </div>

      <div
        className="relative"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="ticker-track">
          {doubled.map((stock, i) => (
            <TickerCard key={`${stock.code}-${i}`} stock={stock} />
          ))}
        </div>
      </div>
    </section>
  );
}
