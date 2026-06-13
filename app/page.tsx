import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OperationsPage from "./components/OperationsPage";
import ImpactSection from "./components/ImpactSection";

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

const regions = [
  {
    label: "Primary focus",
    title: "Turkana County",
    text: "Intra-county tensions, resource governance, youth vulnerability, and social cohesion."
  },
  {
    label: "Inter-county corridors",
    title: "Turkana, West Pokot, Baringo, Samburu, Marsabit",
    text: "Dialogue platforms and resource-sharing mechanisms across conflict-affected communities."
  },
  {
    label: "Cross-border corridors",
    title: "Karamoja, Toposa, Nyangatom, Dassanach",
    text: "Regional peace infrastructure across Kenya, Uganda, South Sudan, and Ethiopia."
  }
];

const stories = [
  "Community reconciliation processes that restore trust and create peaceful coexistence agreements.",
  "Women peace champions who mediate disputes and advocate for social cohesion.",
  "Youth entrepreneurship and vocational pathways that reduce vulnerability to violence and crime."
];

export default function Home() {
  return (
    <>
      <Header />

      <main id="home">
        <section className="relative flex min-h-[calc(100vh-5rem)] w-full flex-col justify-between overflow-hidden text-paper">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marqueeContinuous {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-continuous {
              animation: marqueeContinuous 20s linear infinite;
            }
          `}} />
          <div className="absolute inset-0 -z-40 bg-forest" />
          <div className="absolute inset-0 -z-30 bg-[linear-gradient(100deg,rgba(16,42,46,0.97)_0%,rgba(16,42,46,0.88)_48%,rgba(7,82,103,0.82)_100%)]" />
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />
          
          {/* Centered background logo */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30 pointer-events-none select-none">
            <img
              src="/riamriam-logo.png"
              alt=""
              className="h-[80%] w-[80%] max-w-[700px] max-h-[700px] object-contain object-center"
            />
          </div>

          {/* Marquee Banner at the top of the page */}
          <div className="relative z-10 w-full overflow-hidden pt-12 pb-6 opacity-90">
            <div className="flex w-[200%] animate-marquee-continuous whitespace-nowrap">
              {/* Set 1 */}
              <div className="flex w-1/2 justify-around items-center">
                <span className="text-sm font-black uppercase tracking-[0.25em] text-paper/90 px-10 sm:text-base lg:text-lg">RIAMRIAM • PEACE AND DEVELOPMENT NETWORK</span>
                <span className="text-sm font-black uppercase tracking-[0.25em] text-paper/90 px-10 sm:text-base lg:text-lg">RIAMRIAM • PEACE AND DEVELOPMENT NETWORK</span>
              </div>
              {/* Set 2 */}
              <div className="flex w-1/2 justify-around items-center">
                <span className="text-sm font-black uppercase tracking-[0.25em] text-paper/90 px-10 sm:text-base lg:text-lg">RIAMRIAM • PEACE AND DEVELOPMENT NETWORK</span>
                <span className="text-sm font-black uppercase tracking-[0.25em] text-paper/90 px-10 sm:text-base lg:text-lg">RIAMRIAM • PEACE AND DEVELOPMENT NETWORK</span>
              </div>
            </div>
          </div>

          {/* Slogan in the Center */}
          <div className="section-shell flex flex-grow items-center justify-center py-10">
            <div className="text-center max-w-5xl">
              <h1 className="text-4xl font-black leading-[1.15] tracking-normal text-paper sm:text-6xl lg:text-7xl">
                Continuous Dialogue.
                <br />
                Cultural Diplomacy for Peace.
              </h1>
            </div>
          </div>

          {/* Three Categories Footer */}
          <div className="grid border-t border-paper/20 bg-ink/30 text-center text-sm font-black uppercase text-paper sm:grid-cols-3">
            <span className="border-b border-paper/15 px-5 py-5 sm:border-b-0 sm:border-r">Peacebuilding</span>
            <span className="border-b border-paper/15 px-5 py-5 sm:border-b-0 sm:border-r">Climate resilience</span>
            <span className="px-5 py-5">Women and youth leadership</span>
          </div>
        </section>

        <section id="who-we-are" className="bg-paper py-20 lg:py-28">
          <div className="section-shell">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr]">
              <div>
                <p className="mb-4 text-sm font-black uppercase tracking-[0.1em] text-clay">Who we are</p>
                <h2 className="text-4xl font-black leading-none tracking-normal sm:text-6xl text-ink">
                  A regional peace network with local legitimacy.
                </h2>
              </div>
              <div className="space-y-6 text-lg leading-8 text-graphite/78">
                <p>
                  RIAMRIAM Peace and Development Network (RPDN) is a community-driven Civil Society Organization 
                  and Community-Based Organization operating across Kenya and the wider East African Ateker corridor. 
                  Originally established in 2000 and revitalized in 2026, the network works to promote peace, 
                  social cohesion, resilience, and sustainable development among marginalized pastoral and borderland communities.
                </p>
                <p>
                  The name &ldquo;RiamRiam,&rdquo; drawn from Ateker cultural traditions, means &ldquo;meeting and meeting again,&rdquo; 
                  symbolizing continuous dialogue, reconciliation, cooperation, and peaceful coexistence. Guided by the motto, 
                  &ldquo;Building Peace. Empowering Communities. Transforming Lives,&rdquo; RPDN integrates traditional peace 
                  mechanisms with modern development approaches to address conflict, insecurity, poverty, climate vulnerability, and social exclusion.
                </p>
              </div>
            </div>

            {/* Vision, Mission, and Core Values Cards */}
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col justify-between rounded-xl bg-forest p-8 text-paper shadow-md border-t-4 border-gold">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-gold">Vision</h3>
                  <p className="mt-6 text-lg font-medium leading-relaxed">
                    A peaceful, resilient, inclusive, and prosperous East Africa where communities live in dignity, coexist harmoniously, and enjoy equitable opportunities for sustainable development.
                  </p>
                </div>
                <span className="mt-8 block h-1 w-12 bg-gold/55" />
              </div>

              <div className="flex flex-col justify-between rounded-xl bg-teal p-8 text-paper shadow-md border-t-4 border-gold">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-gold">Mission</h3>
                  <p className="mt-6 text-lg font-medium leading-relaxed">
                    To advance sustainable peace, social cohesion, and community resilience through locally led peacebuilding, humanitarian action, inclusive governance, climate adaptation, and sustainable livelihood interventions that transform lives and strengthen vulnerable communities across the Ateker Corridor and beyond.
                  </p>
                </div>
                <span className="mt-8 block h-1 w-12 bg-gold/55" />
              </div>

              <div className="flex flex-col justify-between rounded-xl bg-bone p-8 text-ink shadow-md border-t-4 border-clay border border-ink/5">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-clay">Core Values</h3>
                  <ul className="mt-6 grid grid-cols-1 gap-1 text-xs font-bold text-graphite/90">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" /> Peace and Non-Violence
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" /> Integrity and Accountability
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" /> Human Dignity and Respect
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" /> Inclusivity and Equity
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" /> Community Ownership &amp; Participation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" /> Good Governance &amp; Transparency
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" /> Innovation &amp; Continuous Learning
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" /> Gender Equality &amp; Social Justice
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" /> Partnership &amp; Collaboration
                    </li>
                  </ul>
                </div>
                <span className="mt-8 block h-1 w-12 bg-clay/55" />
              </div>
            </div>
          </div>
        </section>

        <ImpactSection />

        <section id="what-we-do" className="bg-bone py-20 lg:py-28">
          <div className="section-shell">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.1em] text-clay">What we do</p>
              <h2 className="text-4xl font-black leading-none tracking-normal sm:text-6xl">
                Integrated programs for peace, governance, resilience, and dignity.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {programs.map((program, index) => (
                <article
                  key={program.title}
                  className="min-h-72 rounded-sm border border-ink/10 bg-paper p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="text-sm font-black text-clay">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-14 text-2xl font-black leading-tight">{program.title}</h3>
                  <p className="mt-4 text-base leading-7 text-graphite/72">{program.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-forest py-20 text-paper lg:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.92fr_1fr]">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.1em] text-gold">Strategic pillars</p>
              <h2 className="text-4xl font-black leading-none tracking-normal sm:text-6xl">
                Built for regional credibility and measurable delivery.
              </h2>
            </div>
            <div className="border-t border-paper/20">
              {pillars.map((pillar, index) => (
                <div key={pillar} className="grid grid-cols-[3rem_1fr] gap-5 border-b border-paper/20 py-6">
                  <span className="font-black text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-2xl font-black leading-tight">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <OperationsPage />

        <section className="bg-bone py-20 lg:py-28">
          <div className="section-shell">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.1em] text-clay">Stories of change</p>
              <h2 className="text-4xl font-black leading-none tracking-normal sm:text-6xl">
                Local leadership turns dialogue into practical progress.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {stories.map((story, index) => (
                <article key={story} className="rounded-sm border border-ink/10 bg-paper p-7">
                  <span className="mb-8 block h-1.5 w-12 bg-gold" />
                  <h3 className="text-2xl font-black">0{index + 1}</h3>
                  <p className="mt-5 leading-7 text-graphite/72">{story}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paper py-20">
          <div className="section-shell rounded-sm bg-teal p-8 text-paper shadow-soft lg:flex lg:items-center lg:justify-between lg:gap-12 lg:p-14">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.1em] text-gold">Partnerships</p>
              <h2 className="text-4xl font-black leading-none tracking-normal sm:text-5xl">
                Partner with us to strengthen peace infrastructure across the Ateker corridor.
              </h2>
            </div>
            <a
              href="/partnerships"
              className="mt-8 inline-flex rounded-sm bg-gold px-6 py-4 text-sm font-black uppercase text-ink transition hover:-translate-y-0.5 lg:mt-0"
            >
              Start a conversation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
