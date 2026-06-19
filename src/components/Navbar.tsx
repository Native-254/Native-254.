import React, { useState, useEffect } from 'react';
import Icon from './Icon';

// PROVISION FOR LOGO IMAGE: Replace the empty string below with your logo image URL/path (e.g., "/logo.png" or "https://...") to display your custom brand image.
export const LOGO_URL = "";

interface NavbarProps {
  cartCount: number;
  onCartToggle: () => void;
}

export default function Navbar({ cartCount, onCartToggle }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-[68px] z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-900 shadow-md'
          : 'bg-neutral-950/40 backdrop-blur-xs border-b border-transparent'
      }`}
      role="navigation"
      aria-label="Native 254 Main navigation"
    >
      <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
        {/* Logo Brand info */}
        <a href="#top" className="flex items-center gap-3 group" aria-label="Native 254 Homepage">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform overflow-hidden">
            {LOGO_URL ? (
              <img
                src={LOGO_URL}
                alt="Native 254"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            ) : (
              "N"
            )}
          </div>
          <span className="font-heading text-xl font-extrabold text-neutral-100 tracking-tight group-hover:text-primary-400 transition-colors">
            Native 254
          </span>
        </a>

        {/* Desktop Links list */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-300">
          <a href="#services" className="hover:text-primary-400 transition-colors">
            IT Solutions
          </a>
          <a href="#education" className="hover:text-primary-400 transition-colors">
            Education
          </a>
          <a href="#contact" className="hover:text-primary-400 transition-colors">
            Contact Us
          </a>
        </div>

        {/* Buttons and Cart Badge indicators */}
        <div className="flex items-center gap-3">
          <button
            onClick={onCartToggle}
            className="relative h-10 w-10 rounded-full bg-neutral-900/80 hover:bg-neutral-850 border border-neutral-800 flex items-center justify-center text-neutral-200 transition-all hover:scale-105 active:scale-95"
            aria-label={`Open shopping cart showing ${cartCount} items`}
          >
            <Icon name="ShoppingCart" size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary-500 text-white text-[10px] font-extrabold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Toggle Hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden h-10 w-10 flex items-center justify-center rounded-full hover:bg-neutral-900 transition-colors text-neutral-300"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>

      {/* Mobile links dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[68px] left-0 right-0 bg-neutral-950 border-b border-neutral-900 py-4 px-6 flex flex-col gap-4 shadow-xl text-neutral-300 text-sm font-semibold animate-fade-in">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 hover:bg-neutral-900 hover:text-white rounded-lg"
          >
            IT Solutions
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 hover:bg-neutral-900 hover:text-white rounded-lg"
          >
            Education Center
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 hover:bg-neutral-900 hover:text-white rounded-lg"
          >
            Contact Desk
          </a>
        </div>
      )}
    </nav>
  );
}
