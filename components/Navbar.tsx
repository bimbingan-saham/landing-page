"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "Kelas", href: "#kelas" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F1E42]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-[#0F1E42]/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 bg-transparent">
          <Image
            src="/images/Logo Dark Mode Navy Horizontal.png"
            alt="Bimbingan Saham"
            width={200}
            height={48}
            className="h-12 w-auto object-contain bg-transparent"
            style={{ background: "transparent" }}
            placeholder="empty"
            priority
          />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-white/80 hover:text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#kelas"
            className="px-5 py-2.5 bg-[#651818] hover:bg-[#7d2020] text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#651818]/30 hover:-translate-y-0.5"
          >
            Daftar Sekarang
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}
      >
        <div className="bg-[#0F1E42]/98 backdrop-blur-md px-5 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 text-white/80 hover:text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kelas"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 px-4 py-2.5 bg-[#651818] hover:bg-[#7d2020] text-white text-sm font-semibold rounded-lg transition-all text-center"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </header>
  );
}
