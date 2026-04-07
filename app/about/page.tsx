import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "關於我 | 神鍵墨客 林成翰",
  description: "林成翰完整履歷 — 台大資工、15+年經驗、趨勢科技、中信銀行、東森集團",
};

const experience = [
  {
    period: "2021/6 — 現在",
    title: "技術經理暨資深軟體開發主管",
    company: "昱科網路股份有限公司",
    type: "full",
    tags: ["React", "Node.js", "Docker", "Scrum", "AI"],
    achievements: [
      "帶領 5 前端 + 4 後端工程師，負責完整開發生命周期",
      "建置 CI/CD 流程，自動化測試覆蓋率超過 80%",
      "打造「戀愛小秘書 Nami」，成功促成超過 10,000 對配對",
      "完成全台最大匿名聊天室「尋夢園」，逾百個聊天室",
      "推動 Docker 容器化與 Scrum 敏捷開發流程",
    ],
  },
  {
    period: "2018/9 — 2021/5",
    title: "特助暨全端工程師",
    company: "MyGo商學苑 · 平安房屋仲介",
    type: "full",
    tags: ["React", "AI", "Node.js", "大數據", "地籍資料"],
    achievements: [
      "帶領 5 人前端團隊，導入全台 500 萬筆地籍資料",
      "整合地圖資訊與都市計畫，打造開發商專用土地估價系統",
      "AI 決策系統整合政府不動產登記資料",
      "系統資料庫價值超過千萬，每筆土地成交金額動輒億元",
      "真實參與房屋土地買賣並成交數筆海外房產",
    ],
  },
  {
    period: "2017/9 — 2018/9",
    title: "技術專長經理",
    company: "中國信託商業銀行",
    type: "full",
    tags: ["Python", "FinTech", "量化交易", "風控", "大數據"],
    achievements: [
      "帶領 5 人後端團隊開發交易與風控系統",
      "開發自動理財顧問系統，年化報酬 10~17%",
      "金融爬蟲、外匯自動交易軟體研發",
      "金融大數據分析與建模，資安管理",
    ],
  },
  {
    period: "2016/10 — 2017/9",
    title: "軟體專案經理",
    company: "東森得易購股份有限公司",
    type: "full",
    tags: ["Java", "Spring", "Hadoop", "AWS", "Jenkins"],
    achievements: [
      "主導新聞雲、電商平台、即時輿情監控架構與後端開發",
      "Hadoop + HBase 建立實時用戶行為分析平台",
      "Solr 即時關鍵字追蹤，準確分析新聞、論壇與社群情緒",
      "Jenkins CI/CD + Cloudflare CDN + LINE Notify 異常警報",
      "系統查詢延遲優化至毫秒等級",
    ],
  },
  {
    period: "2014/8 — 2016/10",
    title: "首席資深工程師",
    company: "雷影資訊股份有限公司",
    type: "full",
    tags: ["Java", "JSP", "MSSQL", "高頻交易", "風控"],
    achievements: [
      "維護與開發權證、期貨與做市交易平台",
      "高併發低延遲自動化做市系統，可即時報價與下單",
      "完整風控模組：交易前驗證、即時風險監控、異常偵測",
      "零容錯標準運行於高頻交易時段",
    ],
  },
  {
    period: "2011/10 — 2014/7",
    title: "資深軟體工程師",
    company: "趨勢科技股份有限公司",
    type: "star",
    tags: ["C/C++", "Python", "APT防禦", "大數據", "資安"],
    achievements: [
      "主導大數據分析專案，設計優化大規模資料處理流程",
      "開發防毒、反垃圾郵件與 APT 防禦系統",
      "Email Spam 防禦系統攔截率達 99.9%，獲美國專利，Gmail 採用",
      "取得中華電信資安程式設計師認證",
    ],
  },
  {
    period: "2009/9 — 2010/8",
    title: "砲兵射擊指揮技術資訊官",
    company: "中華民國陸軍砲兵學校",
    type: "special",
    tags: ["VB", "系統重構", "彈道計算", "國防自主"],
    achievements: [
      "自研砲兵射擊指揮系統，重現美軍原預計以 3 億元出售之功能",
      "整合彈道計算、射角預測、氣象修正等演算邏輯",
      "程式超過 20 萬行，每日 6 點至 22 點全力投入",
    ],
  },
];

const specialAchievements = [
  {
    icon: "♟",
    title: "全國象棋冠軍 · 六段",
    desc: "建中象棋社社長、台大象棋社副社長。帶領社員多次奪得全國冠軍，最高紀錄可同時與 7 人下盲棋。",
    color: "cyan",
  },
  {
    icon: "📮",
    title: "Gmail 採用的美國專利",
    desc: "在趨勢科技主導開發 Email Spam 防禦系統，攔截率 99.9%，獲得美國專利，目前 Gmail 採用此技術。",
    color: "red",
  },
  {
    icon: "🎮",
    title: "8591 練功大師",
    desc: "業餘遊戲工作室經營者，在網路世界管理數千位打手，經營虛擬遊戲代練產業，精通遊戲外掛撰寫。",
    color: "green",
  },
  {
    icon: "🏦",
    title: "FinTech 年化報酬 17%",
    desc: "自動理財機器人，透過爬蟲收集公開資料，自動演算最佳化投資組合，年化報酬 10~17%。",
    color: "cyan",
  },
];

const techStack = {
  "程式語言": ["TypeScript", "JavaScript", "Python", "Java", "C/C++", "Go", "PHP", "Erlang", "VB/VC", "Perl", "C#"],
  "前端框架": ["React", "Next.js", "Vue.js", "Angular", "jQuery", "Redux", "Webpack"],
  "後端框架": ["Node.js", "Express", "NestJS", "Spring", "Django", "Flask", "Laravel"],
  "資料庫": ["MongoDB", "PostgreSQL", "MySQL", "MSSQL", "Redis", "HBase", "Cassandra", "NoSQL"],
  "雲端 & DevOps": ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Nginx"],
  "AI & 大數據": ["TensorFlow", "Rasa-X", "Hadoop", "Kafka", "RabbitMQ", "NLP", "Big Data"],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-[rgba(0,255,65,0.4)] text-xs tracking-widest mb-3">&gt; ABOUT.EXE</p>
          <h1 className="glitch text-4xl sm:text-5xl font-bold neon-green mb-4" data-text="林成翰">
            林成翰
          </h1>
          <p className="text-[rgba(0,255,255,0.7)] tracking-[0.3em] text-lg mb-2">SHAWN LIN</p>
          <p className="text-[rgba(0,255,65,0.45)] text-sm tracking-widest">
            技術經理 · 資深全端工程師 · 軟體顧問 · 練功大師
          </p>
        </div>

        {/* Profile + Bio */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {/* Photo */}
          <div className="lg:col-span-1 flex flex-col items-center gap-6">
            <div className="relative w-56 h-56">
              <div className="absolute inset-0 border border-[rgba(0,255,65,0.3)] rotate-2" />
              <div className="absolute inset-0 border border-[rgba(0,255,255,0.15)] -rotate-2" />
              <Image
                src="/godkey.png"
                alt="林成翰 Shawn Lin"
                fill
                sizes="224px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Quick info */}
            <div className="hack-card w-full p-4 space-y-2.5 text-sm">
              {[
                ["EMAIL", "newlin76710@gmail.com"],
                ["學歷", "國立台灣大學 資訊工程系"],
                ["現職", "昱科網路 · 技術經理"],
                ["年資", "15~16 年工作經歷"],
                ["語言", "中文 · 英文 · 台語 (精通)"],
                ["地點", "台北市文山區"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3">
                  <span className="text-[rgba(0,255,65,0.4)] w-16 shrink-0 text-xs">{k}</span>
                  <span className="text-[rgba(0,255,65,0.75)] text-xs">{v}</span>
                </div>
              ))}
            </div>

            {/* Cert image */}
            <div className="relative w-full h-36 overflow-hidden hack-card">
              <Image
                src="/cert.jpg"
                alt="中華電信資安認證"
                fill
                sizes="(max-width: 1024px) 100vw, 300px"
                className="object-cover opacity-60 hover:opacity-90 transition-opacity"
              />
              <div className="absolute bottom-2 left-3 text-[10px] text-[rgba(0,255,65,0.7)] tracking-wider">
                中華電信資安認證
              </div>
            </div>
          </div>

          {/* Self intro */}
          <div className="lg:col-span-2 space-y-5">
            <div className="hack-card p-6">
              <p className="text-[rgba(0,255,65,0.4)] text-xs tracking-widest mb-4">&gt; BIOGRAPHY.TXT</p>
              <div className="space-y-4 text-[rgba(0,255,65,0.65)] text-sm leading-relaxed">
                <p>
                  民國 76 年出生於台北。18 歲畢業於<span className="text-[#00ff41]">建國中學</span>，
                  22 歲取得<span className="text-[#00ff41]">國立台灣大學資訊工程學士學位</span>。
                  父親為台灣大學資管所博士、曾任上海麗嬰房集團總經理；母親畢業於台大會計研究所。
                </p>
                <p>
                  在軍中擔任資訊官時，接手超過 20 萬行的砲兵射擊指揮系統，
                  每日 6 點工作至 22 點，一年內程式功力大幅精進。
                  這段磨練成為日後所有技術成就的基石。
                </p>
                <p>
                  在<span className="text-[#00ff41]">趨勢科技</span>三年期間，
                  深諳駭客行為與資安防禦，主導開發 Email Spam 防禦系統，
                  獲得<span className="text-[#ff0040]">美國專利</span>，目前 Gmail 採用此技術。
                </p>
                <p>
                  擅長象棋，可同時與多人下盲棋，全國段位甲組六段冠軍。
                  邏輯與數理能力極強，能快速掌握任何新技術。
                </p>
              </div>
            </div>

            {/* Interview image */}
            <div className="relative w-full h-44 overflow-hidden hack-card">
              <Image
                src="/interview.jpg"
                alt="東森至台大校園專訪"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover opacity-50 hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-4 text-xs text-[rgba(0,255,65,0.8)] tracking-wider">
                東森新聞台大校園專訪
              </div>
            </div>
          </div>
        </div>

        {/* Special Achievements */}
        <div className="mb-20">
          <p className="text-[rgba(0,255,65,0.4)] text-xs tracking-widest mb-3">&gt; ACHIEVEMENTS.LOG</p>
          <h2 className="text-2xl font-bold text-[#00ff41] mb-8">特殊成就</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {specialAchievements.map((a) => (
              <div key={a.title} className="hack-card p-6">
                <div className="text-3xl mb-3">{a.icon}</div>
                <h3 className={`font-bold mb-2 ${
                  a.color === "red" ? "text-[#ff0040]" :
                  a.color === "cyan" ? "text-[rgba(0,255,255,0.8)]" :
                  "text-[#00ff41]"
                }`}>{a.title}</h3>
                <p className="text-[rgba(0,255,65,0.55)] text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Timeline */}
        <div className="mb-20">
          <p className="text-[rgba(0,255,65,0.4)] text-xs tracking-widest mb-3">&gt; EXPERIENCE.LOG</p>
          <h2 className="text-2xl font-bold text-[#00ff41] mb-8">工作經歷</h2>

          <div className="relative">
            <div className="timeline-line absolute left-4 sm:left-8 top-0 bottom-0" />

            <div className="space-y-8">
              {experience.map((job) => (
                <div key={job.period} className="relative pl-12 sm:pl-20">
                  {/* Dot */}
                  <div className={`absolute left-2.5 sm:left-6 top-1.5 w-3 h-3 rounded-full border-2 ${
                    job.type === "star" ? "border-[#ff0040] bg-[rgba(255,0,64,0.3)]" :
                    job.type === "special" ? "border-[rgba(0,255,255,0.7)] bg-[rgba(0,255,255,0.1)]" :
                    "border-[#00ff41] bg-[rgba(0,255,65,0.1)]"
                  }`} />

                  <div className="hack-card p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="text-[rgba(0,255,65,0.4)] text-xs tracking-widest mb-1">{job.period}</div>
                        <h3 className="text-[#00ff41] font-bold text-base">{job.title}</h3>
                        <p className="text-[rgba(0,255,255,0.6)] text-xs mt-0.5">{job.company}</p>
                      </div>
                      {job.type === "star" && (
                        <span className="hack-tag-red hack-tag text-[10px]">★ 美國專利</span>
                      )}
                    </div>

                    <ul className="space-y-1.5 mb-3">
                      {job.achievements.map((a) => (
                        <li key={a} className="text-[rgba(0,255,65,0.55)] text-xs flex gap-2">
                          <span className="text-[rgba(0,255,65,0.3)] shrink-0">›</span>
                          {a}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {job.tags.map((t) => (
                        <span key={t} className="hack-tag text-[10px]">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <p className="text-[rgba(0,255,65,0.4)] text-xs tracking-widest mb-3">&gt; TECH_STACK.JSON</p>
          <h2 className="text-2xl font-bold text-[#00ff41] mb-8">技術棧</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(techStack).map(([cat, items]) => (
              <div key={cat} className="hack-card p-5">
                <h3 className="text-[rgba(0,255,255,0.7)] text-xs tracking-widest mb-3 uppercase">{cat}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span key={item} className="hack-tag text-[10px]">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <p className="text-[rgba(0,255,65,0.4)] text-xs tracking-widest mb-3">&gt; EDUCATION.TXT</p>
          <h2 className="text-2xl font-bold text-[#00ff41] mb-6">學歷</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                school: "國立台灣大學",
                dept: "資訊工程學系",
                degree: "大學畢業",
                period: "2005/9 — 2009/6",
                note: "指導教授許舜欽（電腦象棋之父），台大羽球校隊、象棋社副社長",
              },
              {
                school: "建國中學",
                dept: "一般高中",
                degree: "高中畢業",
                period: "2002/9 — 2005/6",
                note: "象棋社社長，帶隊連續兩年獲全國高中組亞軍",
              },
            ].map((e) => (
              <div key={e.school} className="hack-card p-5">
                <div className="text-[rgba(0,255,65,0.4)] text-xs mb-1">{e.period}</div>
                <div className="text-[#00ff41] font-bold">{e.school}</div>
                <div className="text-[rgba(0,255,255,0.6)] text-sm">{e.dept} · {e.degree}</div>
                <div className="text-[rgba(0,255,65,0.45)] text-xs mt-2">{e.note}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
