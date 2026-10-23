import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import MobileMenu from '@/components/mobile-menu'
import './globals.css'

export const metadata: Metadata = {
  title: 'NAT | Nilles Allsidige Tråklerier',
  description: 'Professional translations in English, German, and Norwegian. Accurate, reliable, and culturally nuanced translations by Nille.',
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${GeistMono.variable}`}>
        {/* Header (shared) */}
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <a href="/" className="flex flex-col items-start text-left leading-tight hover:opacity-90 transition-opacity">
                <span className="text-xs font-semibold tracking-widest uppercase">NAT</span>
                <span className="text-sm md:text-base font-medium">Nilles Allsidige Tråklerier</span>
              </a>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/services" className="text-foreground hover:text-primary transition-colors">
                  Services
                </a>
                <a href="/reviews" className="text-foreground hover:text-primary transition-colors">
                  Reviews
                </a>
                <a href="/about" className="text-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="/contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
              <MobileMenu />
            </nav>
          </div>
        </header>

        <main>
          {children}
        </main>

        {/* Footer (shared) */}
        <footer className="py-12 px-4 bg-accent text-accent-foreground">
          <div className="container mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:max-w-xs">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold">Nilles Allsidige Tråklerier</span>
                </div>
                <p className="text-accent-foreground/80">
                  Professional translation services bridging languages and cultures with expertise and precision.
                </p>
              </div>
              <div className="md:justify-self-center">
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-accent-foreground/80">
                  <li>Research Reports</li>
                  <li>Marketing Materials</li>
                  <li>HR Documents</li>
                  <li>Legal Texts</li>
                  <li>Localization</li>
                  <li>Technical Manuals</li>
                </ul>
              </div>
              <div className="md:justify-self-end">
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-accent-foreground/80">
                  <li>nille@nilles.no</li>
                  <li>+4746967699</li>
                  <li>Gruetjernsvegen 11<br />N-2260, Kirkenær</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-accent-foreground/60">
              <p>&copy; 2025 Julie Andreus. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
