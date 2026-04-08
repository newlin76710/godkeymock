import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],   // AVIF 優先，WebP fallback
    deviceSizes: [640, 828, 1080, 1200],     // 移除 750(≈828)、1920(無全寬圖)
    imageSizes: [64, 128, 256, 384],         // 移除 16/32/48/96，本站圖片最小 ~200px
    minimumCacheTTL: 31536000,               // 轉換結果快取 1 年
    dangerouslyAllowSVG: false,              // 禁止 SVG 注入
    contentDispositionType: "inline",        // 直接顯示不下載
    remotePatterns: [],                      // 只允許本地圖片
  },

  async headers() {
    return [
      // ── 靜態資源：永久快取 ──────────────────────────────
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(.*)\\.(png|jpg|jpeg|gif|webp|avif|ico|svg|woff|woff2|ttf|otf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // ── HTML 頁面：短期快取 + stale-while-revalidate ────
      {
        source: "/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, s-maxage=60, stale-while-revalidate=300" },
          // Security
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // Edge / CDN 提示
          { key: "Vary", value: "Accept-Encoding" },
        ],
      },
    ];
  },
};

export default nextConfig;
