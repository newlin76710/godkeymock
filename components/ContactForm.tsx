"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setFormState("sending");
    try {
      const endpoint = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          _replyto: email,
          purpose,
          message,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.errors?.[0]?.message ?? "發送失敗，請稍後再試");
        setFormState("error");
      } else {
        setFormState("success");
        setName(""); setEmail(""); setPurpose(""); setMessage("");
      }
    } catch {
      setErrorMsg("網路錯誤，請稍後再試");
      setFormState("error");
    }
  };

  return (
    <div className="hack-card p-6 sm:p-8">
      <p className="section-label mb-6" style={{ fontFamily: "var(--font-mono)" }}>&gt; 發送訊息</p>

      {formState === "success" ? (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-[#00d964] font-bold text-lg mb-2" style={{ fontFamily: "var(--font-mono)" }}>訊息已送出！</h3>
          <p className="text-[rgba(0,217,100,0.6)] text-sm">感謝您的聯絡，我會盡快回覆。</p>
          <button
            onClick={() => setFormState("idle")}
            className="btn-hack mt-6 px-6 py-2 text-sm"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            再次發送
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[rgba(0,217,100,0.55)] text-xs tracking-widest mb-2" style={{ fontFamily: "var(--font-mono)" }}>
              姓名 *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="請輸入您的姓名"
              className="hack-input w-full px-4 py-3 text-sm"
            />
          </div>

          <div>
            <label className="block text-[rgba(0,217,100,0.55)] text-xs tracking-widest mb-2" style={{ fontFamily: "var(--font-mono)" }}>
              Email *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="hack-input w-full px-4 py-3 text-sm"
            />
          </div>

          <div>
            <label className="block text-[rgba(0,217,100,0.55)] text-xs tracking-widest mb-2" style={{ fontFamily: "var(--font-mono)" }}>
              聯絡目的
            </label>
            <select
              value={purpose}
              onChange={e => setPurpose(e.target.value)}
              className="hack-input w-full px-4 py-3 text-sm bg-[rgba(0,217,100,0.02)]"
            >
              <option value="" className="bg-[#07090e]">請選擇目的</option>
              <option value="job" className="bg-[#07090e]">工作機會</option>
              <option value="project" className="bg-[#07090e]">專案合作</option>
              <option value="consulting" className="bg-[#07090e]">技術顧問</option>
              <option value="other" className="bg-[#07090e]">其他</option>
            </select>
          </div>

          <div>
            <label className="block text-[rgba(0,217,100,0.55)] text-xs tracking-widest mb-2" style={{ fontFamily: "var(--font-mono)" }}>
              訊息內容 *
            </label>
            <textarea
              required
              rows={5}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="請說明您的需求或想法..."
              className="hack-input w-full px-4 py-3 text-sm resize-none"
            />
          </div>

          {formState === "error" && (
            <p className="text-[rgba(255,51,102,0.85)] text-xs">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={formState === "sending"}
            className="btn-hack w-full py-3.5 text-sm tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {formState === "sending" ? "發送中..." : "發送訊息 →"}
          </button>
        </form>
      )}

      <p className="text-[rgba(0,217,100,0.25)] text-xs mt-4 text-center">
        或直接發信至 newlin76710@gmail.com
      </p>
    </div>
  );
}
