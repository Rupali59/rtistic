"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: "💒",
      title: "Wedding Paper Crafts",
      description:
        "Complete wedding stationery suite including invitations, save-the-dates, menus, place cards, and thank you notes.",
      features: [
        "Custom Design & Branding",
        "Premium Materials (Gold Foil, Handmade Paper)",
        "2-3 Week Turnaround",
        "Nationwide Delivery",
        "Unlimited Revisions",
        "Sample Options Available",
      ],
      price: "Starting from ₹5,000",
      timeline: "2-3 weeks",
      includes:
        "Invitations, Save-the-dates, Menus, Place cards, Thank you notes",
      popular: true,
    },
    {
      icon: "🏢",
      title: "Corporate Gifts",
      description:
        "Professional corporate gift packaging, branded materials, and event stationery for business occasions.",
      features: [
        "Brand Consistency & Logo Integration",
        "Bulk Orders (100-10,000+ pieces)",
        "Custom Branding & Colors",
        "Premium Quality Materials",
        "Volume Discounts Available",
        "Dedicated Account Manager",
      ],
      price: "Starting from ₹2,000",
      timeline: "1-2 weeks",
      includes: "Gift boxes, Branded stationery, Event materials, Welcome kits",
      popular: false,
    },
    {
      icon: "🎉",
      title: "Event Decorations",
      description:
        "Beautiful paper decorations for birthdays, anniversaries, baby showers, and special celebrations.",
      features: [
        "Custom Themes & Color Matching",
        "Installation Support (Mumbai)",
        "Unique Designs & Props",
        "Photo Booth Backdrops",
        "Centerpieces & Banners",
        "Cleanup Service Available",
      ],
      price: "Starting from ₹3,000",
      timeline: "1-2 weeks",
      includes:
        "Banners, Centerpieces, Photo props, Backdrops, Table decorations",
      popular: true,
    },
    {
      icon: "🎁",
      title: "Personal Gifts",
      description:
        "Thoughtful handmade paper gifts, memory books, greeting cards, and personalized items for loved ones.",
      features: [
        "Fully Personalized & Custom",
        "Handcrafted with Love",
        "Gift Wrapping Included",
        "Personal Message Cards",
        "Memory Books & Scrapbooks",
        "Same-day Delivery (Mumbai)",
      ],
      price: "Starting from ₹1,000",
      timeline: "1 week",
      includes: "Greeting cards, Memory books, Gift boxes, Personalized items",
      popular: false,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We discuss your vision, requirements, and preferences in detail.",
    },
    {
      step: "02",
      title: "Design",
      description:
        "Our team creates custom designs and presents you with options.",
    },
    {
      step: "03",
      title: "Approval",
      description: "You review and approve the final design before production.",
    },
    {
      step: "04",
      title: "Creation",
      description:
        "We craft your beautiful paper creations with care and precision.",
    },
    {
      step: "05",
      title: "Delivery",
      description:
        "Your finished products are carefully packaged and delivered.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-ivory-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-plum mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-charcoal-black/80 max-w-3xl mx-auto">
            From intimate celebrations to grand events, we offer comprehensive
            paper craft solutions tailored to your needs and budget.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg p-8 card-hover relative ${
                service.popular ? "ring-2 ring-gold-start" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold-start text-ivory-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-deep-plum mb-4">
                {service.title}
              </h3>
              <p className="text-charcoal-black/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center text-sm text-charcoal-black/80"
                  >
                    <svg
                      className="w-4 h-4 text-gold-start mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="bg-ivory-white/50 rounded-lg p-4 mb-6">
                <div className="text-sm text-charcoal-black/70 mb-2">
                  <strong>Timeline:</strong> {service.timeline}
                </div>
                <div className="text-sm text-charcoal-black/70">
                  <strong>Includes:</strong> {service.includes}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-semibold text-gold-start block">
                    {service.price}
                  </span>
                  <span className="text-xs text-charcoal-black/60">
                    Custom pricing available
                  </span>
                </div>
                <a
                  href="#contact"
                  className="btn-primary inline-block text-center"
                  aria-label={`Get quote for ${service.title}`}
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-deep-plum text-center mb-12">
            Our <span className="gradient-text">Process</span>
          </h3>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gold-start/30 transform translate-x-4 -z-10"></div>
                )}

                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-ivory-white font-bold text-lg mx-auto mb-4 relative z-10">
                  {step.step}
                </div>

                <h4 className="text-lg font-semibold text-deep-plum mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-charcoal-black/70">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-gold rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-deep-plum mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-deep-plum/80 mb-6">
            Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-deep-plum text-ivory-white px-8 py-3 rounded-lg font-medium hover:bg-charcoal-black transition-colors inline-block"
              aria-label="Get free quote for your project"
            >
              Get Free Quote
            </a>
            <a
              href="#portfolio"
              className="bg-ivory-white/20 text-deep-plum px-8 py-3 rounded-lg font-medium hover:bg-ivory-white/30 transition-colors inline-block"
              aria-label="View our portfolio of work"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
