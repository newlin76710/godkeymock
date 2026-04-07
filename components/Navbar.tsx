"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "// HOME" },
  { href: "/about", label: "// ABOUT" },
  { href: "/projects", label: "// PROJECTS" },
  { href: "/contact", label: "// CONTACT" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 border-b border-[rgba(0,255,65,0.2)] backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-[#00ff41] text-lg font-bold tracking-widest group-hover:neon-green transition-all">
              神鍵墨客
            </span>
            <span className="text-[rgba(0,255,65,0.4)] text-xs hidden sm:block">
              [GODKEYMOCK]
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-widest transition-all duration-200 hover:text-[#00ff41] hover:drop-shadow-[0_0_6px_#00ff41] ${
                  pathname === link.href
                    ? "text-[#00ff41] drop-shadow-[0_0_6px_#00ff41]"
                    : "text-[rgba(0,255,65,0.5)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Status indicator */}
          <div className="hidden md:flex items-center gap-2 text-xs text-[rgba(0,255,65,0.4)]">
            <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse inline-block" />
            ONLINE
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#00ff41] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-lg">{menuOpen ? "[×]" : "[≡]"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/98 border-b border-[rgba(0,255,65,0.2)] px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm tracking-widest border-b border-[rgba(0,255,65,0.08)] transition-all ${
                pathname === link.href
                  ? "text-[#00ff41]"
                  : "text-[rgba(0,255,65,0.5)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
