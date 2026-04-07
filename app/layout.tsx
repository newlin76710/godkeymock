import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "神鍵墨客 × 練功大師 | 林成翰 Shawn Lin",
  description:
    "林成翰 (Shawn Lin) — 神鍵墨客、練功大師。台灣大學資工系，15+ 年全端開發經驗。趨勢科技、中信銀行、東森集團技術主管。Gmail 垃圾信防禦專利得主。",
  keywords: [
    "林成翰",
    "Shawn Lin",
    "神鍵墨客",
    "練功大師",
    "全端工程師",
    "技術經理",
    "台灣大學",
    "8591",
  ],
  authors: [{ name: "林成翰 Shawn Lin" }],
  openGraph: {
    title: "神鍵墨客 × 練功大師 | 林成翰 Shawn Lin",
    description: "15+ 年全端開發 | 駭客精神 | 龐克風格",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className={shareTechMono.variable}>
      <body className={`${shareTechMono.className} bg-black text-[#00ff41] antialiased`}>
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
