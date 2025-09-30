"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Bride",
      location: "Mumbai",
      image: "/images/testimonial1.jpg",
      rating: 5,
      text: "RTistic created the most beautiful wedding invitations for our special day. The attention to detail and quality was exceptional. Our guests couldn't stop complimenting them!",
      project: "Wedding Invitation Suite",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Corporate Client",
      location: "Delhi",
      image: "/images/testimonial2.jpg",
      rating: 5,
      text: "We've been using RTistic for our corporate gifts for 3 years now. Their professionalism and creativity never disappoint. Our clients love the personalized touch.",
      project: "Corporate Gift Packaging",
    },
    {
      id: 3,
      name: "Anita Patel",
      role: "Event Organizer",
      location: "Bangalore",
      image: "/images/testimonial3.jpg",
      rating: 5,
      text: "The baby shower decorations were absolutely perfect! RTistic understood our vision and brought it to life beautifully. Highly recommended for any special occasion.",
      project: "Baby Shower Decorations",
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Groom",
      location: "Pune",
      image: "/images/testimonial4.jpg",
      rating: 5,
      text: "From consultation to delivery, RTistic made our wedding planning stress-free. The quality of their work exceeded our expectations. Worth every penny!",
      project: "Complete Wedding Stationery",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects Completed" },
    { number: "50+", label: "Cities Served" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  const clientLogos = [
    { name: "Tata Group", logo: "/images/logo-tata.png" },
    { name: "Reliance", logo: "/images/logo-reliance.png" },
    { name: "Infosys", logo: "/images/logo-infosys.png" },
    { name: "Wipro", logo: "/images/logo-wipro.png" },
    { name: "Mahindra", logo: "/images/logo-mahindra.png" },
    { name: "Godrej", logo: "/images/logo-godrej.png" },
  ];

  return (
    <section id="testimonials" className="section-padding bg-ivory-white">
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
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-charcoal-black/80 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience with RTistic.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gold-start mb-2">
                {stat.number}
              </div>
              <div className="text-charcoal-black/70 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold-start"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-charcoal-black/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Project Badge */}
              <div className="inline-block bg-gold-start/20 text-gold-start px-3 py-1 rounded-full text-sm font-medium mb-4">
                {testimonial.project}
              </div>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-ivory-white font-semibold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-deep-plum">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-charcoal-black/60">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-deep-plum mb-8">
            Trusted by Leading Brands
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="text-2xl font-bold text-charcoal-black/40">
                  {client.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-deep-plum mb-4">
            Ready to Join Our Happy Clients?
          </h3>
          <p className="text-charcoal-black/80 mb-6">
            Let us create something beautiful for your special occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="btn-primary text-lg px-8 py-4 inline-block"
              aria-label="Get free quote for your project"
            >
              Get Free Quote
            </a>
            <a
              href="#portfolio"
              className="bg-ivory-white text-deep-plum border-2 border-deep-plum px-8 py-4 rounded-lg font-medium hover:bg-deep-plum hover:text-ivory-white transition-colors inline-block"
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
