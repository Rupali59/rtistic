"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  const services = [
    { label: "Wedding Paper Crafts" },
    { label: "Corporate Gifts" },
    { label: "Event Decorations" },
    { label: "Personal Gifts" },
    { label: "Custom Designs" },
  ];

  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/rtistic", icon: "📷" },
    { name: "Facebook", url: "https://www.facebook.com/rtistic", icon: "📘" },
    { name: "Pinterest", url: "https://www.pinterest.com/rtistic", icon: "📌" },
    { name: "WhatsApp", url: "https://wa.me/919876543210", icon: "💬" },
  ];

  return (
    <footer className="bg-deep-plum text-ivory-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image
                src="/images/logo.jpeg"
                alt="RTistic Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold font-serif">RTistic</span>
            </Link>
            <p className="text-ivory-white/80 mb-6 leading-relaxed">
              Creating beautiful, personalized paper crafts that make every
              moment special. Handcrafted with love and attention to detail.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gold-start/20 rounded-full flex items-center justify-center hover:bg-gold-start/30 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-muted-sage">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-ivory-white/80 hover:text-gold-start transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-muted-sage">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-ivory-white/80 hover:text-gold-start transition-colors cursor-pointer">
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-muted-sage">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-gold-start mt-1">📧</span>
                <div>
                  <div className="text-ivory-white/80 text-sm">Email</div>
                  <a
                    href="mailto:hello@rtistic.com"
                    className="text-ivory-white hover:text-gold-start transition-colors"
                  >
                    hello@rtistic.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-gold-start mt-1">📞</span>
                <div>
                  <div className="text-ivory-white/80 text-sm">Phone</div>
                  <a
                    href="tel:+919876543210"
                    className="text-ivory-white hover:text-gold-start transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-gold-start mt-1">📍</span>
                <div>
                  <div className="text-ivory-white/80 text-sm">Location</div>
                  <span className="text-ivory-white">
                    Mumbai, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-start/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-ivory-white/60 text-sm">
              © {currentYear} RTistic. All rights reserved. Crafted with ❤️ in
              India.
            </div>

            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-ivory-white/60 hover:text-gold-start transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-ivory-white/60 hover:text-gold-start transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-ivory-white/60 hover:text-gold-start transition-colors"
              >
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
