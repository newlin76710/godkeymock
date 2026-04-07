import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "專案成就 | 神鍵墨客 林成翰",
  description: "林成翰的代表性專案：AI配對平台、土地大數據、FinTech系統、尋夢園聊天室、練功大師",
};

const projects = [
  {
    id: "nami",
    title: "戀愛小秘書 Nami",
    subtitle: "eros戀語 · 愛情 AI 平台",
    period: "2021 — 現在",
    company: "昱科網路",
    image: "/hack.jpg",
    tags: ["React", "AI", "大數據", "Node.js", "配對算法"],
    color: "cyan",
    stats: [{ v: "10,000+", l: "成功配對" }, { v: "AI", l: "偏好分析" }],
    desc: "從零打造 AI 愛情媒合平台。運用大數據分析使用者偏好，成功促成超過一萬對配對。提供線上戀愛諮詢與線下聯誼服務，打造每位用戶的專屬戀愛小秘書。",
    highlights: [
      "AI 大數據分析使用者行為與偏好",
      "線上戀愛教學攻略與線下相親見面",
      "個人化配對算法，顯著提升成功率",
    ],
  },
  {
    id: "dreamfinder",
    title: "尋夢園聊天室",
    subtitle: "全台最大匿名聊天平台",
    period: "2021 — 現在",
    company: "昱科網路",
    image: "/hack.jpg",
    tags: ["WebSocket", "Node.js", "React", "Redis", "即時通訊"],
    color: "red",
    stats: [{ v: "100+", l: "聊天室" }, { v: "即時", l: "互動功能" }],
    desc: "全台最大匿名聊天室平台，提供超過百個聊天室。具備炸彈丟擲、踢人、卡拉OK、私訊等互動功能，促進用戶間即興有趣的交流互動。",
    highlights: [
      "超過 100 個主題聊天室",
      "炸彈、踢人、卡拉OK等特色互動功能",
      "大規模即時通訊架構",
    ],
  },
  {
    id: "land",
    title: "土地大數據分析系統",
    subtitle: "AI 土地估價 · 開發商決策平台",
    period: "2018 — 2021",
    company: "MyGo商學苑 · 平安房屋",
    image: "/hack.jpg",
    tags: ["React", "AI", "GIS", "Node.js", "地籍資料", "大數據"],
    color: "green",
    stats: [{ v: "500萬+", l: "地籍筆數" }, { v: "億元+", l: "成交金額" }],
    desc: "利用實價登錄資料，導入 AI 產生自動估價，讓建商參考每坪房價。具備大量調閱謄本功能，地圖顯示當前國家政府計畫區、法拍資料、國土計畫等。",
    highlights: [
      "全台超過 500 萬筆地籍與謄本資料",
      "AI 自動估價，開發商投資決策支援",
      "整合都市計畫分區、國有地、饋線等政府資料",
      "自動產生潛在買家清單，後台自動寄送開發信",
    ],
  },
  {
    id: "spam",
    title: "Email Spam 防禦系統",
    subtitle: "美國專利 · Gmail 採用技術",
    period: "2011 — 2014",
    company: "趨勢科技",
    image: "/cert.jpg",
    tags: ["C/C++", "Python", "APT防禦", "Machine Learning", "資安"],
    color: "red",
    stats: [{ v: "99.9%", l: "攔截率" }, { v: "US", l: "美國專利" }],
    desc: "主導開發 Email Spam 防禦系統，攔截率達 99.9%，成功申請美國專利，目前 Gmail 採用此技術。同期開發防毒、反垃圾郵件與 APT 防禦系統。",
    highlights: [
      "99.9% 垃圾信攔截率",
      "獲得美國專利，Gmail 現役技術",
      "APT 進階持續性威脅防禦系統",
      "取得中華電信資安程式設計師認證",
    ],
  },
  {
    id: "fintech",
    title: "自動理財機器人",
    subtitle: "FinTech · 量化投資 · 年化報酬 17%",
    period: "2017 — 2018",
    company: "中國信託商業銀行",
    image: "/hack.jpg",
    tags: ["Python", "R", "量化交易", "爬蟲", "風控", "外匯"],
    color: "cyan",
    stats: [{ v: "17%", l: "年化報酬" }, { v: "自動化", l: "投資組合" }],
    desc: "透過爬蟲收集網路公開資料（期貨、選擇權、外匯等），自動演算最佳化投資組合，不斷回測與 rebalance，找出可年投報 17% 之投資策略。",
    highlights: [
      "自動化投資組合優化系統",
      "金融大數據分析與建模",
      "外匯自動交易軟體研發",
      "高頻交易系統 (C#) 開發",
    ],
  },
  {
    id: "artillery",
    title: "砲兵射擊指揮系統",
    subtitle: "國防自主 · 重現 3 億元美軍系統",
    period: "2009 — 2010",
    company: "中華民國陸軍砲兵學校",
    image: "/hack.jpg",
    tags: ["Visual Basic", "彈道計算", "系統架構", "國防"],
    color: "green",
    stats: [{ v: "20萬+", l: "程式碼行數" }, { v: "3億", l: "等效價值" }],
    desc: "使用 VB 自研砲兵射擊指揮系統，成功重現美軍原預計以新台幣 3 億元出售之功能，實現國防自主。整合彈道計算、射角預測、氣象修正等演算邏輯。",
    highlights: [
      "超過 20 萬行程式碼",
      "重現價值 3 億的美軍系統功能",
      "彈道計算、射角預測、氣象修正",
      "每日 6:00 — 22:00 全力投入超過半年",
    ],
  },
  {
    id: "trainer",
    title: "練功大師 YouTube 頻道",
    subtitle: "8591 · 按鍵精靈 · 遊戲外掛教學",
    period: "長期進行中",
    company: "個人",
    image: "/lianggong.png",
    tags: ["按鍵精靈", "Python", "遊戲外掛", "YouTube", "8591"],
    color: "green",
    stats: [{ v: "8591", l: "平台傳說" }, { v: "千人+", l: "管理打手" }],
    desc: "8591 遊戲平台的練功大師。線上教學如何利用按鍵精靈撰寫各式遊戲或 LINE 外掛。業餘遊戲工作室，管理數千位打手，經營虛擬遊戲代練產業。",
    highlights: [
      "按鍵精靈自動化腳本教學",
      "各式遊戲外掛開發 (Python)",
      "虛擬代練與遊戲經濟研究",
      "YouTube 頻道線上教學",
    ],
  },
  {
    id: "rainbow",
    title: "彩虹數字命運網站",
    subtitle: "易經 · 生命靈數 · 命運解析",
    period: "2022 — 現在",
    company: "個人專案",
    image: "/godkey2.png",
    tags: ["Next.js", "React", "命理", "AI", "易經"],
    color: "cyan",
    stats: [{ v: "命理", l: "大數據" }, { v: "西方+東方", l: "融合算法" }],
    desc: "利用西方彩虹數字與中國古老易經，結合生辰八字與命運機會，讓你的人生更加富足。融合東西方命理學的現代數位平台。",
    highlights: [
      "西方彩虹數字學系統",
      "中國易經八字分析",
      "個人化命運解析報告",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-[rgba(0,255,65,0.4)] text-xs tracking-widest mb-3">&gt; PROJECTS.LOG</p>
          <h1 className="glitch text-4xl sm:text-5xl font-bold neon-green mb-4" data-text="專案成就">
            專案成就
          </h1>
          <p className="text-[rgba(0,255,65,0.45)] text-sm max-w-xl mx-auto">
            15 年橫跨資安、FinTech、AI、電商、社交平台的代表性作品
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.id} className="hack-card group overflow-hidden">
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
                {/* Period badge */}
                <div className="absolute top-3 right-3 text-[10px] tracking-widest text-[rgba(0,255,65,0.5)] border border-[rgba(0,255,65,0.2)] px-2 py-0.5 bg-black/60">
                  {p.period}
                </div>
                {/* Company */}
                <div className="absolute bottom-3 left-4 text-[10px] text-[rgba(0,255,65,0.5)] tracking-wider">
                  {p.company}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-3">
                  <h2 className={`font-bold text-lg mb-0.5 ${
                    p.color === "red" ? "text-[#ff0040]" :
                    p.color === "cyan" ? "text-[rgba(0,255,255,0.85)]" :
                    "text-[#00ff41]"
                  }`}>{p.title}</h2>
                  <p className="text-[rgba(0,255,65,0.4)] text-xs tracking-wide">{p.subtitle}</p>
                </div>

                {/* Stats */}
                <div className="flex gap-4 mb-4">
                  {p.stats.map((s) => (
                    <div key={s.l} className="text-center">
                      <div className="text-[#00ff41] font-bold text-base">{s.v}</div>
                      <div className="text-[rgba(0,255,65,0.4)] text-[10px]">{s.l}</div>
                    </div>
                  ))}
                </div>

                <p className="text-[rgba(0,255,65,0.55)] text-sm leading-relaxed mb-4">{p.desc}</p>

                {/* Highlights */}
                <ul className="space-y-1 mb-4">
                  {p.highlights.map((h) => (
                    <li key={h} className="text-[rgba(0,255,65,0.45)] text-xs flex gap-2">
                      <span className="text-[rgba(0,255,65,0.3)] shrink-0">›</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className={`hack-tag text-[10px] ${
                      p.color === "red" ? "hack-tag-red" :
                      p.color === "cyan" ? "hack-tag-cyan" : ""
                    }`}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-[rgba(0,255,65,0.4)] text-sm mb-6">
            想了解更多或洽談合作？
          </p>
          <Link href="/contact" className="btn-hack px-8 py-3 text-sm tracking-widest">
            [聯絡我]
          </Link>
        </div>

      </div>
    </div>
  );
}
