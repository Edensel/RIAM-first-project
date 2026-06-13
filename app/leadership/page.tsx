"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Shield, Briefcase, Award } from "lucide-react";

interface Leader {
  name: string;
  role: string;
  bio: string;
  tags: string[];
  gradient: string;
  photo?: string;
  category: "board" | "secretariat" | "advisory";
}

const leaders: Leader[] = [
  {
    name: "Peter Eripete",
    role: "Chairman",
    bio: "Distinguished public servant and national intelligence expert with extensive experience in conflict analysis, peace negotiation, security management, and cross-border peace initiatives.",
    tags: ["National Security", "Conflict Analysis", "Peace Negotiation"],
    gradient: "from-forest to-teal",
    photo: "/images/Mr. Peter Eripete.jpeg",
    category: "board"
  },
  {
    name: "David Ateyo",
    role: "Vice Chairman",
    bio: "Former teacher and founder of the original RIAMRIAM initiative with experience in NGO management, civic engagement, and peace education.",
    tags: ["Civic Engagement", "NGO Management", "Peace Education"],
    gradient: "from-clay to-gold",
    category: "board"
  },
  {
    name: "Rebecca Ekuwam",
    role: "Treasurer",
    bio: "Diplomat and peace advocate experienced in embassy service, community outreach, conflict resolution, resource mobilization, and women and youth empowerment initiatives.",
    tags: ["Diplomacy", "Conflict Resolution", "Women Empowerment"],
    gradient: "from-teal to-gold",
    photo: "/images/Rebecca Ekuwam.jpeg",
    category: "board"
  },
  {
    name: "A F Losikiria, HSC",
    role: "CEO / Secretary",
    bio: "Former Sub-County Administrator and former CEC Lands with experience in governance, land management, and institutional development. Currently serves as CEO of RPDN.",
    tags: ["Executive Leadership", "Public Administration", "Land Governance"],
    gradient: "from-teal to-forest",
    photo: "/images/Alexander .F. Losikiria.jpeg",
    category: "secretariat"
  },
  {
    name: "Christopher Eregae",
    role: "Vice Secretary",
    bio: "Teacher and community mobilizer experienced in grassroots coordination, youth engagement, and dialogue facilitation.",
    tags: ["Grassroots Mobilization", "Youth Engagement", "Dialogue Facilitation"],
    gradient: "from-clay to-forest",
    category: "board"
  },
  {
    name: "Peter L Emuria",
    role: "Director",
    bio: "Community leader and governance advocate with expertise in dryland livelihoods, climate resilience, and local resource management in ASAL regions.",
    tags: ["ASAL Governance", "Climate Resilience", "Pastoral Livelihoods"],
    gradient: "from-teal to-leaf",
    category: "advisory"
  },
  {
    name: "Jane Apetet Nashida",
    role: "Director",
    bio: "Community development practitioner and educator with expertise in peace and development, youth and women mentorship, and advocacy for vulnerable groups.",
    tags: ["Community Development", "Youth Mentorship", "Vulnerable Advocacy"],
    gradient: "from-gold to-clay",
    photo: "/images/Jane Apetet Nashida.jpeg",
    category: "advisory"
  },
  {
    name: "Seline Lociam",
    role: "Director",
    bio: "Community leader and women’s empowerment advocate experienced in grassroots mobilization, peacebuilding, resource mobilization, and resilience programs among pastoralist communities.",
    tags: ["Gender Inclusion", "Resource Mobilization", "Grassroots Peace"],
    gradient: "from-leaf to-teal",
    photo: "/images/Seline Asimit Locham.jpeg",
    category: "advisory"
  },
  {
    name: "Joseph Jumapili Elim",
    role: "Director",
    bio: "Former CEO of RIAMRIAM, teacher, and missionary with expertise in faith-based leadership, peacebuilding, and community development.",
    tags: ["Faith-based Leadership", "Community Development", "Peacebuilding"],
    gradient: "from-forest to-leaf",
    photo: "/images/Joseph Jumapili Elim.jpeg",
    category: "advisory"
  },
  {
    name: "Hon. Immanuel Isaac Ichor Imana",
    role: "Director",
    bio: "A seasoned peacebuilding expert, political advisor, and philanthropist experienced in conflict resolution, community mediation, humanitarian support, and youth and community empowerment initiatives.",
    tags: ["Conflict Resolution", "Community Mediation", "Humanitarian Support"],
    gradient: "from-clay to-gold",
    photo: "/images/Hon. Immanuel Isaac Ichor Imana.jpeg",
    category: "advisory"
  }
];

const governanceStructure = [
  {
    level: "01",
    id: "board" as const,
    title: "Board of Directors",
    desc: "Provides strategic guidance, fiduciary oversight, and policy formulation. Composed of prominent leaders from peacebuilding, governance, and development sectors.",
    icon: Shield,
    color: "text-clay border-clay/20 bg-clay/5"
  },
  {
    level: "02",
    id: "secretariat" as const,
    title: "Executive Secretariat",
    desc: "Headed by the CEO, manages the organization's administration, handles strategic partnerships, and oversees day-to-day operations.",
    icon: Briefcase,
    color: "text-teal border-teal/20 bg-teal/5"
  },
  {
    level: "03",
    id: "advisory" as const,
    title: "Advisory Council",
    desc: "A specialized panel of regional experts providing subject-matter counsel, monitoring and evaluation oversight, and strategic guidance to align projects with international standards.",
    icon: Award,
    color: "text-leaf border-leaf/20 bg-leaf/5"
  }
];

function getInitials(name: string) {
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export default function LeadershipPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "board" | "secretariat" | "advisory">("all");

  const filteredLeaders = activeCategory === "all"
    ? leaders
    : leaders.filter(leader => leader.category === activeCategory);

  return (
    <>
      <Header />

      <main className="bg-bone min-h-screen text-ink">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-forest py-20 text-paper lg:py-28">
          <div className="absolute inset-0 -z-30 bg-[linear-gradient(100deg,rgba(16,42,46,0.98)_0%,rgba(16,42,46,0.92)_48%,rgba(7,82,103,0.85)_100%)]" />
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          <div className="section-shell">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-gold">Governance &amp; Leadership</p>
            <h1 className="text-4xl font-black leading-tight tracking-normal sm:text-6xl lg:text-7xl">
              Driving Peace Through
              <br />
              Institutional Integrity.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/85">
              RIAMRIAM maintains a transparent, inclusive, and accountable governance structure, 
              pooling decades of public service, diplomatic, and grassroots experience across the Ateker corridor.
            </p>
          </div>
        </section>

        {/* Governance Structure Section */}
        <section className="py-20 lg:py-24 bg-paper border-b border-ink/10">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.1em] text-clay">How We Function</p>
              <h2 className="text-3xl font-black leading-none tracking-normal sm:text-5xl text-ink">
                Our 3-Tiered Governance Model
              </h2>
              <p className="mt-4 text-base leading-relaxed text-graphite/75 font-medium">
                Click any section below to filter and view the dedicated team members of that governance branch.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {governanceStructure.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeCategory === item.id;
                return (
                  <button 
                    key={item.level} 
                    onClick={() => setActiveCategory(isActive ? "all" : item.id)}
                    className={`flex flex-col text-left justify-between rounded-xl border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 active:scale-[0.99] ${
                      isActive 
                        ? "border-gold bg-[#faf6ed] ring-2 ring-gold/50 shadow-soft" 
                        : "border-ink/10 bg-[#faf6ed]/40 hover:bg-[#faf6ed]/80"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-graphite/40">{item.level}</span>
                        <div className={`p-2 rounded-lg border ${item.color.split(" ")[0]} ${item.color.split(" ")[1]} ${item.color.split(" ")[2]}`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                      </div>
                      <h3 className="mt-6 text-lg font-black leading-tight text-ink">{item.title}</h3>
                      <p className="mt-3 text-xs leading-relaxed text-graphite/70">{item.desc}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-clay">
                      {isActive ? "Showing members ➔" : "Click to view members ➔"}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Founders and Leadership Section */}
        <section className="py-20 lg:py-28">
          <div className="section-shell">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="mb-4 text-sm font-black uppercase tracking-[0.1em] text-clay">Our Leaders</p>
                <h2 className="text-3xl font-black leading-none tracking-normal sm:text-5xl text-ink">
                  Founders &amp; Leadership Profiles
                </h2>
                <p className="mt-4 text-base leading-relaxed text-graphite/75">
                  Representing a unique alliance of seasoned intelligence directors, county administrators, community educators, 
                  and diplomatic advisors united for regional cohesion.
                </p>
              </div>

              {/* Reset filter button if active */}
              {activeCategory !== "all" && (
                <button
                  onClick={() => setActiveCategory("all")}
                  className="self-start md:self-auto rounded bg-clay/10 border border-clay/20 px-3 py-1.5 text-xs font-bold text-clay transition hover:bg-clay/20"
                >
                  Clear Filter ×
                </button>
              )}
            </div>

            {/* Tab Bar Filters */}
            <div className="mt-10 flex flex-wrap gap-2 border-b border-ink/10 pb-4">
              <button
                onClick={() => setActiveCategory("all")}
                className={`rounded-lg px-4 py-2 text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === "all"
                    ? "bg-forest text-paper shadow"
                    : "bg-paper/40 text-graphite hover:bg-paper/80 border border-ink/5"
                }`}
              >
                All Profiles ({leaders.length})
              </button>
              <button
                onClick={() => setActiveCategory("board")}
                className={`rounded-lg px-4 py-2 text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === "board"
                    ? "bg-clay text-paper shadow"
                    : "bg-paper/40 text-graphite hover:bg-paper/80 border border-ink/5"
                }`}
              >
                Board of Directors ({leaders.filter(l => l.category === "board").length})
              </button>
              <button
                onClick={() => setActiveCategory("secretariat")}
                className={`rounded-lg px-4 py-2 text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === "secretariat"
                    ? "bg-teal text-paper shadow"
                    : "bg-paper/40 text-graphite hover:bg-paper/80 border border-ink/5"
                }`}
              >
                Executive Secretariat ({leaders.filter(l => l.category === "secretariat").length})
              </button>
              <button
                onClick={() => setActiveCategory("advisory")}
                className={`rounded-lg px-4 py-2 text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === "advisory"
                    ? "bg-leaf text-paper shadow"
                    : "bg-paper/40 text-graphite hover:bg-paper/80 border border-ink/5"
                }`}
              >
                Advisory Council ({leaders.filter(l => l.category === "advisory").length})
              </button>
            </div>

            {/* Grid of Profile Cards */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredLeaders.map((leader) => (
                <div 
                  key={leader.name} 
                  className="group relative flex flex-col justify-between rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
                >
                  <div>
                    {/* Header Avatars */}
                    <div className="flex items-center gap-4 border-b border-ink/5 pb-4">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full shadow-inner border border-ink/10 bg-[#faf6ed]">
                        {leader.photo ? (
                          <img
                            src={leader.photo}
                            alt={leader.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${leader.gradient} text-sm font-black text-paper`}>
                            {getInitials(leader.name)}
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-serif text-base font-extrabold leading-tight text-ink transition-colors group-hover:text-teal">
                          {leader.name}
                        </h3>
                        <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-clay/90">
                          {leader.role}
                        </p>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="mt-4 text-xs leading-relaxed text-graphite/75">
                      {leader.bio}
                    </p>
                  </div>

                  {/* Skill/Capability Badges */}
                  <div className="mt-6 pt-4 border-t border-ink/5 flex flex-wrap gap-1.5">
                    {leader.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="rounded bg-bone px-2 py-1 text-[9px] font-black uppercase tracking-wider text-teal/80 border border-teal/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {filteredLeaders.length === 0 && (
              <div className="mt-12 text-center py-16 bg-[#faf6ed]/20 rounded-xl border border-dashed border-ink/10">
                <p className="text-sm text-graphite/60 font-medium">No leaders found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Institutional Capacity Callout */}
        <section className="bg-forest py-16 text-paper">
          <div className="section-shell">
            <div className="rounded-2xl border border-paper/20 bg-ink/40 p-8 md:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-3xl">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-gold">Institutional Capacity</span>
                <h3 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">
                  A credible, culturally grounded foundation.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/80">
                  Our founders collectively bring expertise in governance, peacebuilding, security, education, humanitarian action, 
                  diplomacy, and grassroots mobilization. RPDN operates with robust compliance, participatory decision-making, 
                  and conflict-sensitive frameworks to ensure regional legitimacy.
                </p>
              </div>
              <div className="mt-8 shrink-0 lg:mt-0">
                <a 
                  href="mailto:info@riamriam.org" 
                  className="inline-flex rounded-lg bg-gold px-6 py-4 text-xs font-black uppercase text-ink transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Collaborate with our board
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
