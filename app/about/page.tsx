import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata(
  'About RIAMRIAM | Our Mission, Vision & History',
  'Learn about RIAMRIAM Peace and Development Network, our mission to build peace and empower communities across East Africa, and our leadership.',
  '/about'
)

export default function About() {
  const values = [
    {
      title: 'Community-Centered',
      description: 'We prioritize the voices and leadership of local communities in all our work.',
    },
    {
      title: 'Inclusive & Equitable',
      description: 'We promote gender equality, youth engagement, and inclusion of marginalized groups.',
    },
    {
      title: 'Culturally Sensitive',
      description: 'We respect and work within local traditions and cultural practices.',
    },
    {
      title: 'Evidence-Based',
      description: 'We use research and data to inform our strategies and measure impact.',
    },
    {
      title: 'Sustainable',
      description: 'We build local capacity and systems for long-term, self-sustaining change.',
    },
    {
      title: 'Accountable',
      description: 'We maintain transparency in our operations and financial management.',
    },
  ]

  const milestones = [
    { year: '2000', title: 'Founding', description: 'Founded as grassroots peace initiative' },
    { year: '2010', title: 'Expansion', description: 'Expanded across pastoral communities in East Africa' },
    { year: '2020', title: 'Recognition', description: 'Gained international recognition for peacebuilding work' },
    { year: '2026', title: 'Re-institutionalization', description: 'Re-launched as regional NGO with enhanced capacity' },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary/80 text-white">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="text-white/80 text-lg mb-4">ABOUT RIAMRIAM</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Our Story. Our Mission. Our Impact.
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                For over two decades, RIAMRIAM has been a trusted partner in building peace and transforming communities across East Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  To build sustainable peace, promote social cohesion, and advance equitable development in pastoral and borderland communities across East Africa through community-led initiatives, strategic partnerships, and evidence-based programming.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  A peaceful, resilient, inclusive, and prosperous region where communities coexist in dignity, security, and sustainable development, free from conflict, poverty, and marginalization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-neutral-50">
          <div className="container-wide">
            <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="p-8 bg-white rounded-xl border border-neutral-200 shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  </div>
                  <p className="text-neutral-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-8 mb-12 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-neutral-600 text-lg">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership CTA */}
        <section className="py-20 bg-neutral-50">
          <div className="container-wide text-center">
            <h2 className="text-4xl font-bold mb-6">Meet Our Leadership</h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Our team brings decades of experience in peacebuilding, development, and humanitarian response across East Africa and globally.
            </p>
            <Link
              href="/about/leadership"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-light transition-all"
            >
              View Leadership Team
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Financial Transparency */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <h2 className="text-4xl font-bold text-center mb-4">Financial Transparency</h2>
            <p className="text-center text-neutral-600 text-lg mb-16 max-w-2xl mx-auto">
              As an internationally recognized humanitarian organization, we maintain the highest standards of financial accountability and transparency.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link
                href="/resources/annual-reports"
                className="p-8 bg-neutral-50 rounded-xl border border-neutral-200 hover:border-primary hover:shadow-lg transition-all text-center"
              >
                <h3 className="text-xl font-bold mb-3 text-foreground">Annual Reports</h3>
                <p className="text-neutral-600 mb-4">Download our comprehensive annual reports showcasing our activities and impact.</p>
                <span className="text-primary font-semibold inline-flex items-center gap-1">
                  Access Reports <ArrowRight size={16} />
                </span>
              </Link>

              <Link
                href="/resources/financial-statements"
                className="p-8 bg-neutral-50 rounded-xl border border-neutral-200 hover:border-primary hover:shadow-lg transition-all text-center"
              >
                <h3 className="text-xl font-bold mb-3 text-foreground">Financial Statements</h3>
                <p className="text-neutral-600 mb-4">Detailed audited financial statements demonstrating responsible fund management.</p>
                <span className="text-primary font-semibold inline-flex items-center gap-1">
                  View Statements <ArrowRight size={16} />
                </span>
              </Link>

              <Link
                href="/resources/impact-metrics"
                className="p-8 bg-neutral-50 rounded-xl border border-neutral-200 hover:border-primary hover:shadow-lg transition-all text-center"
              >
                <h3 className="text-xl font-bold mb-3 text-foreground">Impact Metrics</h3>
                <p className="text-neutral-600 mb-4">Evidence of our impact through quantifiable outcomes and beneficiary data.</p>
                <span className="text-primary font-semibold inline-flex items-center gap-1">
                  View Metrics <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-20 bg-primary-dark text-white">
          <div className="container-wide text-center">
            <h2 className="text-4xl font-bold mb-6">Strategic Partnerships</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              We collaborate with leading organizations, governments, and international partners to maximize our impact.
            </p>
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Explore Our Partners
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
