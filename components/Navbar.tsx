"use client";

import { useEffect, useRef, useState } from "react";

const desktopLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "Belajar Sekarang", href: "#produk" },
  { label: "FAQ", href: "#faq" },
];

const mobileDropdownLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
  { label: "Gabung Grup Bimbingan", href: "https://discord.com/invite/yfHt2Y9Ccd", target: "_blank", rel: "noopener noreferrer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F1E42]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-[#0F1E42]/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Bimbingan Saham White Logo.png"
            alt="Bimbingan Saham"
            className="h-16 w-56 object-contain"
          />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {desktopLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-white/80 hover:text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-all duration-200"
                style={
                  link.href === "#produk"
                    ? { border: "1px solid #D4A857", borderRadius: "6px", padding: "6px 16px", color: "#D4A857" }
                    : undefined
                }
                onMouseEnter={(e) => {
                  if (link.href === "#produk")
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(212,168,87,0.15)";
                }}
                onMouseLeave={(e) => {
                  if (link.href === "#produk")
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://discord.com/invite/yfHt2Y9Ccd"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#651818] hover:bg-[#7d2020] text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#651818]/30 hover:-translate-y-0.5"
          >
            Gabung Grup Bimbingan
          </a>
        </div>

        {/* Mobile: Belajar Sekarang + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="#produk"
            style={{
              border: "1px solid #D4A857",
              borderRadius: "6px",
              padding: "6px 14px",
              color: "#D4A857",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "background 0.2s ease",
            }}
          >
            Belajar Sekarang
          </a>
          <button
            className="p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-48" : "max-h-0"}`}
        style={{ background: "rgba(10,16,40,0.95)", backdropFilter: "blur(12px)" }}
      >
        <div className="px-5 py-3 space-y-1">
          {mobileDropdownLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={"target" in link ? link.target : undefined}
              rel={"rel" in link ? link.rel : undefined}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 text-white/80 hover:text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
