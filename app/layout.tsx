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
  title: "Bimbingan Saham — Dibimbing Sampai Jago",
  description:
    "Belajar saham langsung dari Dosen S3 Ekonomi-Akuntansi. Dari 0 sampai tau cara mainnya — dengan garansi bimbingan seumur hidup.",
  keywords: ["bimbingan saham", "kelas saham", "investasi saham", "belajar saham"],
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
