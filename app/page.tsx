import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Globe, Users, Heart, TrendingUp, BookOpen, Award } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata(
  'RIAMRIAM | Peace and Development Network',
  'Building peace, empowering communities, and transforming lives across East Africa through innovative peacebuilding, community development, and humanitarian response.',
  '/'
)

export default function Home() {
  const stats = [
    { number: '24+', label: 'Years of Experience', icon: Award },
    { number: '7+', label: 'Communities Engaged', icon: Users },
    { number: '5', label: 'Strategic Pillars', icon: Globe },
    { number: '3', label: 'Countries Served', icon: TrendingUp },
  ]

  const programs = [
    {
      id: 'peace-building',
      title: 'Peace Building & Conflict Resolution',
      description: 'Facilitating dialogue, resolving conflicts, and promoting social cohesion across pastoral and borderland communities.',
      icon: Users,
    },
    {
      id: 'community-dev',
      title: 'Community Development',
      description: 'Empowering communities through education, livelihood projects, and sustainable development initiatives.',
      icon: TrendingUp,
    },
    {
      id: 'humanitarian',
      title: 'Humanitarian Response',
      description: 'Providing emergency aid and support during crises, with a focus on vulnerable populations.',
      icon: Heart,
    },
    {
      id: 'governance',
      title: 'Governance & Institutional Strengthening',
      description: 'Building institutional capacity and promoting good governance at all levels.',
      icon: Globe,
    },
  ]

  const regions = [
    { name: 'Turkana County', description: 'Primary focus area for integrated peacebuilding programs' },
    { name: 'Karamoja Cluster', description: 'Cross-border pastoral peace initiative' },
    { name: 'Toposa Corridor', description: 'Community cohesion and resilience building' },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 bg-gradient-to-br from-primary-dark via-primary to-primary/80 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_25%,rgba(255,255,255,.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.1)_75%,rgba(255,255,255,.1))] bg-[length:40px_40px]"></div>
          </div>

          <div className="container-wide relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-balance">
                Building Peace. Empowering Communities.
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                RIAMRIAM Peace and Development Network drives sustainable peace and development across East Africa through innovative peacebuilding, community empowerment, and humanitarian response.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                >
                  Learn Our Story
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white border-2 border-white rounded-lg font-semibold hover:bg-white/30 transition-all"
                >
                  Support Our Mission
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 md:py-20 bg-white border-b border-neutral-200">
          <div className="container-wide">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon size={32} className="text-primary" />
                      </div>
                    </div>
                    <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                    <p className="text-sm text-neutral-600">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Core Programs</h2>
              <p className="text-lg text-neutral-600">
                Comprehensive solutions addressing the root causes of conflict and poverty in pastoral and borderland communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program) => {
                const Icon = program.icon
                return (
                  <Link
                    key={program.id}
                    href={`/programs/${program.id}`}
                    className="group p-8 bg-white rounded-xl border border-neutral-200 hover:shadow-lg hover:border-primary transition-all"
                  >
                    <div className="mb-4 inline-block p-3 bg-primary/10 group-hover:bg-primary group-hover:text-white rounded-lg transition-all">
                      <Icon size={28} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{program.title}</h3>
                    <p className="text-neutral-600 mb-4">{program.description}</p>
                    <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                      Learn More <ArrowRight size={18} className="ml-auto group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Where We Work */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Where We Work</h2>
              <p className="text-lg text-neutral-600">
                Operating across East Africa with deep roots in pastoral and borderland communities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {regions.map((region) => (
                <div key={region.name} className="p-8 border-2 border-primary rounded-xl bg-primary/5">
                  <h3 className="text-xl font-bold text-primary mb-3">{region.name}</h3>
                  <p className="text-neutral-600">{region.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/where-we-work"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
              >
                Explore Our Operations
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container-wide">
            <h2 className="text-4xl font-bold mb-12 text-center">Latest Updates & Resources</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Link
                href="/news"
                className="group p-6 bg-white rounded-xl border border-neutral-200 hover:shadow-lg transition-all"
              >
                <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg">
                  <BookOpen size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">News & Stories</h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Stay updated with our latest initiatives, success stories, and organizational updates.
                </p>
                <span className="text-accent font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1">
                  Read News <ArrowRight size={16} />
                </span>
              </Link>

              <Link
                href="/resources/reports"
                className="group p-6 bg-white rounded-xl border border-neutral-200 hover:shadow-lg transition-all"
              >
                <div className="mb-4 inline-block p-3 bg-secondary/10 rounded-lg">
                  <TrendingUp size={24} className="text-secondary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Reports & Data</h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Access our annual reports, impact assessments, and research publications.
                </p>
                <span className="text-secondary font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1">
                  View Reports <ArrowRight size={16} />
                </span>
              </Link>

              <Link
                href="/get-involved"
                className="group p-6 bg-white rounded-xl border border-neutral-200 hover:shadow-lg transition-all"
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                  <Users size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Get Involved</h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Join our team, volunteer, partner with us, or support our mission.
                </p>
                <span className="text-primary font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1">
                  Explore Ways <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary-dark text-white">
          <div className="container-wide text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Whether you want to donate, partner with us, or get involved, there are many ways to support our mission of building peace and empowering communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="px-8 py-4 bg-secondary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Donate Today
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
