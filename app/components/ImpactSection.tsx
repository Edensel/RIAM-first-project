"use client";

import React, { useState } from "react";
import { TrendingDown, ShoppingBag, Users, Heart, ShieldCheck, Sprout, Quote } from "lucide-react";

interface Story {
  tabTitle: string;
  title: string;
  badge: string;
  icon: React.ReactNode;
  body: string;
  stat: string;
  statLabel: string;
}

export default function ImpactSection() {
  const [activeTab, setActiveTab] = useState(0);

  const metrics = [
    {
      value: "68%",
      label: "Conflict Reduction",
      desc: "Decrease in armed border clashes and livestock theft via proactive dialogue councils and early warnings.",
      icon: <TrendingDown className="h-6 w-6 text-gold" />
    },
    {
      value: "12",
      label: "Active Peace Markets",
      desc: "Inter-communal trading centers established to foster cross-border economic cooperation.",
      icon: <ShoppingBag className="h-6 w-6 text-gold" />
    },
    {
      value: "2,400+",
      label: "Youth Peace Leaders",
      desc: "Pastoral youth engaged in alternative livelihoods, sports brigades, and crime prevention.",
      icon: <Users className="h-6 w-6 text-gold" />
    },
    {
      value: "85+",
      label: "Women Peace Circles",
      desc: "Local women-led structures mediating disputes and leading community advocacy.",
      icon: <Heart className="h-6 w-6 text-gold" />
    }
  ];

  const stories: Story[] = [
    {
      tabTitle: "Reconciliation",
      title: "Restoring Peace Through Community Reconciliation",
      badge: "Dialogue & Treaty",
      icon: <ShieldCheck className="h-10 w-10 text-teal" />,
      body: "RIAMRIAM facilitated dialogue and mediation processes between pastoralist communities affected by recurring conflict and mistrust. Through inclusive engagement involving elders, women, youth, and local leaders, communities reached peaceful coexistence agreements, strengthened relationships, and established local monitoring committees to prevent future clashes.",
      stat: "100%",
      statLabel: "Grazing Treaty Adherence"
    },
    {
      tabTitle: "Women Leadership",
      title: "Women as Champions of Peace",
      badge: "Empowerment & Inclusion",
      icon: <Heart className="h-10 w-10 text-teal" />,
      body: "Women supported through RIAMRIAM's leadership and peacebuilding initiatives have emerged as influential advocates for dialogue, mediation, and social cohesion. Their increased participation in traditional structures has strengthened community decision-making and contributed to more inclusive, lasting peace agreements.",
      stat: "85+",
      statLabel: "Active Mediation Circles"
    },
    {
      tabTitle: "Youth Pathways",
      title: "Empowering Youth for Positive Change",
      badge: "Alternative Livelihoods",
      icon: <Users className="h-10 w-10 text-teal" />,
      body: "Through entrepreneurship support, vocational training, and mentorship programs, young people have gained skills, confidence, and economic opportunities. This reduces their vulnerability to crime, cattle rustling, and violence while enabling them to become active contributors to community development and stability.",
      stat: "2,400+",
      statLabel: "Ambassadors Engaged"
    },
    {
      tabTitle: "Climate Resilience",
      title: "Building Climate Resilience Among Pastoralists",
      badge: "Resource Security",
      icon: <Sprout className="h-10 w-10 text-teal" />,
      body: "Pastoral households supported through resilience and livelihood initiatives have adopted improved livestock practices, diversified income sources, and built water harvesting solutions. This increases capacity to withstand droughts and environmental shocks, reducing resource-based conflicts.",
      stat: "7+",
      statLabel: "Borderland Zones Secured"
    }
  ];

  return (
    <section id="impact" className="bg-bone py-20 lg:py-28 text-ink">
      <div className="section-shell">
        
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <span className="text-xs font-black uppercase tracking-[0.18em] text-clay">Proven Impact & Achievements</span>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-normal sm:text-6xl text-ink">
            Delivering measurable stability across East African borderlands.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite/80">
            Guided by the 2026 RPDN Strategic Plan, our indicators show verified progress in reducing violence, building economic trust, and securing resources.
          </p>
        </div>

        {/* Metric Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {metrics.map((metric) => (
            <div 
              key={metric.label} 
              className="bg-paper border border-ink/10 rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl lg:text-5xl font-black text-teal tracking-tight">{metric.value}</span>
                  <div className="bg-gold/10 p-2 rounded-lg">
                    {metric.icon}
                  </div>
                </div>
                <h3 className="text-base font-black text-ink mb-2">{metric.label}</h3>
                <p className="text-xs leading-relaxed text-graphite/76">{metric.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabbed Case Studies Section */}
        <div className="border border-ink/10 bg-[#f5f0ea] rounded-2xl p-6 lg:p-10 shadow-soft">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[250px_1fr] items-start">
            
            {/* Tabs Left */}
            <div className="w-full flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-ink/10 pr-0 lg:pr-6">
              {stories.map((story, idx) => {
                const isActive = idx === activeTab;
                return (
                  <button
                    key={story.tabTitle}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap lg:whitespace-normal ${
                      isActive 
                        ? "bg-teal text-white shadow-md font-bold"
                        : "bg-paper/40 text-ink hover:bg-paper/80 font-bold"
                    }`}
                  >
                    {story.tabTitle}
                  </button>
                );
              })}
            </div>

            {/* Tab Content Right */}
            <div className="flex-grow space-y-6 w-full">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/15 pb-4">
                <div className="flex items-center gap-4">
                  <div className="bg-teal/10 p-2.5 rounded-xl shrink-0">
                    {stories[activeTab].icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-clay">
                      {stories[activeTab].badge}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-black text-ink mt-0.5 leading-tight">
                      {stories[activeTab].title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -left-2 -top-4 h-12 w-12 text-teal/5 opacity-40 select-none pointer-events-none" />
                <p className="text-sm lg:text-base leading-relaxed text-graphite/90 font-serif pl-6 italic">
                  {stories[activeTab].body}
                </p>
              </div>

              <div className="flex items-center gap-6 bg-paper/60 border border-ink/5 p-4 rounded-xl max-w-md mt-6">
                <div>
                  <span className="block text-3xl font-black text-teal">{stories[activeTab].stat}</span>
                  <span className="block text-[10px] font-black uppercase text-clay mt-1">
                    {stories[activeTab].statLabel}
                  </span>
                </div>
                <div className="text-xs text-graphite/70 leading-relaxed border-l border-ink/10 pl-6">
                  Verified impact marker aligned with United Nations SDG 16 (Peace, Justice, and Strong Institutions).
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
