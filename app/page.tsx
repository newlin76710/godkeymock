import Link from "next/link";
import Image from "next/image";
import MatrixRainLazy from "@/components/MatrixRainLazy";

const stats = [
  { value: "15+", label: "年工作經驗", sub: "Years XP" },
  { value: "100K+", label: "程式碼撰寫", sub: "Couples Matched" },
  { value: "99.9%", label: "垃圾信攔截率", sub: "Spam Blocked" },
  { value: "六段", label: "全國象棋冠軍", sub: "Chess Champion" },
];

const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "Python",
  "Java", "C/C++", "Go", "Docker", "Kubernetes",
  "AWS", "GCP", "MongoDB", "PostgreSQL", "Redis",
  "AI/ML", "FinTech", "CyberSec",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <MatrixRainLazy />
        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-black/50 to-black/85 pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[rgba(0,217,100,0.25)] rounded-full px-5 py-1.5 text-xs tracking-widest text-[rgba(0,217,100,0.55)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d964] animate-pulse" />
            8591 練功大師 × 神鍵墨客
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d964] animate-pulse" />
          </div>

          <h1
            className="glitch text-5xl sm:text-7xl lg:text-8xl font-bold tracking-widest neon-green mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
            data-text="神鍵墨客"
          >
            神鍵墨客
          </h1>

          <div className="text-[rgba(0,229,255,0.7)] text-lg sm:text-2xl tracking-[0.3em] mb-2 neon-cyan" style={{ fontFamily: "var(--font-mono)" }}>
            GODKEYMOCK
          </div>

          <div className="text-[rgba(0,217,100,0.4)] text-sm tracking-[0.4em] mb-8">
            ── 全端開發 · 資安研究 · 技術傳說 ──
          </div>

          <div className="mb-6">
            <p className="text-2xl sm:text-3xl text-[#00d964] tracking-wider">
              林成翰 <span className="text-[rgba(0,217,100,0.45)] text-lg">/ Shawn Lin</span>
            </p>
            <p className="text-[rgba(0,217,100,0.5)] text-sm mt-1 tracking-wider">
              技術經理 · 資深全端工程師 · 軟體顧問
            </p>
          </div>

          <blockquote className="border-l-2 border-r-2 border-[rgba(0,217,100,0.2)] px-6 text-[rgba(0,217,100,0.55)] text-sm sm:text-base italic max-w-xl mx-auto mb-10">
            &ldquo;人生的價值在於創造人生的價值，<br className="hidden sm:block" />
            生命的意義在於活出生命的意義&rdquo;
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/about" className="btn-hack px-8 py-3 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
              關於我
            </Link>
            <Link href="/projects" className="btn-hack px-8 py-3 text-sm tracking-widest uppercase" style={{ borderColor: "rgba(0,229,255,0.4)", color: "rgba(0,229,255,0.8)", fontFamily: "var(--font-mono)" }}>
              專案成就
            </Link>
            <Link href="/contact" className="btn-hack px-8 py-3 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
              聯絡我
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="hack-card p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold neon-green" style={{ fontFamily: "var(--font-mono)" }}>{s.value}</div>
                <div className="text-[rgba(0,217,100,0.8)] text-xs mt-1">{s.label}</div>
                <div className="text-[rgba(0,217,100,0.35)] text-[10px] mt-0.5 tracking-wider">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[rgba(0,217,100,0.3)] text-xs tracking-widest animate-bounce">
          ↓ SCROLL
        </div>
      </section>

      {/* ── QUICK INTRO — 置中單欄 ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-label mb-2" style={{ fontFamily: "var(--font-mono)" }}>&gt; PROFILE.TXT</p>
          <h2 className="text-3xl font-bold text-[#00d964] mb-10" style={{ fontFamily: "var(--font-mono)" }}>我是誰？</h2>

          {/* Photo centered */}
          <div className="flex justify-center mb-10">
            <div className="relative w-96 h-52 sm:w-[512px] sm:h-64">
              <div className="absolute inset-0 border border-[rgba(0,217,100,0.25)] rounded-lg rotate-2" />
              <div className="absolute inset-0 border border-[rgba(0,229,255,0.15)] rounded-lg -rotate-2" />
              <Image
                src="/godkey.png"
                alt="神鍵墨客 林成翰"
                fill
                sizes="(max-width: 640px) 208px, 256px"
                className="object-cover rounded-lg transition-all duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-4 text-[rgba(0,217,100,0.75)] text-sm leading-relaxed mb-8 text-left">
            <p>
              台灣大學資訊工程系畢業，擁有 <span className="text-[#00d964] font-semibold">15+ 年</span>全端開發經驗。
              從趨勢科技的資安研究，到中信銀行的 FinTech 系統，再到帶領團隊打造 AI 配對平台——
              在每個領域都留下了深刻的技術足跡。
            </p>
            <p>
              主導開發 Email Spam 防禦系統，攔截率達 99.9%，獲得<span className="text-[rgba(0,229,255,0.85)]"> 美國專利</span>，
              目前 Gmail 採用此技術。在 8591 遊戲平台享有<span className="text-[#00d964] font-semibold">練功大師</span>美譽。
            </p>
            <p>象棋六段全國冠軍，邏輯思維與技術能力兼備，能快速掌握任何新技術。</p>
          </div>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {skills.map((s) => (
              <span key={s} className="hack-tag">{s}</span>
            ))}
          </div>

          <Link href="/about" className="btn-hack inline-block px-6 py-2.5 text-sm tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
            完整履歷 →
          </Link>
        </div>
      </section>

      {/* ── IDENTITY ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-label mb-3" style={{ fontFamily: "var(--font-mono)" }}>&gt; IDENTITY.LOG</p>
          <h2 className="text-3xl font-bold text-[#00d964] mb-4" style={{ fontFamily: "var(--font-mono)" }}>雙重身份</h2>
          <p className="text-[rgba(0,217,100,0.45)] text-sm mb-12 max-w-lg mx-auto">
            技術世界與現實世界的兩種角色，相輔相成
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="hack-card p-8 text-center">
              <div className="text-3xl mb-3 text-[#00d964] tracking-widest font-bold" style={{ fontFamily: "var(--font-mono)" }}>神鍵墨客</div>
              <div className="text-[rgba(0,229,255,0.5)] text-xs tracking-widest mb-4" style={{ fontFamily: "var(--font-mono)" }}>GODKEYMOCK</div>
              <p className="text-[rgba(0,217,100,0.65)] text-sm leading-relaxed mb-5 text-left">
                精通資安防禦技術，在趨勢科技磨練三年，深入研究 APT 攻擊防禦之道。
                主導開發獲美國專利的 Email 防禦系統，實力獲 Gmail 技術採用肯定。
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["C/C++", "Python", "CyberSec", "APT Defense", "美國專利"].map(t => (
                  <span key={t} className="hack-tag hack-tag-cyan">{t}</span>
                ))}
              </div>
            </div>

            <div className="hack-card p-8 text-center">
              <div className="text-3xl mb-3 text-[#00d964] tracking-widest font-bold" style={{ fontFamily: "var(--font-mono)" }}>練功大師</div>
              <div className="text-[rgba(0,229,255,0.5)] text-xs tracking-widest mb-4" style={{ fontFamily: "var(--font-mono)" }}>TRAINING MASTER · 8591</div>
              <p className="text-[rgba(0,217,100,0.65)] text-sm leading-relaxed mb-5 text-left">
                8591 遊戲平台的知名人物，深諳自動化腳本開發。
                業餘遊戲工作室經營者，將程式技術應用於創業實踐，
                管理大規模虛擬社群的實戰經驗。
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["按鍵精靈", "自動化腳本", "Python Bot", "8591", "虛擬代練"].map(t => (
                  <span key={t} className="hack-tag hack-tag-red">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
