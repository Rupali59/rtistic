"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary based on complexity and quantity. Wedding invitations typically take 2-3 weeks, corporate gifts 1-2 weeks, and personal gifts 1 week. Rush orders are available for urgent projects with a 25% surcharge.",
    },
    {
      id: 2,
      question: "What is your pricing structure?",
      answer: "Our pricing starts from ₹1,000 for personal gifts, ₹2,000 for corporate gifts, ₹3,000 for event decorations, and ₹5,000 for wedding stationery. Final pricing depends on design complexity, materials used, and quantity ordered. We provide detailed quotes within 24 hours.",
    },
    {
      id: 3,
      question: "Do you offer customization options?",
      answer: "Absolutely! Every project is fully customizable. We can match your brand colors, incorporate specific themes, add personal messages, and create unique designs based on your vision. Our design team works closely with you throughout the process.",
    },
    {
      id: 4,
      question: "What areas do you deliver to?",
      answer: "We deliver nationwide across India. Local Mumbai deliveries are free, while other cities have shipping charges based on weight and distance. Express delivery options are available for urgent orders.",
    },
    {
      id: 5,
      question: "What materials do you use?",
      answer: "We use premium quality papers, cardstock, and embellishments sourced from trusted suppliers. Our materials include handmade papers, metallic foils, ribbons, beads, and eco-friendly options. All materials are carefully selected for durability and aesthetic appeal.",
    },
    {
      id: 6,
      question: "Can I see samples before placing an order?",
      answer: "Yes! We provide physical samples for wedding invitations and corporate projects. Sample charges are ₹500 per design, which is fully refundable when you place your order. Digital mockups are provided free of charge.",
    },
    {
      id: 7,
      question: "What if I'm not satisfied with the final product?",
      answer: "Your satisfaction is our priority. We offer unlimited revisions during the design phase and will remake products if they don't meet our quality standards. We have a 100% satisfaction guarantee on all our work.",
    },
    {
      id: 8,
      question: "Do you handle bulk orders for corporate clients?",
      answer: "Yes, we specialize in bulk corporate orders and offer volume discounts. We can handle orders from 100 to 10,000+ pieces with consistent quality and timely delivery. Corporate clients also get dedicated account management.",
    },
    {
      id: 9,
      question: "How do I place an order?",
      answer: "Simply fill out our contact form, call us at +91 98765 43210, or WhatsApp us. We'll schedule a free consultation to understand your requirements and provide a detailed quote within 24 hours.",
    },
    {
      id: 10,
      question: "Do you offer installation services for event decorations?",
      answer: "Yes, we provide installation services for event decorations in Mumbai and surrounding areas. Our team handles setup, arrangement, and cleanup. Installation charges are separate and quoted based on complexity and location.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding bg-deep-plum">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gold-end mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-ivory-white/90 max-w-3xl mx-auto">
            Got questions? We've got answers! Here are the most common questions our clients ask.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-ivory-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-ivory-white/20 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-ivory-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className="w-6 h-6 text-gold-start"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === faq.id ? "auto" : 0,
                    opacity: openFAQ === faq.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-ivory-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-gold-end mb-4">
            Still Have Questions?
          </h3>
          <p className="text-ivory-white/90 mb-6">
            We're here to help! Contact us directly for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp Us
            </a>
            <button className="btn-primary text-lg px-8 py-4">
              Contact Form
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
