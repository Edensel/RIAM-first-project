"use client";

import React, { useState } from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";
import { submitContactForm } from "../utils/api";

interface ContactFormData {
  name: string;
  organization: string;
  email: string;
  inquiryType: string;
  subject: string;
  message: string;
  website: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    organization: "",
    email: "",
    inquiryType: "Partnership conversation",
    subject: "",
    message: "",
    website: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.website) {
      return;
    }

    setLoading(true);

    try {
      await submitContactForm({
        full_name: form.name.trim(),
        email: form.email.trim(),
        subject: `${form.inquiryType}: ${form.subject.trim()}`,
        message: [form.organization.trim() && `Organization: ${form.organization.trim()}`, form.message.trim()]
          .filter(Boolean)
          .join("\n\n")
      });
      setLoading(false);
      setSuccess(true);
      setForm({
        name: "",
        organization: "",
        email: "",
        inquiryType: "Partnership conversation",
        subject: "",
        message: "",
        website: ""
      });
    } catch {
      setLoading(false);
      setError("We could not send the message through the website. Please email info@riamriam.org directly.");
    }
  };

  return (
    <section id="contact" className="bg-paper py-20 text-ink lg:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-black uppercase tracking-[0.18em] text-clay">Contact and Partnerships</span>
          <h2 className="mt-3 text-4xl font-black leading-[1.02] tracking-normal sm:text-6xl">
            Start a thoughtful conversation with RIAMRIAM.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-graphite/76">
            Use one secure form for partnership proposals, community coordination, research requests, and general enquiries. The RIAMRIAM team will route your message to the right person.
          </p>
          <a
            href="mailto:info@riamriam.org"
            className="mt-5 inline-flex items-center gap-2 text-sm font-black text-teal hover:underline"
          >
            <Mail className="h-4 w-4" />
            info@riamriam.org
          </a>
        </div>

        <div id="partner-form" className="mx-auto mt-12 max-w-3xl rounded-lg border border-ink/10 bg-bone p-5 shadow-soft sm:p-8">
            {success ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-16 w-16 text-leaf mb-4" />
                <h3 className="text-2xl font-black text-ink mb-2">Message Sent</h3>
                <p className="text-graphite/70 mb-6">
                  Thank you for reaching out. The RIAMRIAM team will review your message and respond from info@riamriam.org.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Full Name">
                    <input
                      type="text"
                      required
                      minLength={2}
                      maxLength={120}
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-teal focus:outline-none"
                      placeholder="Your name"
                    />
                  </FormField>

                  <FormField label="Organization">
                    <input
                      type="text"
                      maxLength={140}
                      autoComplete="organization"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-teal focus:outline-none"
                      placeholder="Organization or community"
                    />
                  </FormField>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Email">
                    <input
                      type="email"
                      required
                      maxLength={160}
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-teal focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </FormField>

                  <FormField label="Inquiry Type">
                    <select
                      required
                      value={form.inquiryType}
                      onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                      className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-teal focus:outline-none"
                    >
                      <option>Partnership conversation</option>
                      <option>General contact</option>
                      <option>Community coordination</option>
                      <option>Research or media request</option>
                    </select>
                  </FormField>
                </div>

                <FormField label="Subject">
                  <input
                    type="text"
                    required
                    minLength={3}
                    maxLength={160}
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-teal focus:outline-none"
                    placeholder="What would you like to discuss?"
                  />
                </FormField>

                <FormField label="Message">
                  <textarea
                    required
                    rows={6}
                    minLength={10}
                    maxLength={2000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-teal focus:outline-none"
                    placeholder="Share the context, location, partnership idea, or support request."
                  />
                </FormField>

                {error && (
                  <p className="rounded-lg border border-clay/30 bg-clay/10 px-4 py-3 text-sm font-semibold text-clay">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-teal px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-paper transition hover:bg-forest disabled:bg-teal/50"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin">⟳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
        </div>
      </div>
    </section>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="block text-xs font-black uppercase tracking-[0.12em] text-clay">{label}</span>
      {children}
    </label>
  );
}
