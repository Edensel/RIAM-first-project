"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Shield, Target, Compass, Heart, Users, CheckCircle, Scale, Calendar, ArrowRight } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2000",
    title: "Grassroots Foundation",
    description: "RIAMRIAM was established as a localized grassroots peace coalition to address escalating cross-border conflicts and cattle rustling within the Karamoja cluster of the Ateker corridor."
  },
  {
    year: "2012",
    title: "Landmark Accords",
    description: "Facilitated historic traditional resource-sharing treaties and inter-communal dialogue forums along the Kenya-Uganda border, establishing cultural conflict resolution protocols."
  },
  {
    year: "2020",
    title: "Integrated Resilience Framework",
    description: "Expanded institutional programming to address environmental conflict drivers, launching joint climate adaptation and sustainable pastoralist livelihoods initiatives."
  },
  {
    year: "2026",
    title: "Strategic Revitalization",
    description: "Re-engineered as the RIAMRIAM Peace and Development Network (RPDN), introducing a robust 3-tiered governance model to manage international partnerships and regional stability."
  }
];

interface ValueItem {
  title: string;
  desc: string;
  icon: any;
}

const values: ValueItem[] = [
  {
    title: "Peace and Non-Violence",
    desc: "Advocating for peaceful conflict resolution, structural mediation, and non-violent engagement as primary paths to sustainable regional development.",
    icon: Shield
  },
  {
    title: "Integrity and Accountability",
    desc: "Maintaining absolute transparency in institutional operations, fiduciary oversight, and resource management across all local and international projects.",
    icon: Scale
  },
  {
    title: "Human Dignity and Respect",
    desc: "Protecting human rights, safeguarding vulnerable borderland communities, and honoring cultural heritage and indigenous conflict-resolution structures.",
    icon: Heart
  },
  {
    title: "Inclusivity and Equity",
    desc: "Ensuring that marginalized pastoralists, women, youth, and persons with disabilities are active stakeholders in decision-making and project benefits.",
    icon: Users
  },
  {
    title: "Community Ownership",
    desc: "Championing locally led peace and development initiatives by involving kraal councils and local traditional leaders in project design and implementation.",
    icon: CheckCircle
  },
  {
    title: "Gender and Social Justice",
    desc: "Empowering women peace circles and advocating for gender-transformative approaches to resource management, governance, and violence prevention.",
    icon: Compass
  }
];

export default function WhoWeAre() {
  const [activeIdentity, setActiveIdentity] = useState<"vision" | "mission" | "model">("vision");

  return (
    <>
      <Header />
      <main className="bg-bone min-h-screen text-ink">
        {/* Page Hero - Split Layout */}
        <section className="relative overflow-hidden bg-forest py-20 text-paper lg:py-28">
          <div className="absolute inset-0 -z-30 bg-[linear-gradient(100deg,rgba(16,42,46,0.99)_0%,rgba(16,42,46,0.93)_48%,rgba(7,82,103,0.85)_100%)]" />
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

          <div className="section-shell">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div>
                <span className="mb-4 inline-block text-xs font-black uppercase tracking-[0.25em] text-gold">
                  Who We Are
                </span>
                <h1 className="text-4xl font-black leading-tight tracking-normal sm:text-6xl">
                  A Legitimate Voice
                  <br />
                  for Borderland Peace.
                </h1>
                <p className="mt-6 text-base leading-relaxed text-paper/85 font-medium">
                  RIAMRIAM Peace and Development Network (RPDN) is a community-driven Civil Society Organization 
                  operating across Kenya and the wider East African Ateker corridor. We bridge the gap between 
                  traditional conflict resolution systems and modern developmental governance to foster long-term 
                  stability and resilience among pastoralist communities.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a 
                    href="/contact" 
                    className="inline-flex rounded-lg bg-gold px-6 py-4 text-xs font-black uppercase text-ink transition hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Partner with RPDN
                  </a>
                  <a 
                    href="/what-we-do" 
                    className="inline-flex rounded-lg border border-paper/20 bg-paper/5 px-6 py-4 text-xs font-black uppercase text-paper transition hover:bg-paper/10"
                  >
                    Explore Our Programs
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-paper/20 bg-ink/10 p-2 shadow-2xl">
                  <img
                    src="/images/turkana_peace_dialogue.png"
                    alt="Turkana Peace Dialogue gathering under a large acacia tree at golden hour"
                    className="w-full h-[360px] object-cover rounded-xl"
                  />
                  <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-ink/85 border border-paper/15 p-4 backdrop-blur-sm">
                    <p className="text-[11px] font-black uppercase tracking-wider text-gold">Grassroots Legitimacy</p>
                    <p className="mt-1 text-[10px] leading-normal text-paper/80">
                      Community members and traditional elders gathering under an acacia tree to establish mutual resource-sharing treaties along border corridors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section & Interactive Core Mandate */}
        <section className="py-20 lg:py-28 bg-paper border-b border-ink/10">
          <div className="section-shell">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.1em] text-clay">Background & Origin</p>
                <h2 className="text-3xl font-black text-ink leading-tight sm:text-4xl">
                  Meeting and meeting again for peace.
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-graphite/80">
                  The name "RiamRiam" is drawn directly from Ateker cultural traditions. It translates to "meeting and meeting again", 
                  symbolizing continuous dialogue, negotiation, and peaceful dispute resolution. Our motto, "Building Peace. 
                  Empowering Communities. Transforming Lives," guides every intervention.
                </p>
              </div>

              {/* Interactive Vision / Mission Selector */}
              <div className="rounded-2xl border border-ink/10 bg-[#faf6ed]/40 p-6 md:p-8">
                <div className="flex gap-2 border-b border-ink/10 pb-4">
                  <button
                    onClick={() => setActiveIdentity("vision")}
                    className={`rounded-lg px-4 py-2 text-xs font-black uppercase tracking-wider transition ${
                      activeIdentity === "vision" ? "bg-forest text-paper" : "bg-bone hover:bg-ink/5 text-graphite"
                    }`}
                  >
                    Our Vision
                  </button>
                  <button
                    onClick={() => setActiveIdentity("mission")}
                    className={`rounded-lg px-4 py-2 text-xs font-black uppercase tracking-wider transition ${
                      activeIdentity === "mission" ? "bg-teal text-paper" : "bg-bone hover:bg-ink/5 text-graphite"
                    }`}
                  >
                    Our Mission
                  </button>
                  <button
                    onClick={() => setActiveIdentity("model")}
                    className={`rounded-lg px-4 py-2 text-xs font-black uppercase tracking-wider transition ${
                      activeIdentity === "model" ? "bg-clay text-paper" : "bg-bone hover:bg-ink/5 text-graphite"
                    }`}
                  >
                    The Model
                  </button>
                </div>

                <div className="mt-6 min-h-[120px]">
                  {activeIdentity === "vision" && (
                    <div>
                      <h3 className="text-lg font-black text-ink">A Prosperous East Africa</h3>
                      <p className="mt-3 text-sm leading-relaxed text-graphite/85">
                        We envision a peaceful, resilient, inclusive, and prosperous East Africa where borderland 
                        communities live in dignity, coexist harmoniously, and enjoy equitable opportunities for sustainable 
                        and conflict-free development.
                      </p>
                    </div>
                  )}

                  {activeIdentity === "mission" && (
                    <div>
                      <h3 className="text-lg font-black text-ink">Locally Led Advocacy & Adaptation</h3>
                      <p className="mt-3 text-sm leading-relaxed text-graphite/85">
                        Our mission is to advance sustainable peace, social cohesion, and community resilience through 
                        locally led peacebuilding, humanitarian action, inclusive governance, climate adaptation, and sustainable 
                        livelihood interventions that transform lives and strengthen vulnerable communities across the Ateker Corridor and beyond.
                      </p>
                    </div>
                  )}

                  {activeIdentity === "model" && (
                    <div>
                      <h3 className="text-lg font-black text-ink">Cultural and Modern Nexus</h3>
                      <p className="mt-3 text-sm leading-relaxed text-graphite/85">
                        RPDN operates at the intersection of traditional kraal courts and formal public administration. By 
                        linking county governance with customary local protocols, we establish grazing patterns and security 
                        warning networks that are trusted by communities and verified by authorities.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Timeline */}
        <section className="py-20 lg:py-28">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.1em] text-clay">Our Journey</p>
              <h2 className="text-3xl font-black text-ink leading-tight sm:text-5xl">
                A History of Regional Commitment
              </h2>
              <p className="mt-4 text-base leading-relaxed text-graphite/75">
                Over more than two decades, RPDN has transitioned from a local peace initiative to a prominent regional network.
              </p>
            </div>

            {/* Timeline Cards */}
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {timeline.map((item) => (
                <div 
                  key={item.year} 
                  className="group relative flex flex-col justify-between rounded-xl border border-ink/10 bg-paper p-6 transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-clay/10 text-clay border border-clay/15">
                        <Calendar className="h-4 w-4" />
                      </span>
                      <span className="font-serif text-2xl font-black text-clay">{item.year}</span>
                    </div>
                    <h3 className="mt-6 text-base font-black text-ink leading-tight group-hover:text-teal transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-graphite/75">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 lg:py-28 bg-paper border-t border-ink/10">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.1em] text-clay font-black">Our Foundation</p>
              <h2 className="text-3xl font-black text-ink leading-tight sm:text-5xl">
                Core Institutional Values
              </h2>
              <p className="mt-4 text-base leading-relaxed text-graphite/75">
                These principles guide our programmatic actions, coordinate our governance, and preserve trust among 
                the pastoralist communities we represent.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <div 
                    key={val.title} 
                    className="flex flex-col justify-between rounded-2xl border border-ink/10 bg-[#faf6ed]/20 p-6 transition-all duration-300 hover:shadow-soft"
                  >
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 text-teal border border-teal/15">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-6 text-base font-black leading-tight text-ink">{val.title}</h3>
                      <p className="mt-3 text-xs leading-relaxed text-graphite/75">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* UN SDG Alignment section */}
        <section className="py-20 bg-forest text-paper">
          <div className="section-shell">
            <div className="lg:flex lg:items-center lg:justify-between lg:gap-16">
              <div className="max-w-3xl">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-gold">Global Alignment</span>
                <h2 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">
                  Strategic Alignment with UN SDGs
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-paper/80">
                  RPDN aligns its field operations, research projects, and peace-building models with the United Nations Sustainable Development Goals. By integrating local custom with global targets, we secure international credibility.
                </p>
                
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-paper/10 bg-ink/20 p-4">
                    <h3 className="text-xs font-black uppercase tracking-wider text-gold">SDG 16: Peace & Justice</h3>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-paper/75">
                      Establishing early warning systems, local peace committees, and inter-community border grazing councils.
                    </p>
                  </div>
                  <div className="rounded-xl border border-paper/10 bg-ink/20 p-4">
                    <h3 className="text-xs font-black uppercase tracking-wider text-gold">SDG 13: Climate Action</h3>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-paper/75">
                      Developing dryland water systems, climate resilience frameworks, and resource-sharing structures.
                    </p>
                  </div>
                  <div className="rounded-xl border border-paper/10 bg-ink/20 p-4">
                    <h3 className="text-xs font-black uppercase tracking-wider text-gold">SDG 5: Gender Equality</h3>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-paper/75">
                      Ensuring women peace champions are central to mediation networks and political oversight.
                    </p>
                  </div>
                  <div className="rounded-xl border border-paper/10 bg-ink/20 p-4">
                    <h3 className="text-xs font-black uppercase tracking-wider text-gold">SDG 17: Partnerships</h3>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-paper/75">
                      Coordinating joint cross-border interventions with IGAD, UNDP, USAID, and regional governments.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0 shrink-0 bg-ink/40 p-8 rounded-2xl border border-paper/10 max-w-sm">
                <h3 className="font-serif text-lg font-black text-paper">Institutional Integrity</h3>
                <p className="mt-3 text-xs leading-relaxed text-paper/85">
                  RPDN operates under strict anti-bribery policies, community-driven accountability metrics, and transparent financial reporting systems.
                </p>
                <div className="mt-6 pt-4 border-t border-paper/10">
                  <p className="text-[10px] font-black uppercase tracking-wider text-gold">Verify Representation</p>
                  <p className="mt-1 text-[9px] leading-relaxed text-paper/60">
                    Verify all staff emails end with @riamriam.org. Report any anomalies to our security desk immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
