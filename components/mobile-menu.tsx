'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-background border-r border-border shadow-xl">
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={closeMenu}
                  className="p-2 text-foreground hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Logo */}
              <div className="mb-8">
                <a 
                  href="/" 
                  className="flex flex-col items-start text-left leading-tight hover:opacity-90 transition-opacity"
                  onClick={closeMenu}
                >
                  <span className="text-xs font-semibold tracking-widest uppercase">NAT</span>
                  <span className="text-sm font-medium">Nilles Allsidige Tråklerier</span>
                </a>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-4">
                <a
                  href="/services"
                  className="block py-3 text-lg text-foreground hover:text-primary transition-colors border-b border-border/50"
                  onClick={closeMenu}
                >
                  Services
                </a>
                <a
                  href="/reviews"
                  className="block py-3 text-lg text-foreground hover:text-primary transition-colors border-b border-border/50"
                  onClick={closeMenu}
                >
                  Reviews
                </a>
                <a
                  href="/about"
                  className="block py-3 text-lg text-foreground hover:text-primary transition-colors border-b border-border/50"
                  onClick={closeMenu}
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="block py-3 text-lg text-foreground hover:text-primary transition-colors border-b border-border/50"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
