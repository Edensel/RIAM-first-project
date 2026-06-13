"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactPage from "../components/ContactPage";
import { Mail, Phone, MapPin, ShieldAlert, Globe } from "lucide-react";

export default function ContactRoute() {
  return (
    <>
      <Header />

      <main className="bg-paper min-h-screen text-ink">
        {/* Page Hero */}
        <section className="bg-bone border-b border-ink/10 py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-clay">Global Engagement</span>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-normal sm:text-6xl max-w-4xl text-ink">
              Reach the RIAMRIAM Network
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-graphite/80">
              We connect grassroots peacebuilders, international partners, and academic researchers to foster stability across East Africa. Get in touch with our specialists.
            </p>
          </div>
        </section>

        {/* Directory & Form Grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start">
              
              {/* Directory Left Column */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-ink">Global Directory & Liaison</h2>
                  <p className="mt-4 text-sm leading-6 text-graphite/76">
                    Connect directly with our headquarters or specific regional liaison desks to coordinate activities or request field information.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Lodwar HQ */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-teal/10 text-teal">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ink">Lodwar Headquarters</h3>
                      <p className="mt-1 text-sm leading-6 text-graphite/70">
                        P.O. Box 246 - 30500, Lodwar, Turkana County, Kenya
                      </p>
                      <div className="mt-2 flex flex-col gap-1 text-sm text-teal font-semibold">
                        <a href="tel:0792618189" className="hover:underline flex items-center gap-1.5">
                          <Phone className="h-3.5 w-3.5" /> +254 792 618 189
                        </a>
                        <a href="tel:0796563344" className="hover:underline flex items-center gap-1.5">
                          <Phone className="h-3.5 w-3.5" /> +254 796 563 344
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Liaison Office */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-teal/10 text-teal">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ink">Nairobi Liaison Desk</h3>
                      <p className="mt-1 text-sm leading-6 text-graphite/70">
                        Institutional partnerships, international communications, and donor reporting.
                      </p>
                      <a href="mailto:liaison@riamriam.org" className="mt-2 inline-flex items-center gap-1.5 text-sm text-teal font-semibold hover:underline">
                        <Mail className="h-3.5 w-3.5" /> liaison@riamriam.org
                      </a>
                    </div>
                  </div>

                  {/* Department Routing */}
                  <div className="border-t border-ink/10 pt-6 space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-wider text-clay">Departmental Channels</h4>
                    
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="p-4 rounded-sm bg-bone border border-ink/5">
                        <span className="block text-[10px] font-black uppercase text-clay">Partnerships & Grants</span>
                        <a href="mailto:partnerships@riamriam.org" className="mt-1 block text-sm font-bold text-teal hover:underline">
                          partnerships@riamriam.org
                        </a>
                      </div>
                      
                      <div className="p-4 rounded-sm bg-bone border border-ink/5">
                        <span className="block text-[10px] font-black uppercase text-clay">Careers & Volunteering</span>
                        <a href="mailto:volunteer@riamriam.org" className="mt-1 block text-sm font-bold text-teal hover:underline">
                          volunteer@riamriam.org
                        </a>
                      </div>

                      <div className="p-4 rounded-sm bg-bone border border-ink/5 sm:col-span-2">
                        <span className="block text-[10px] font-black uppercase text-clay">Media & Press Enquiries</span>
                        <a href="mailto:media@riamriam.org" className="mt-1 block text-sm font-bold text-teal hover:underline">
                          media@riamriam.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fraud Notice */}
                <div className="rounded-sm border-l-4 border-clay bg-clay/5 p-6 space-y-3">
                  <div className="flex items-center gap-2 text-clay">
                    <ShieldAlert className="h-5 w-5" />
                    <h3 className="text-xs font-black uppercase tracking-wider">Official Fraud Warning</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-graphite/86">
                    RIAMRIAM Peace and Development Network (RPDN) does not charge application fees, processing fees, or any training fees at any point in its recruitment, procurement, or peace-building coordination processes. Report any suspicious billing requests claiming to represent RPDN to <a href="mailto:info@riamriam.org" className="font-bold underline text-clay hover:text-clay/80">info@riamriam.org</a>.
                  </p>
                </div>
              </div>

              {/* Form Right Column */}
              <div className="space-y-4">
                <div className="border-b border-ink/10 pb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-clay">Secure Correspondence</span>
                  <h3 className="text-xl font-black text-ink">Send an Enquiry</h3>
                </div>
                <ContactPage />
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
