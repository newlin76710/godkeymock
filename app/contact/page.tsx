import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "聯絡我 | 神鍵墨客 林成翰",
  description: "聯絡林成翰 Shawn Lin — 技術合作、專案諮詢、軟體開發顧問",
};

const contactInfo = [
  {
    label: "EMAIL",
    value: "newlin76710@gmail.com",
    href: "mailto:newlin76710@gmail.com",
    desc: "email 聯絡，09:00~21:00 回覆",
    icon: "📧",
  },
  {
    label: "LOCATION",
    value: "台北市文山區",
    href: null,
    desc: "偏好台北市、新北市新店區，可遠端",
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
    value: "年薪 200~250 萬",
    href: null,
    desc: "資深軟體工程師 / 專案經理 / 顧問",
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
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-[rgba(0,255,65,0.4)] text-xs tracking-widest mb-3">&gt; CONTACT.EXE</p>
          <h1 className="glitch text-4xl sm:text-5xl font-bold neon-green mb-4" data-text="聯絡我">
            聯絡我
          </h1>
          <p className="text-[rgba(0,255,65,0.45)] text-sm max-w-md mx-auto">
            有技術合作、專案諮詢或工作機會？歡迎透過 email 聯繫。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact info */}
          <div className="space-y-6">
            {/* Photo */}
            <div className="relative w-full h-52 hack-card overflow-hidden mb-8">
              <Image
                src="/godkey2.png"
                alt="神鍵墨客 林成翰"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-50 hover:opacity-70 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
              <div className="absolute bottom-4 left-4">
                <p className="text-[#00ff41] font-bold text-lg">林成翰 / Shawn Lin</p>
                <p className="text-[rgba(0,255,65,0.5)] text-xs tracking-widest">神鍵墨客 · 練功大師</p>
              </div>
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              {contactInfo.map((c) => (
                <div key={c.label} className="hack-card p-4 flex gap-4 items-start">
                  <span className="text-2xl shrink-0">{c.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[rgba(0,255,65,0.4)] text-[10px] tracking-widest mb-0.5">{c.label}</div>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-[#00ff41] text-sm font-bold hover:neon-green transition-all break-all"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-[#00ff41] text-sm font-bold">{c.value}</p>
                    )}
                    <p className="text-[rgba(0,255,65,0.4)] text-xs mt-0.5">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Open to roles */}
            <div className="hack-card p-5">
              <p className="text-[rgba(0,255,65,0.4)] text-xs tracking-widest mb-3">&gt; OPEN_TO_ROLES</p>
              <div className="flex flex-wrap gap-2">
                {roles.map((r) => (
                  <span key={r} className="hack-tag text-xs">{r}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Message form */}
          <div className="hack-card p-6 sm:p-8">
            <p className="text-[rgba(0,255,65,0.4)] text-xs tracking-widest mb-6">&gt; SEND_MESSAGE.SH</p>

            <form
              action={`mailto:newlin76710@gmail.com`}
              method="get"
              encType="text/plain"
              className="space-y-5"
            >
              <div>
                <label className="block text-[rgba(0,255,65,0.5)] text-xs tracking-widest mb-2">
                  YOUR_NAME *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="輸入你的名字"
                  className="hack-input w-full px-4 py-3 text-sm"
                />
              </div>

              <div>
                <label className="block text-[rgba(0,255,65,0.5)] text-xs tracking-widest mb-2">
                  YOUR_EMAIL *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="hack-input w-full px-4 py-3 text-sm"
                />
              </div>

              <div>
                <label className="block text-[rgba(0,255,65,0.5)] text-xs tracking-widest mb-2">
                  PURPOSE
                </label>
                <select className="hack-input w-full px-4 py-3 text-sm bg-[rgba(0,255,65,0.03)]">
                  <option value="" className="bg-black">選擇聯絡目的</option>
                  <option value="job" className="bg-black">工作機會</option>
                  <option value="project" className="bg-black">專案合作</option>
                  <option value="consulting" className="bg-black">技術顧問</option>
                  <option value="other" className="bg-black">其他</option>
                </select>
              </div>

              <div>
                <label className="block text-[rgba(0,255,65,0.5)] text-xs tracking-widest mb-2">
                  MESSAGE *
                </label>
                <textarea
                  name="body"
                  required
                  rows={5}
                  placeholder="說說你的需求或想法..."
                  className="hack-input w-full px-4 py-3 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-hack w-full py-3.5 text-sm tracking-widest uppercase"
              >
                [發送訊息] →
              </button>
            </form>

            <p className="text-[rgba(0,255,65,0.25)] text-xs mt-4 text-center">
              或直接發信至 newlin76710@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-20 text-center">
          <div className="inline-block border border-[rgba(0,255,65,0.15)] px-8 py-6">
            <p className="text-[rgba(0,255,65,0.4)] text-xs tracking-widest mb-3">&gt; SYSTEM.QUOTE</p>
            <blockquote className="text-[rgba(0,255,65,0.6)] text-sm sm:text-base italic">
              &ldquo;人生的價值在於創造人生的價值，生命的意義在於活出生命的意義&rdquo;
            </blockquote>
            <p className="text-[rgba(0,255,65,0.3)] text-xs mt-3 tracking-widest">— 林成翰 Shawn Lin</p>
          </div>
        </div>

      </div>
    </div>
  );
}
