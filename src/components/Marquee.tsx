import React from "react";

export default function Marquee() {
  const words = [
    "INNOVACIÓN",
    "SABOR",
    "CALIDAD",
    "GASTRONOMÍA",
    "RESTAURACIÓN",
    "SOSTENIBILIDAD",
    "ESTRATEGIA",
    "MARKETING",
    "CREATIVIDAD",
    "HORECA"
  ];

  // Repeat items to fill width for infinite seamless scrolling
  const list = [...words, ...words, ...words, ...words];

  return (
    <div
      id="marquee-container"
      className="relative w-full overflow-hidden bg-[#B2D3C2] py-4 border-y border-black/10 select-none pointer-events-none"
    >
      <div className="flex w-max items-center animate-marquee whitespace-nowrap">
        {list.map((word, i) => (
          <div key={i} className="flex items-center text-xs sm:text-sm font-display font-black uppercase text-black tracking-widest">
            <span className="mx-6 sm:mx-8">{word}</span>
            <span className="text-black/30 text-lg">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
