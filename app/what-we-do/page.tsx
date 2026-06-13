import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const programs = [
  {
    title: "Peacebuilding and Conflict Transformation",
    text: "Community dialogue, peace education, mediation, reconciliation, cross-border diplomacy, early warning systems, and anti-cattle rustling initiatives."
  },
  {
    title: "Governance and Civic Participation",
    text: "Civic education, leadership development, governance strengthening, policy advocacy, social accountability, and citizen participation."
  },
  {
    title: "Sustainable Livelihoods and Economic Empowerment",
    text: "Vocational skills development, entrepreneurship, climate-smart agriculture, pastoralist support, fisheries development, and women's economic empowerment."
  },
  {
    title: "Gender Equality and Social Inclusion",
    text: "Women's leadership development, prevention and response to gender-based violence, girls' empowerment, and disability inclusion programming."
  },
  {
    title: "Humanitarian Response and Resilience",
    text: "Emergency relief assistance, food security and nutrition programs, Water, sanitation, and hygiene (WASH), disaster preparedness, and community resilience."
  },
  {
    title: "Youth Development and Social Transformation",
    text: "Youth leadership and mentorship, sports for peace initiatives, skills development and employability, and countering violent extremism."
  },
  {
    title: "Research, Learning, and Institutional Development",
    text: "Applied research and policy analysis, community-based studies, Monitoring, Evaluation, Accountability, and Learning (MEAL), and organizational capacity strengthening."
  }
];

const pillars = [
  "Peacebuilding, Governance, and Social Cohesion",
  "Early Warning, Conflict Prevention, and Community Protection",
  "Youth Empowerment and Social Transformation",
  "Climate Resilience and Sustainable Livelihoods",
  "Institutional Strengthening and Strategic Partnerships"
];

export default function WhatWeDo() {
  return (
    <>
      <Header />
      <main className="bg-paper min-h-screen text-ink">
        {/* Page Hero */}
        <section className="bg-bone border-b border-ink/10 py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-clay">Strategic Execution</span>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-normal sm:text-6xl max-w-4xl text-ink">
              What We Do
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-graphite/80">
              Integrated program areas and strategic pillars designed to enhance human dignity, foster resilience, and build long-term stability.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="text-xs font-black uppercase tracking-[0.12em] text-clay">Our 7 Core Program Areas</span>
              <h2 className="mt-2 text-3xl font-black text-ink leading-tight">
                Addressing root drivers of insecurity and economic vulnerability.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {programs.map((program, index) => (
                <article
                  key={program.title}
                  className="min-h-72 rounded-sm border border-ink/10 bg-[#fbf7f2] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="text-sm font-black text-clay">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-14 text-2xl font-black leading-tight text-ink">{program.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-graphite/72">{program.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars Banner */}
        <section className="bg-forest py-20 text-paper lg:py-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-8 grid gap-12 lg:grid-cols-[0.92fr_1fr]">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.12em] text-gold">Strategic Pillars</span>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-normal sm:text-5xl text-paper">
                Built for regional credibility and measurable delivery.
              </h2>
            </div>
            <div className="border-t border-paper/20">
              {pillars.map((pillar, index) => (
                <div key={pillar} className="grid grid-cols-[3rem_1fr] gap-5 border-b border-paper/20 py-6">
                  <span className="font-black text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-xl font-black leading-tight text-paper">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
