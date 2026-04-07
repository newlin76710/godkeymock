import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        matrix: "#00ff41",
        cyan: "#00ffff",
        red: { hack: "#ff0040" },
        dark: {
          900: "#000000",
          800: "#050505",
          700: "#0a0a0a",
          600: "#111111",
          500: "#1a1a1a",
        },
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', '"Courier New"', "monospace"],
      },
      animation: {
        "glitch-1": "glitch1 2s infinite",
        "glitch-2": "glitch2 2s infinite",
        blink: "blink 1s step-end infinite",
        scanline: "scanline 8s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        "neon-pulse": "neonPulse 2s ease-in-out infinite",
        matrix: "matrixDrop 2s linear infinite",
        flicker: "flicker 0.15s infinite",
      },
      keyframes: {
        glitch1: {
          "0%, 100%": { clipPath: "inset(0 0 98% 0)", transform: "translateX(0)" },
          "20%": { clipPath: "inset(30% 0 50% 0)", transform: "translateX(-4px)" },
          "40%": { clipPath: "inset(60% 0 20% 0)", transform: "translateX(4px)" },
          "60%": { clipPath: "inset(10% 0 80% 0)", transform: "translateX(-2px)" },
          "80%": { clipPath: "inset(70% 0 10% 0)", transform: "translateX(2px)" },
        },
        glitch2: {
          "0%, 100%": { clipPath: "inset(98% 0 0 0)", transform: "translateX(0)" },
          "20%": { clipPath: "inset(50% 0 30% 0)", transform: "translateX(4px)" },
          "40%": { clipPath: "inset(20% 0 60% 0)", transform: "translateX(-4px)" },
          "60%": { clipPath: "inset(80% 0 10% 0)", transform: "translateX(2px)" },
          "80%": { clipPath: "inset(10% 0 70% 0)", transform: "translateX(-2px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        neonPulse: {
          "0%, 100%": { textShadow: "0 0 4px #00ff41, 0 0 10px #00ff41, 0 0 20px #00ff41" },
          "50%": { textShadow: "0 0 8px #00ff41, 0 0 20px #00ff41, 0 0 40px #00ff41, 0 0 60px #00ff41" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      backgroundImage: {
        "grid-green": "linear-gradient(rgba(0,255,65,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.05) 1px, transparent 1px)",
        "noise": "url('/noise.svg')",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        "neon-green": "0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 20px #00ff41",
        "neon-cyan": "0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff",
        "neon-red": "0 0 5px #ff0040, 0 0 10px #ff0040, 0 0 20px #ff0040",
        "card": "0 0 1px rgba(0,255,65,0.3), inset 0 0 20px rgba(0,255,65,0.02)",
      },
    },
  },
  plugins: [],
};

export default config;
