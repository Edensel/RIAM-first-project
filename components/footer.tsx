import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    about: [
      { label: 'Our Mission', href: '/about#mission' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'History', href: '/about#history' },
      { label: 'Governance', href: '/about#governance' },
    ],
    programs: [
      { label: 'Peace Building', href: '/programs/peace-building' },
      { label: 'Community Development', href: '/programs/community-development' },
      { label: 'Humanitarian Response', href: '/programs/humanitarian' },
      { label: 'Governance', href: '/programs/governance' },
    ],
    resources: [
      { label: 'Reports & Data', href: '/resources/reports' },
      { label: 'Publications', href: '/resources/publications' },
      { label: 'News & Blog', href: '/news' },
      { label: 'Career Opportunities', href: '/careers' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Terms of Service', href: '/legal/terms' },
      { label: 'Accessibility', href: '/legal/accessibility' },
      { label: 'Contact', href: '/contact' },
    ],
  }

  return (
    <footer className="bg-primary-dark text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container-wide py-12 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us in Building Peace</h2>
            <p className="text-white/80 mb-8">
              Whether you're looking to support our work, partner with us, or learn more, we'd love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <h3 className="text-lg font-bold mb-1">RIAMRIAM</h3>
              <p className="text-sm text-white/70">Peace and Development Network</p>
            </div>
            <div className="space-y-3">
              <a href="tel:+254792618189" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <span className="text-sm">+254 792 618 189</span>
              </a>
              <a href="mailto:info@riamriam.org" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <span className="text-sm">info@riamriam.org</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span className="text-sm">P.O. Box 246<br />Lodwar 30500, Kenya</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              {links.about.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {links.programs.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://www.facebook.com/Riamiriam"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm font-semibold"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/Riamiriam"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm font-semibold"
              aria-label="Twitter/X"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/riamriam-peace-and-development"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm font-semibold"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-white/10">
            <p className="text-white/60 text-sm">
              © {currentYear} RIAMRIAM Peace and Development Network. All rights reserved.<br />
              <span className="text-xs">Building Peace. Empowering Communities. Transforming Lives.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
