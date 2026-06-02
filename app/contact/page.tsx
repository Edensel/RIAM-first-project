'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary/80 text-white">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="text-white/80 text-lg mb-4">GET IN TOUCH</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Have questions or want to work with us? Get in touch with our team. We respond to all inquiries within 48 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Phone */}
              <div className="p-8 bg-neutral-50 rounded-xl border border-neutral-200">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <a href="tel:+254792618189" className="text-primary font-semibold hover:text-primary-light mb-2 block">
                  +254 792 618 189
                </a>
                <a href="tel:+254796563344" className="text-primary font-semibold hover:text-primary-light block">
                  +254 796 563 344
                </a>
                <p className="text-sm text-neutral-600 mt-4">Available Mon-Fri, 8am-5pm EAT</p>
              </div>

              {/* Email */}
              <div className="p-8 bg-neutral-50 rounded-xl border border-neutral-200">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail size={24} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a href="mailto:info@riamriam.org" className="text-secondary font-semibold hover:text-opacity-90 block">
                  info@riamriam.org
                </a>
                <a href="mailto:partnerships@riamriam.org" className="text-secondary font-semibold hover:text-opacity-90 block mt-2">
                  partnerships@riamriam.org
                </a>
                <p className="text-sm text-neutral-600 mt-4">Response within 48 hours</p>
              </div>

              {/* Address */}
              <div className="p-8 bg-neutral-50 rounded-xl border border-neutral-200">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Office</h3>
                <p className="font-semibold">RIAMRIAM</p>
                <p className="text-sm text-neutral-600 mt-2">
                  P.O. Box 246<br />
                  Lodwar 30500<br />
                  Turkana County, Kenya
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-neutral-50">
          <div className="container-sm">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
              <p className="text-neutral-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

              {formSubmitted && (
                <div className="mb-8 p-4 bg-success/10 border border-success rounded-lg">
                  <p className="text-success font-semibold">Thank you! We've received your message and will be in touch soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-semibold mb-2 text-foreground">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your organization"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-foreground">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a topic</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="donation">Donation & Support</option>
                      <option value="employment">Employment Opportunity</option>
                      <option value="volunteer">Volunteer Program</option>
                      <option value="media">Media & Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="privacy" className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="w-4 h-4 rounded border-neutral-200 focus:ring-2 focus:ring-primary"
                    />
                    <span className="text-sm text-neutral-600">
                      I agree to the <a href="/legal/privacy" className="text-primary font-semibold">privacy policy</a> and <a href="/legal/terms" className="text-primary font-semibold">terms of service</a>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-light transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <h2 className="text-4xl font-bold text-center mb-16">Department Contacts</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 bg-neutral-50 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Programs & Partnerships</h3>
                <p className="text-neutral-600 mb-4">For program inquiries, partnerships, and collaborations</p>
                <a href="mailto:partnerships@riamriam.org" className="text-primary font-semibold hover:text-primary-light">
                  partnerships@riamriam.org
                </a>
              </div>

              <div className="p-8 bg-neutral-50 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Donations & Support</h3>
                <p className="text-neutral-600 mb-4">For donations and sponsorship opportunities</p>
                <a href="mailto:donate@riamriam.org" className="text-primary font-semibold hover:text-primary-light">
                  donate@riamriam.org
                </a>
              </div>

              <div className="p-8 bg-neutral-50 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Human Resources</h3>
                <p className="text-neutral-600 mb-4">For employment opportunities and recruitment</p>
                <a href="mailto:careers@riamriam.org" className="text-primary font-semibold hover:text-primary-light">
                  careers@riamriam.org
                </a>
              </div>

              <div className="p-8 bg-neutral-50 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Media & Communications</h3>
                <p className="text-neutral-600 mb-4">For press inquiries and media requests</p>
                <a href="mailto:media@riamriam.org" className="text-primary font-semibold hover:text-primary-light">
                  media@riamriam.org
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
