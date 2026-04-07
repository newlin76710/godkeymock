import Link from "next/link";
import Image from "next/image";
import MatrixRainLazy from "@/components/MatrixRainLazy";

const stats = [
  { value: "15+", label: "年工作經驗", sub: "Years XP" },
  { value: "10K+", label: "成功配對", sub: "Couples Matched" },
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

        {/* Vignette */}
        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-black/60 to-black/90 pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 border border-[rgba(0,255,65,0.3)] px-4 py-1.5 text-xs tracking-widest text-[rgba(0,255,65,0.6)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse" />
            8591 練功大師 × 神鍵墨客
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse" />
          </div>

          {/* Main glitch title */}
          <h1
            className="glitch text-5xl sm:text-7xl lg:text-8xl font-bold tracking-widest neon-green mb-4"
            data-text="神鍵墨客"
          >
            神鍵墨客
          </h1>

          <div className="text-[rgba(0,255,255,0.8)] text-lg sm:text-2xl tracking-[0.3em] mb-2 neon-cyan">
            GODKEYMOCK
          </div>

          <div className="text-[rgba(0,255,65,0.5)] text-sm tracking-[0.5em] mb-8">
            ── 黑客 · 龐克 · 全端傳說 ──
          </div>

          {/* Name */}
          <div className="mb-6">
            <p className="text-2xl sm:text-3xl text-[#00ff41] tracking-wider">
              林成翰 <span className="text-[rgba(0,255,65,0.5)] text-lg">/ Shawn Lin</span>
            </p>
            <p className="text-[rgba(0,255,65,0.45)] text-sm mt-1 tracking-widest">
              技術經理 · 資深全端工程師 · 軟體顧問
            </p>
          </div>

          {/* Quote */}
          <blockquote className="border-l-2 border-[rgba(0,255,65,0.3)] pl-4 text-[rgba(0,255,65,0.5)] text-sm sm:text-base italic max-w-xl mx-auto mb-10">
            &ldquo;人生的價值在於創造人生的價值，<br className="hidden sm:block" />
            生命的意義在於活出生命的意義&rdquo;
          </blockquote>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/about"
              className="btn-hack px-8 py-3 text-sm tracking-widest uppercase"
            >
              [關於我]
            </Link>
            <Link
              href="/projects"
              className="btn-hack px-8 py-3 text-sm tracking-widest uppercase border-[rgba(0,255,255,0.5)] text-[rgba(0,255,255,0.8)] hover:text-black"
              style={{ borderColor: "rgba(0,255,255,0.5)", color: "rgba(0,255,255,0.8)" }}
            >
              [專案成就]
            </Link>
            <Link
              href="/contact"
              className="btn-hack px-8 py-3 text-sm tracking-widest uppercase"
            >
              [聯絡我]
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="hack-card p-4 text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold neon-green">{s.value}</div>
                <div className="text-[rgba(0,255,65,0.7)] text-xs mt-1">{s.label}</div>
                <div className="text-[rgba(0,255,65,0.3)] text-[10px] mt-0.5 tracking-wider">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[rgba(0,255,65,0.3)] text-xs tracking-widest animate-bounce">
          ↓ SCROLL
        </div>
      </section>

      {/* ── QUICK INTRO ── */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* Rotating border */}
                <div className="absolute inset-0 border border-[rgba(0,255,65,0.3)] rotate-3" />
                <div className="absolute inset-0 border border-[rgba(0,255,255,0.2)] -rotate-3" />
                <Image
                  src="/godkey.png"
                  alt="神鍵墨客 林成翰"
                  fill
                  sizes="(max-width: 640px) 256px, 320px"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-xs text-[rgba(0,255,65,0.7)] tracking-widest">
                  [神鍵墨客.exe]
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <div>
                <p className="text-[rgba(0,255,65,0.4)] text-xs tracking-widest mb-2">
                  &gt; PROFILE.TXT
                </p>
                <h2 className="text-3xl font-bold text-[#00ff41] mb-4">
                  我是誰？
                </h2>
              </div>

              <div className="space-y-3 text-[rgba(0,255,65,0.65)] text-sm leading-relaxed">
                <p>
                  台灣大學資訊工程系畢業，擁有 <span className="text-[#00ff41]">15+ 年</span>全端開發經驗。
                  從趨勢科技的資安研究，到中信銀行的 FinTech 系統，再到帶領團隊打造 AI 配對平台——
                  我在每個戰場都留下了印記。
                </p>
                <p>
                  在 8591 遊戲平台上，我是<span className="text-[#00ff41]">練功大師</span>，
                  精通各式遊戲外掛與按鍵精靈腳本；在現實世界，我是開發過獲 <span className="text-[#ff0040]">Gmail 採用</span>的
                  垃圾信防禦系統的工程師，擁有美國專利。
                </p>
                <p>
                  象棋六段、全國冠軍。邏輯即武器，程式即修行。
                </p>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {skills.map((s) => (
                  <span key={s} className="hack-tag">{s}</span>
                ))}
              </div>

              <Link
                href="/about"
                className="btn-hack inline-block px-6 py-2.5 text-sm tracking-widest"
              >
                完整履歷 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HACKER IDENTITY ── */}
      <section className="relative z-10 py-20 px-4 border-y border-[rgba(0,255,65,0.08)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[rgba(0,255,65,0.4)] text-xs tracking-widest mb-4">&gt; IDENTITY.LOG</p>
          <h2 className="text-3xl font-bold text-[#00ff41] mb-12">雙重身份</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Godkey */}
            <div className="hack-card p-8 group">
              <div className="text-4xl mb-4 text-[#00ff41] tracking-widest font-bold group-hover:neon-pulse">
                神鍵墨客
              </div>
              <div className="text-[rgba(0,255,255,0.6)] text-xs tracking-widest mb-4">GODKEYMOCK</div>
              <p className="text-[rgba(0,255,65,0.55)] text-sm leading-relaxed">
                鍵盤即神器，墨水即程式碼。精通駭客技術與資安防禦，
                在趨勢科技磨練三年，深諳 APT 攻擊與防禦之道。
                程式碼是武器，系統是戰場。
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["C/C++", "Python", "CyberSec", "APT Defense", "美國專利"].map(t => (
                  <span key={t} className="hack-tag-cyan hack-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Trainer */}
            <div className="hack-card p-8 group">
              <div className="text-4xl mb-4 text-[#00ff41] tracking-widest font-bold group-hover:neon-pulse">
                練功大師
              </div>
              <div className="text-[rgba(0,255,255,0.6)] text-xs tracking-widest mb-4">TRAINING MASTER · 8591</div>
              <p className="text-[rgba(0,255,65,0.55)] text-sm leading-relaxed">
                8591 遊戲平台的傳說人物。深夜撰寫遊戲外掛，
                按鍵精靈腳本信手拈來。自動練功、抓寶可夢、
                管理數千位打手——虛擬江湖中的無冕之王。
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["按鍵精靈", "遊戲外掛", "Python Bot", "8591", "虛擬代練"].map(t => (
                  <span key={t} className="hack-tag-red hack-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
