"use client";

import React, { useState } from "react";
import { MapPin } from "lucide-react";

export default function OperationsPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const items = [
    {
      title: "Turkana County (Primary Hub)",
      badge: "68% Conflict Reduction",
      desc: "HQ Lodwar. Primary operational base. Leads oil corridor mediation, inter-county dialogue councils (Pokot/Baringo), and SMS early warning dispatch hubs.",
      nodeName: "TURKANA",
      x: 180,
      y: 200
    },
    {
      title: "Karamoja Cluster (Kenya-Uganda Border)",
      badge: "12 Peace Markets Active",
      desc: "Kenya-Uganda Border. Administers cross-border dry-season grazing treaties between Turkana & Karimojong, peace markets, and shared borehole access.",
      nodeName: "KARAMOJA",
      x: 80,
      y: 220
    },
    {
      title: "Toposa Corridor (Kenya-South Sudan Border)",
      badge: "2,400+ Youth Engaged",
      desc: "Toposa Corridor (Kenya-South Sudan). Manages heavy trade pathways, cross-border animal theft monitoring, and inter-clan youth sports peace brigades.",
      nodeName: "SOUTHSUDAN",
      x: 100,
      y: 70
    },
    {
      title: "Nyangatom Corridor (Kenya-Ethiopia Border)",
      badge: "85 Women Circles Established",
      desc: "Nyangatom Corridor (Kenya-Ethiopia). Supports Omo valley traditional grazing structures, kraal conflict resolution courts, and multi-agency border coordination.",
      nodeName: "ETHIOPIA",
      x: 230,
      y: 90
    }
  ];

  const handleToggle = (idx: number) => {
    setSelectedIdx(selectedIdx === idx ? null : idx);
  };

  return (
    <section id="where-we-work" className="border-y border-ink/10 bg-[#f5f0ea] py-20 text-ink lg:py-28">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[0.92fr_1fr]">
        {/* Left column: Controls and info */}
        <div>
          <div className="max-w-[620px]">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-leaf">Operational Coverage</span>
            <h2 className="mt-2 text-4xl font-black leading-[1.02] tracking-normal text-ink sm:text-5xl">
              Interactive Regional Operations Corridor
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-graphite/78">
              Pulsing operational zones representing border checkpoints, shared dry-season grazing corridors, and RPDN early warning infrastructure.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {items.map((item, idx) => {
              const isActive = idx === selectedIdx;
              return (
                <button
                  key={item.title}
                  onClick={() => handleToggle(idx)}
                  className={`w-full text-left flex flex-col gap-4 rounded-lg border px-5 py-4 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-transparent bg-forest text-paper shadow-[0_12px_28px_rgba(16,42,46,0.18)] -translate-y-0.5"
                      : "border-ink/10 bg-[#fbf7f2] text-ink hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(16,42,46,0.08)]"
                  }`}
                >
                  <div className="flex w-full items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={isActive ? "text-gold" : "text-leaf"}>
                        <MapPin className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-black leading-snug">{item.title}</p>
                    </div>
                    <span
                      className={`inline-flex items-center justify-center rounded-md px-3 py-1.5 text-[9px] font-black uppercase leading-4 tracking-normal whitespace-nowrap ${
                        isActive
                          ? "bg-paper/20 text-paper"
                          : "bg-leaf/10 text-leaf"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column: Map Card Container */}
        <div className="relative bg-[#fbf7f2]/80 p-6 rounded-3xl border border-[#6B8F5E]/15 shadow-xl w-full max-w-[500px] aspect-[4/5] overflow-hidden mx-auto flex flex-col justify-between">
          {/* Map Area */}
          <div className="relative flex-1 w-full">
            <svg viewBox="0 0 350 400" className="w-full h-full text-leaf/10">
              <defs>
                <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#6B8F5E" opacity="0.1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#map-grid)" />

              {/* Shaded Area Polygon (Dashed Boundary) */}
              <path
                d="M 80,220 L 180,200 L 230,90 L 100,70 Z"
                fill="rgba(107, 143, 94, 0.04)"
                stroke="#6B8F5E"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Corridor Lines (connecting primary hub to the other 3) */}
              <line x1="80" y1="220" x2="180" y2="200" stroke="#B8965A" strokeWidth="2" opacity="0.6" />
              <line x1="100" y1="70" x2="180" y2="200" stroke="#B8965A" strokeWidth="2" opacity="0.6" />
              <line x1="230" y1="90" x2="180" y2="200" stroke="#B8965A" strokeWidth="2" opacity="0.6" />

              {/* Interactive Nodes (Groups) */}
              {items.map((item, idx) => {
                const isActive = idx === selectedIdx;
                return (
                  <g
                    key={item.title}
                    className="cursor-pointer"
                    onClick={() => handleToggle(idx)}
                  >
                    {/* Pulse circle (Shooting Balloon) */}
                    <circle
                      cx={item.x}
                      cy={item.y}
                      r="12"
                      className={`${
                        isActive ? "fill-[#B8965A]/35" : "fill-[#6B8F5E]/30"
                      } animate-ping`}
                    />

                    {/* Solid Point Circle */}
                    <circle
                      cx={item.x}
                      cy={item.y}
                      r="6"
                      className={`transition-colors duration-300 ${
                        isActive ? "fill-[#B8965A] stroke-[#6B8F5E] stroke-2" : "fill-[#6B8F5E]"
                      }`}
                    />
                    {/* Label Text */}
                    <text
                      x={item.x}
                      y={item.y - 12}
                      textAnchor="middle"
                      className={`font-sans text-[9px] font-bold tracking-wider transition-all duration-300 ${
                        isActive ? "fill-ink font-black scale-105" : "fill-graphite/80"
                      }`}
                    >
                      {item.nodeName}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Details Card absolute overlay at the bottom of the card wrapper */}
          {selectedIdx !== null && (
            <div className="absolute bottom-6 left-6 right-6 bg-[#f5f0ea]/80 backdrop-blur-md p-5 rounded-2xl shadow-xl z-10 border border-[#6B8F5E]/20 text-xs flex flex-col gap-2 transition-all duration-300">
              <div className="flex items-start justify-between gap-4 border-b border-[#6B8F5E]/20 pb-1.5">
                <span className="font-serif text-sm font-extrabold text-[#102a2e]">
                  {items[selectedIdx].title}
                </span>
                <span className="bg-[#6B8F5E] text-white px-2 py-0.5 rounded font-sans text-[9px] font-bold uppercase whitespace-nowrap">
                  {items[selectedIdx].badge}
                </span>
              </div>
              <p className="text-graphite/90 leading-relaxed font-sans text-[11px]">
                {items[selectedIdx].desc}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
