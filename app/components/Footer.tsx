import React from "react";
import Link from "next/link";
import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[linear-gradient(135deg,#183727_0%,#102a2e_54%,#075267_100%)] text-paper"
    >
      <div className="section-shell grid gap-10 border-b border-paper/30 py-16 lg:grid-cols-[0.9fr_1fr]">
        <div className="flex items-center gap-4">
          <LogoMark className="h-20 w-20" />
          <div>
            <strong className="block text-3xl font-black leading-none">RIAMRIAM</strong>
            <span className="text-sm font-bold uppercase text-paper/80">Peace and Development Network</span>
          </div>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-paper/86">
          A peaceful, resilient, inclusive, and prosperous East Africa where communities live in dignity,
          coexist harmoniously, and enjoy equitable opportunities for sustainable development.
        </p>
      </div>

      <div className="section-shell grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
        <FooterColumn
          title="Who we are"
          links={[
            ["About RPDN", "/who-we-are"],
            ["Leadership & Governance", "/leadership"],
            ["Impact", "/impact"],
            ["Partnerships", "/partnerships"]
          ]}
        />
        <FooterColumn
          title="What we do"
          links={[
            ["Peacebuilding", "/what-we-do"],
            ["Governance", "/what-we-do"],
            ["Livelihoods", "/what-we-do"],
            ["Humanitarian response", "/what-we-do"]
          ]}
        />
        <FooterColumn
          title="Where we work"
          links={[
            ["Turkana County", "/where-we-work"],
            ["Karamoja Cluster", "/where-we-work"],
            ["Toposa Corridor", "/where-we-work"],
            ["Nyangatom & Dassanach", "/where-we-work"]
          ]}
        />
        <div className="rounded-sm border border-paper/35 p-6">
          <h2 className="text-sm font-black uppercase text-gold">Contact us</h2>
          <div className="mt-5 space-y-4 text-paper/90">
            <div>
              <p className="text-xs font-black uppercase text-paper/70">Address</p>
              <p className="mt-1">P.O. Box 246 - 30500, Lodwar</p>
            </div>
            <div>
              <p className="text-xs font-black uppercase text-paper/70">Phone</p>
              <a href="tel:0792618189" className="mt-1 block font-semibold text-paper/88 hover:text-white transition-colors">
                0792 618 189
              </a>
              <a href="tel:0796563344" className="font-semibold text-paper/88 hover:text-white transition-colors">
                0796 563 344
              </a>
            </div>
            <div>
              <p className="text-xs font-black uppercase text-paper/70">Email</p>
              <a className="mt-1 block break-words font-bold text-paper/88 hover:text-white transition-colors" href="mailto:info@riamriam.org">
                info@riamriam.org
              </a>
            </div>
            <div className="pt-2">
              <p className="text-xs font-black uppercase text-paper/70 mb-3">Follow us</p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/Riamiriam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-paper/88 hover:text-white transition-colors"
                  aria-label="Visit our Facebook page"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com/Riamiriam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-paper/88 hover:text-white transition-colors"
                  aria-label="Visit our X (Twitter) page"
                >
                  X
                </a>
                <a
                  href="https://linkedin.com/company/riamriam-peace-and-development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-paper/88 hover:text-white transition-colors"
                  aria-label="Visit our LinkedIn page"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-shell flex flex-col gap-3 border-t border-paper/25 py-6 text-sm text-paper/80 md:flex-row md:items-center md:justify-between">
        <span>© 2026 RIAMRIAM Peace and Development Network</span>
        <span>Building Peace. Empowering Communities. Transforming Lives.</span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h2 className="text-sm font-black uppercase text-gold">{title}</h2>
      <div className="mt-5 space-y-3">
        {links.map(([label, href]) => (
          <Link key={label} href={href} className="block font-semibold text-paper/88 hover:text-white transition-colors">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
