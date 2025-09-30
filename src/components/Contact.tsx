"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/rtistic",
      icon: "📷",
      handle: "@rtistic",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/rtistic",
      icon: "📘",
      handle: "RTistic",
    },
    {
      name: "Pinterest",
      url: "https://www.pinterest.com/rtistic",
      icon: "📌",
      handle: "RTistic",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/919876543210",
      icon: "💬",
      handle: "+91 98765 43210",
    },
  ];

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      details: "hello@rtistic.com",
      link: "mailto:hello@rtistic.com",
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: "📍",
      title: "Location",
      details: "Mumbai, Maharashtra, India",
      link: "#",
    },
    {
      icon: "⏰",
      title: "Business Hours",
      details: "Mon - Sat: 9AM - 7PM",
      link: "#",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(result.message);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-deep-plum">
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-ivory-white/90 max-w-3xl mx-auto">
            Ready to bring your paper craft vision to life? We&apos;d love to
            hear from you and discuss how we can make your special occasion even
            more memorable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-ivory-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-deep-plum mb-6">
                Send us a Message
              </h3>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                >
                  ✅ {submitMessage}
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
                >
                  ❌ {submitMessage}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-deep-plum mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-warm-gray rounded-lg focus:ring-2 focus:ring-gold-start focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-deep-plum mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-warm-gray rounded-lg focus:ring-2 focus:ring-gold-start focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-deep-plum mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-warm-gray rounded-lg focus:ring-2 focus:ring-gold-start focus:border-transparent transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-deep-plum mb-2"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-warm-gray rounded-lg focus:ring-2 focus:ring-gold-start focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="wedding">Wedding Paper Crafts</option>
                      <option value="corporate">Corporate Gifts</option>
                      <option value="event">Event Decorations</option>
                      <option value="personal">Personal Gifts</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-deep-plum mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-warm-gray rounded-lg focus:ring-2 focus:ring-gold-start focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project requirements, timeline, and any specific ideas you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary text-lg py-4 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gold-end mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center p-4 bg-ivory-white/10 rounded-xl hover:bg-ivory-white/20 transition-colors group"
                  >
                    <div className="text-2xl mr-4">{info.icon}</div>
                    <div>
                      <div className="text-ivory-white font-medium">
                        {info.title}
                      </div>
                      <div className="text-ivory-white/80 text-sm group-hover:text-ivory-white transition-colors">
                        {info.details}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-semibold text-gold-end mb-6">
                Follow Us
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center p-4 bg-ivory-white/10 rounded-xl hover:bg-gold-start/20 transition-all duration-300 group"
                  >
                    <div className="text-2xl mr-3">{social.icon}</div>
                    <div>
                      <div className="text-ivory-white font-medium text-sm group-hover:text-gold-start transition-colors">
                        {social.name}
                      </div>
                      <div className="text-ivory-white/60 text-xs">
                        {social.handle}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Response Promise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-gold rounded-xl p-6"
            >
              <div className="text-2xl mb-3">⚡</div>
              <h4 className="text-lg font-semibold text-deep-plum mb-2">
                Quick Response Guarantee
              </h4>
              <p className="text-deep-plum/80 text-sm">
                We respond to all inquiries within 24 hours. For urgent
                projects, contact us directly via WhatsApp for immediate
                assistance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
