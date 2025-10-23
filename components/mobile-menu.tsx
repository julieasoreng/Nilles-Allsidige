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
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />
          
          {/* Menu Panel with solid background */}
          <div className="mobile-menu-panel fixed right-0 top-0 w-2/3 h-full shadow-xl transform transition-transform duration-300 ease-in-out translate-x-0">
            <div className="p-6" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={closeMenu}
                  className="p-2 text-white hover:text-gray-200 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>


              {/* Navigation Links */}
              <nav className="space-y-4">
                <a
                  href="/services"
                  className="block py-3 text-lg text-white hover:text-gray-200 transition-colors border-b border-white/20"
                  onClick={closeMenu}
                >
                  Services
                </a>
                <a
                  href="/reviews"
                  className="block py-3 text-lg text-white hover:text-gray-200 transition-colors border-b border-white/20"
                  onClick={closeMenu}
                >
                  Reviews
                </a>
                <a
                  href="/about"
                  className="block py-3 text-lg text-white hover:text-gray-200 transition-colors border-b border-white/20"
                  onClick={closeMenu}
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="block py-3 text-lg text-white hover:text-gray-200 transition-colors border-b border-white/20"
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
