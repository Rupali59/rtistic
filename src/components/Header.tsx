"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-deep-plum/95 backdrop-blur-md shadow-lg"
          : "bg-deep-plum"
      }`}
      role="banner"
    >
      <nav
        className="container-max"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3"
            aria-label="RTistic - Go to homepage"
          >
            <Image
              src="/images/logo.jpeg"
              alt="RTistic Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-ivory-white text-xl font-bold font-serif">
              RTistic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-ivory-white hover:text-gold-start transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-gold-start focus:ring-offset-2 focus:ring-offset-deep-plum rounded px-2 py-1"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </Link>
            ))}
            <button
              className="btn-primary focus:outline-none focus:ring-2 focus:ring-gold-start focus:ring-offset-2 focus:ring-offset-deep-plum"
              aria-label="Get a quote for your project"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ivory-white focus:outline-none focus:ring-2 focus:ring-gold-start focus:ring-offset-2 focus:ring-offset-deep-plum rounded p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={
              isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-deep-plum border-t border-gold-start/20"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-ivory-white hover:text-gold-start transition-colors duration-300 font-medium py-2 focus:outline-none focus:ring-2 focus:ring-gold-start focus:ring-offset-2 focus:ring-offset-deep-plum rounded px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                className="btn-primary w-full mt-4 focus:outline-none focus:ring-2 focus:ring-gold-start focus:ring-offset-2 focus:ring-offset-deep-plum"
                aria-label="Get a quote for your project"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
