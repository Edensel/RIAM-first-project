'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Impact', href: '/impact' },
    { label: 'Where We Work', href: '/where-we-work' },
    { label: 'News', href: '/news' },
    { label: 'Get Involved', href: '/get-involved' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-foreground leading-none">RIAMRIAM</h1>
              <p className="text-xs text-neutral-600">Peace & Development</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button + Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/donate"
              className="hidden md:inline-flex px-6 py-2 bg-secondary text-white rounded-lg font-semibold text-sm hover:bg-opacity-90 transition-all"
            >
              Donate
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-neutral-100 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-neutral-200 py-4 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-foreground hover:bg-neutral-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="block px-4 py-2 bg-secondary text-white rounded-lg font-semibold text-sm text-center hover:bg-opacity-90 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Donate
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
