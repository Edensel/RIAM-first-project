import Image from "next/image";

const navItems = [
  ["Who we are", "#who-we-are"],
  ["What we do", "#what-we-do"],
  ["Impact", "#impact"],
  ["Where we work", "#where-we-work"],
  ["Contact", "#contact"]
];

const metrics = [
  ["2000", "Founded as a grassroots peace initiative"],
  ["2026", "Revived for regional institutional growth"],
  ["7+", "Pastoral and borderland communities engaged"],
  ["5", "Strategic pillars for peace and resilience"]
];

const programs = [
  {
    title: "Peacebuilding and conflict resolution",
    text: "Community dialogue, mediation, cross-border diplomacy, peace education, early warning, and anti-cattle rustling action."
  },
  {
    title: "Governance and civic engagement",
    text: "Civic education, leadership training, policy advocacy, citizen forums, and accountable local institutions."
  },
  {
    title: "Climate-resilient livelihoods",
    text: "Pastoral support, fisheries, agro-processing, entrepreneurship, climate-smart agriculture, and peace markets."
  },
  {
    title: "Gender and social inclusion",
    text: "Women peace networks, GBV prevention, girls' empowerment, disability inclusion, and inclusive decision-making."
  },
  {
    title: "Humanitarian and emergency response",
    text: "Food security, WASH, relief coordination, disaster preparedness, and resilience for vulnerable households."
  },
  {
    title: "Youth transformation",
    text: "Mentorship, sports for peace, skills development, crime prevention, and youth economic pathways."
  },
  {
    title: "Education, research, and capacity building",
    text: "Institutional strengthening, research and advocacy, training workshops, and community awareness campaigns."
  }
];

const pillars = [
  "Peace and governance",
  "Early warning and rapid response",
  "Youth transformation and crime prevention",
  "Climate-resilient livelihoods",
  "Institutional strengthening"
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
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-bone/95 backdrop-blur-xl">
        <div className="section-shell flex min-h-20 items-center gap-6">
          <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="RPDN home">
            <LogoMark className="h-14 w-14" priority />
            <span className="leading-none">
              <strong className="block text-lg font-black tracking-normal text-ink">RPDN</strong>
              <span className="block max-w-56 pt-1 text-xs font-extrabold uppercase text-graphite/70">
                RIAMRIAM Peace and Development Network
              </span>
            </span>
          </a>

          <nav className="ml-auto hidden items-center gap-7 text-[0.78rem] font-black uppercase text-ink lg:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="link-underline py-7">
                {label}
              </a>
            ))}
          </nav>

          <a
            href="mailto:RiamriamRPDN023@gmail.com"
            className="ml-auto hidden rounded-sm border-2 border-teal px-5 py-3 text-[0.78rem] font-black uppercase text-teal transition hover:bg-teal hover:text-white lg:ml-0 lg:inline-flex"
          >
            Partner with RPDN
          </a>

          <details className="group relative ml-auto lg:hidden">
            <summary className="flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-sm border border-ink/15 text-ink marker:hidden">
              <span className="sr-only">Open navigation</span>
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-6 bg-current" />
                <span className="block h-0.5 w-6 bg-current" />
                <span className="block h-0.5 w-6 bg-current" />
              </span>
            </summary>
            <nav className="absolute right-0 top-14 w-72 rounded-sm border border-ink/10 bg-paper p-3 text-sm font-black uppercase text-ink shadow-soft">
              {navItems.map(([label, href]) => (
                <a key={href} href={href} className="block rounded-sm px-4 py-3 hover:bg-bone">
                  {label}
                </a>
              ))}
              <a href="mailto:RiamriamRPDN023@gmail.com" className="mt-2 block rounded-sm bg-gold px-4 py-3">
                Partner with RPDN
              </a>
            </nav>
          </details>
        </div>
      </header>

      <main id="home">
        <section className="relative isolate overflow-hidden bg-forest text-paper">
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,rgba(16,42,46,0.97)_0%,rgba(16,42,46,0.88)_48%,rgba(7,82,103,0.82)_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />

          <div className="section-shell flex min-h-[calc(100svh-9rem)] items-center justify-center py-16 lg:py-20">
            <div className="text-center max-w-4xl">
              <h1 className="text-5xl font-black leading-[0.94] tracking-normal text-paper sm:text-7xl lg:text-8xl">
                Building peace. Empowering communities. Transforming lives.
              </h1>
            </div>
          </div>

          <div className="grid border-t border-paper/20 bg-ink/30 text-center text-sm font-black uppercase text-paper sm:grid-cols-3">
            <span className="border-b border-paper/15 px-5 py-5 sm:border-b-0 sm:border-r">Peacebuilding</span>
            <span className="border-b border-paper/15 px-5 py-5 sm:border-b-0 sm:border-r">Climate resilience</span>
            <span className="px-5 py-5">Women and youth leadership</span>
          </div>
        </section>

        <section id="who-we-are" className="bg-paper py-20 lg:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.1em] text-clay">Who we are</p>
              <h2 className="text-4xl font-black leading-none tracking-normal sm:text-6xl">
                A regional peace network with local legitimacy.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-graphite/78">
              <p>
                RiamRiam means meeting and meeting again. It reflects a cultural practice of
                continuous dialogue, reconciliation, cooperation, and peaceful coexistence.
              </p>
              <p>
                Founded in 2000 and re-institutionalized in 2026, RPDN works with communities,
                traditional leaders, women, youth, civil society, governments, and development
                partners to address conflict, exclusion, poverty, climate shocks, and insecurity.
              </p>
            </div>
          </div>
        </section>

        <section id="impact" className="grid bg-teal text-paper md:grid-cols-4">
          {metrics.map(([value, label]) => (
            <div key={value} className="border-b border-paper/15 p-8 md:border-b-0 md:border-r lg:p-12">
              <strong className="block text-6xl font-black leading-none text-gold lg:text-7xl">{value}</strong>
              <span className="mt-4 block max-w-64 text-base font-extrabold">{label}</span>
            </div>
          ))}
        </section>

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

        <section id="where-we-work" className="bg-paper py-20 lg:py-28">
          <div className="section-shell">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.1em] text-clay">Where we work</p>
              <h2 className="text-4xl font-black leading-none tracking-normal sm:text-6xl">
                Focused on pastoral, borderland, and underserved communities.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {regions.map((region) => (
                <article key={region.title} className="rounded-sm border border-ink/10 border-t-leaf border-t-[6px] bg-bone p-7">
                  <p className="text-xs font-black uppercase tracking-[0.1em] text-clay">{region.label}</p>
                  <h3 className="mt-6 text-2xl font-black leading-tight">{region.title}</h3>
                  <p className="mt-4 leading-7 text-graphite/72">{region.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

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
                Partner with RPDN to strengthen peace infrastructure across the Ateker corridor.
              </h2>
            </div>
            <a
              href="mailto:RiamriamRPDN023@gmail.com"
              className="mt-8 inline-flex rounded-sm bg-gold px-6 py-4 text-sm font-black uppercase text-ink transition hover:-translate-y-0.5 lg:mt-0"
            >
              Start a conversation
            </a>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="bg-[linear-gradient(135deg,#183727_0%,#102a2e_54%,#075267_100%)] text-paper"
      >
        <div className="section-shell grid gap-10 border-b border-paper/30 py-16 lg:grid-cols-[0.9fr_1fr]">
          <div className="flex items-center gap-4">
            <LogoMark className="h-20 w-20" />
            <div>
              <strong className="block text-3xl font-black leading-none">RPDN</strong>
              <span className="text-sm font-bold uppercase text-paper/80">RIAMRIAM Peace and Development Network</span>
            </div>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-paper/86">
            A peaceful, resilient, inclusive, and prosperous region where communities coexist in
            dignity, security, and sustainable development.
          </p>
        </div>

        <div className="section-shell grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <FooterColumn
            title="Who we are"
            links={[
              ["About RPDN", "#who-we-are"],
              ["Impact", "#impact"],
              ["Partnerships", "mailto:RiamriamRPDN023@gmail.com"]
            ]}
          />
          <FooterColumn
            title="What we do"
            links={[
              ["Peacebuilding", "#what-we-do"],
              ["Governance", "#what-we-do"],
              ["Livelihoods", "#what-we-do"],
              ["Humanitarian response", "#what-we-do"]
            ]}
          />
          <FooterColumn
            title="Where we work"
            links={[
              ["Turkana County", "#where-we-work"],
              ["Karamoja Cluster", "#where-we-work"],
              ["Toposa Corridor", "#where-we-work"],
              ["Nyangatom and Dassanach", "#where-we-work"]
            ]}
          />
          <div className="rounded-sm border border-paper/35 p-6">
            <h2 className="text-sm font-black uppercase">Contact RPDN</h2>
            <div className="mt-5 space-y-3 text-paper/90">
              <p>P.O. Box 246 - 30500, Lodwar</p>
              <p>0792 618 189 / 0796 563 344</p>
              <a className="block break-words font-bold" href="mailto:RiamriamRPDN023@gmail.com">
                RiamriamRPDN023@gmail.com
              </a>
              <p>Facebook / X: @Riamiriam</p>
              <p>LinkedIn: RIAMRIAM Peace and Development</p>
            </div>
          </div>
        </div>

        <div className="section-shell flex flex-col gap-3 border-t border-paper/25 py-6 text-sm text-paper/80 md:flex-row md:items-center md:justify-between">
          <span>© 2026 RIAMRIAM Peace and Development Network (RPDN)</span>
          <span>Building Peace. Empowering Communities. Transforming Lives.</span>
        </div>
      </footer>
    </>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h2 className="text-sm font-black uppercase">{title}</h2>
      <div className="mt-5 space-y-3">
        {links.map(([label, href]) => (
          <a key={label} href={href} className="block font-semibold text-paper/88 hover:text-white">
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

function LogoMark({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-ink/10 bg-paper shadow-sm ${className}`}
    >
      <Image
        src="/riamriam-logo.png"
        width={453}
        height={400}
        alt="RPDN logo"
        priority={priority}
        className="h-[95%] w-[95%] object-contain mix-blend-multiply"
      />
    </span>
  );
}
