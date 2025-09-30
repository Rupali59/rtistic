"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  createDelayedAnimation,
} from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-deep-plum overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>

      {/* Floral Decoration Elements - Using CSS animations instead of Framer Motion */}
      <div className="absolute top-20 left-10 w-20 h-20 text-dusty-rose opacity-30 animate-float">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10 C70 30, 90 50, 50 90 C30 70, 10 50, 50 10 Z" />
        </svg>
      </div>
      <div
        className="absolute top-40 right-20 w-16 h-16 text-muted-sage opacity-30 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>
      <div
        className="absolute bottom-32 left-1/4 w-12 h-12 text-gold-start opacity-30 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 20 L80 80 L20 80 Z" />
        </svg>
      </div>

      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
          {/* Content */}
          <motion.div {...fadeInLeft} className="text-center lg:text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-end mb-6"
              {...createDelayedAnimation(fadeInUp, 0.2)}
            >
              Crafting Dreams
              <span className="block gradient-text">Into Reality</span>
            </motion.h1>

            <motion.p
              className="text-xl text-ivory-white/90 mb-8 leading-relaxed"
              {...createDelayedAnimation(fadeInUp, 0.4)}
            >
              Welcome to RTistic, Mumbai's premier paper craft gifting agency. 
              Since 2018, we've created over 1000+ beautiful, personalized paper 
              crafts for weddings, corporate events, and special celebrations across India.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              {...createDelayedAnimation(fadeInUp, 0.5)}
            >
              <div className="flex items-center bg-ivory-white/10 rounded-full px-4 py-2">
                <span className="text-gold-start mr-2">⭐</span>
                <span className="text-sm text-ivory-white">4.9/5 Rating</span>
              </div>
              <div className="flex items-center bg-ivory-white/10 rounded-full px-4 py-2">
                <span className="text-gold-start mr-2">🏆</span>
                <span className="text-sm text-ivory-white">Award Winning</span>
              </div>
              <div className="flex items-center bg-ivory-white/10 rounded-full px-4 py-2">
                <span className="text-gold-start mr-2">🚚</span>
                <span className="text-sm text-ivory-white">Pan India Delivery</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              {...createDelayedAnimation(fadeInUp, 0.6)}
            >
              <a
                href="#portfolio"
                className="btn-primary text-lg px-8 py-4 focus:outline-none focus:ring-2 focus:ring-gold-start focus:ring-offset-2 focus:ring-offset-deep-plum"
                aria-label="Explore our portfolio of paper craft creations"
              >
                Explore Our Work
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi! I'm interested in your paper craft services. Can you help me with a quote?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4 focus:outline-none focus:ring-2 focus:ring-dusty-rose focus:ring-offset-2 focus:ring-offset-deep-plum"
                aria-label="Start your custom paper craft project via WhatsApp"
              >
                Get WhatsApp Quote
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gold-start/20"
              {...createDelayedAnimation(fadeInUp, 0.8)}
              role="region"
              aria-label="Company statistics"
            >
              <div
                className="text-center"
                role="group"
                aria-label="Happy clients count"
              >
                <div
                  className="text-3xl font-bold text-gold-start"
                  aria-label="500 plus"
                >
                  500+
                </div>
                <div className="text-ivory-white/80">Happy Clients</div>
              </div>
              <div
                className="text-center"
                role="group"
                aria-label="Projects completed count"
              >
                <div
                  className="text-3xl font-bold text-gold-start"
                  aria-label="1000 plus"
                >
                  1000+
                </div>
                <div className="text-ivory-white/80">Projects Done</div>
              </div>
              <div
                className="text-center"
                role="group"
                aria-label="Years of experience"
              >
                <div
                  className="text-3xl font-bold text-gold-start"
                  aria-label="5 plus"
                >
                  5+
                </div>
                <div className="text-ivory-white/80">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            {...createDelayedAnimation(fadeInRight, 0.3)}
            className="relative"
          >
            <div className="relative z-10">
              <Image
                src="/images/art1.jpeg"
                alt="Premium handmade wedding invitation with gold foil detailing by RTistic Mumbai - custom paper craft design"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>

            {/* Decorative Frame */}
            <div className="absolute -inset-4 bg-gradient-gold rounded-3xl opacity-20 blur-xl"></div>

            {/* Floating Elements - Simplified animations */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-dusty-rose/20 rounded-full blur-sm animate-pulse"></div>
            <div
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-muted-sage/20 rounded-full blur-sm animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        role="button"
        tabIndex={0}
        aria-label="Scroll down to see more content"
        onClick={() => {
          const aboutSection = document.getElementById("about");
          aboutSection?.scrollIntoView({ behavior: "smooth" });
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            const aboutSection = document.getElementById("about");
            aboutSection?.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <div className="w-6 h-10 border-2 border-gold-start rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-gold-start rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
