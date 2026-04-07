"use client";

import dynamic from "next/dynamic";

const MatrixRain = dynamic(() => import("./MatrixRain"), { ssr: false });

export default function MatrixRainLazy() {
  return <MatrixRain />;
}
