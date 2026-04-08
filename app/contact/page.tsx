import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "聯絡我 | 神鍵墨客 林成翰",
  description: "聯絡林成翰 Shawn Lin — 技術合作、專案諮詢、軟體開發顧問",
};

const contactInfo = [
  {
    label: "LOCATION",
    value: "台北市文山區",
    href: null,
    desc: "偏好台北市、新北市，可遠端",
    icon: "📍",
  },
  {
    label: "AVAILABILITY",
    value: "錄取後一週可上班",
    href: null,
    desc: "全職 / 兼職 / 遠端皆有意願",
    icon: "⚡",
  },
  {
    label: "SALARY",
    value: "年薪 依公司規定",
    href: null,
    desc: "資深工程師 / 專案經理 / 顧問",
    icon: "💻",
  },
];

const roles = [
  "資深軟體工程師",
  "工程師專案經理",
  "軟體工程顧問",
  "軟體專案主管",
  "全端工程師",
  "技術架構師",
];

export default function ContactPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <p className="section-label mb-2" style={{ fontFamily: "var(--font-mono)" }}>&gt; CONTACT.EXE</p>
            <h1
              className="glitch text-4xl sm:text-5xl font-bold neon-green mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
              data-text="聯絡我"
            >
              聯絡我
            </h1>
            <div className="section-bar" />
            <p className="text-[rgba(0,217,100,0.55)] text-sm max-w-md mx-auto">
              有技術合作、專案諮詢或工作機會？歡迎透過以下方式聯繫。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact info */}
            <div className="space-y-6">
              {/* Photo */}
              <div className="relative w-full hack-card overflow-hidden mb-8 h-[32rem]">
                <Image
                  src="/godkey2.png"
                  alt="神鍵墨客 林成翰"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-50 hover:opacity-70 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-[#00d964] font-bold text-lg" style={{ fontFamily: "var(--font-mono)" }}>林成翰 / Shawn Lin</p>
                  <p className="text-[rgba(0,217,100,0.5)] text-xs tracking-widest">神鍵墨客 · 練功大師</p>
                </div>
              </div>

              {/* Contact cards */}
              <div className="space-y-3">
                {contactInfo.map((c) => (
                  <div key={c.label} className="hack-card p-4 flex gap-4 items-start">
                    <span className="text-2xl shrink-0">{c.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-[rgba(0,217,100,0.4)] text-[10px] tracking-widest mb-0.5"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {c.label}
                      </div>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="text-[#00d964] text-sm font-semibold hover:text-[rgba(0,229,255,0.9)] transition-colors break-all"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-[#00d964] text-sm font-semibold">{c.value}</p>
                      )}
                      <p className="text-[rgba(0,217,100,0.45)] text-xs mt-0.5">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Open to roles */}
              <div className="hack-card p-5">
                <p className="section-label mb-3" style={{ fontFamily: "var(--font-mono)" }}>&gt; 開放機會</p>
                <div className="flex flex-wrap gap-2">
                  {roles.map((r) => (
                    <span key={r} className="hack-tag text-xs">{r}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Message form — client component */}
            <ContactForm />
          </div>

          {/* Bottom quote */}
          <div className="mt-20 text-center">
            <div className="inline-block border border-[rgba(0,217,100,0.12)] rounded-lg px-8 py-6 max-w-xl">
              <p className="section-label mb-3" style={{ fontFamily: "var(--font-mono)" }}>&gt; SYSTEM.QUOTE</p>
              <blockquote className="text-[rgba(0,217,100,0.65)] text-sm sm:text-base italic">
                &ldquo;人生的價值在於創造人生的價值，生命的意義在於活出生命的意義&rdquo;
              </blockquote>
              <p className="text-[rgba(0,217,100,0.35)] text-xs mt-3">— 林成翰 Shawn Lin</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
