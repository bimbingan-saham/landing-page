"use client";

import ScrollReveal from "./ScrollReveal";

interface Stock {
  code: string;
  entryPrice: number;
  exitPrice: number;
  pct: number;
}

const stocks: Stock[] = [
  { code: "BUMI", entryPrice: 115,  exitPrice: 422,  pct: 267 },
  { code: "KETR", entryPrice: 590,  exitPrice: 1480, pct: 151 },
  { code: "CUAN", entryPrice: 1890, exitPrice: 2280, pct: 21  },
  { code: "TOBA", entryPrice: 860,  exitPrice: 960,  pct: 12  },
  { code: "APEX", entryPrice: 238,  exitPrice: 314,  pct: 32  },
  { code: "GTSI", entryPrice: 302,  exitPrice: 344,  pct: 14  },
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
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-white/10 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://assets.stockbit.com/securities/logos/${stock.code}.png`}
          alt={stock.code}
          width={40}
          height={40}
          className="w-full h-full object-cover rounded-full"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `<span class="text-white font-bold text-xs">${stock.code[0]}</span>`;
            }
          }}
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
        <span
          className="text-sm font-bold whitespace-nowrap"
          style={{ color: "#4ade80" }}
        >
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
            Saham dengan Kenaikan Fantastis yang Kami Bahas
          </p>
        </ScrollReveal>
      </div>

      {/* Fading edges */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0d1e4a, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #3d0f0f, transparent)" }}
        />

        <div className="ticker-track">
          {doubled.map((stock, i) => (
            <TickerCard key={`${stock.code}-${i}`} stock={stock} />
          ))}
        </div>
      </div>
    </section>
  );
}
