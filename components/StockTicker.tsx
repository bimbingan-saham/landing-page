import ScrollReveal from "./ScrollReveal";

interface Stock {
  code: string;
  entryPrice: number;
  exitPrice: number;
  pct: number;
  color: string;
}

const stocks: Stock[] = [
  { code: "BUMI", entryPrice: 115,  exitPrice: 422,  pct: 267, color: "#e74c3c" },
  { code: "KETR", entryPrice: 590,  exitPrice: 1480, pct: 151, color: "#3498db" },
  { code: "CUAN", entryPrice: 1890, exitPrice: 2280, pct: 21,  color: "#2ecc71" },
  { code: "TOBA", entryPrice: 860,  exitPrice: 960,  pct: 12,  color: "#f39c12" },
  { code: "APEX", entryPrice: 238,  exitPrice: 314,  pct: 32,  color: "#9b59b6" },
  { code: "GTSI", entryPrice: 302,  exitPrice: 344,  pct: 14,  color: "#1abc9c" },
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
      {/* Initials avatar */}
      <div
        className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-xs"
        style={{ background: stock.color }}
      >
        {stock.code.slice(0, 2)}
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
            Saham dengan Kenaikan Fantastis yang Kami Bahas
          </p>
        </ScrollReveal>
      </div>

      {/* mask-image fades edges regardless of background color */}
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
