import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bimbingan Saham — Catalyst Analysis: Baca Laporan Keuangan, Temukan Multi-Bagger",
  description:
    "Pelajari Catalyst Analysis — metode untuk menemukan katalis pertumbuhan perusahaan dari laporan keuangan. Video course oleh Dosen Ekonomi & Akuntansi. Akses seumur hidup.",
  keywords: ["bimbingan saham", "catalyst analysis", "laporan keuangan", "belajar saham", "investasi saham", "video course saham"],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
