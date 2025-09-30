"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "weddings", label: "Weddings" },
    { id: "corporate", label: "Corporate" },
    { id: "personal", label: "Personal Gifts" },
    { id: "events", label: "Events" },
  ];

  const portfolioItems = [
    {
      id: 1,
      image: "/images/art1.jpeg",
      title: "Elegant Wedding Invitations",
      category: "weddings",
      description:
        "Custom-designed wedding invitation suite with gold foil detailing",
    },
    {
      id: 2,
      image: "/images/art2.jpeg",
      title: "Corporate Gift Boxes",
      category: "corporate",
      description: "Premium corporate gift packaging for client appreciation",
    },
    {
      id: 3,
      image: "/images/art3.jpeg",
      title: "Birthday Celebration Kit",
      category: "personal",
      description:
        "Personalized birthday celebration paper crafts and decorations",
    },
    {
      id: 4,
      image: "/images/art4.jpeg",
      title: "Festival Greeting Cards",
      category: "personal",
      description:
        "Handcrafted festival greeting cards with traditional motifs",
    },
    {
      id: 5,
      image: "/images/art5.jpeg",
      title: "Anniversary Memory Book",
      category: "personal",
      description: "Custom anniversary memory book with photo pockets",
    },
    {
      id: 6,
      image: "/images/art6.jpeg",
      title: "Corporate Event Materials",
      category: "corporate",
      description: "Complete event branding and paper materials",
    },
    {
      id: 7,
      image: "/images/art7.jpeg",
      title: "Bridal Shower Favors",
      category: "weddings",
      description: "Beautiful bridal shower favor boxes and tags",
    },
    {
      id: 8,
      image: "/images/art8.jpeg",
      title: "Baby Shower Decorations",
      category: "events",
      description: "Adorable baby shower paper decorations and banners",
    },
    {
      id: 9,
      image: "/images/art9.jpeg",
      title: "Holiday Gift Wrapping",
      category: "personal",
      description: "Festive holiday gift wrapping and tags collection",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-deep-plum">
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
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-ivory-white/90 max-w-3xl mx-auto">
            Explore our collection of beautiful paper craft creations. Each
            piece is carefully crafted with love and attention to detail.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gold-start text-ivory-white shadow-lg"
                  : "bg-ivory-white/10 text-ivory-white hover:bg-gold-start/20"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-ivory-white shadow-xl card-hover">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-plum/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-ivory-white">
                      <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-deep-plum group-hover:text-gold-start transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs bg-gold-start/20 text-gold-start px-3 py-1 rounded-full capitalize">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-charcoal-black/70 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-gold-end mb-4">
            Love What You See?
          </h3>
          <p className="text-ivory-white/90 mb-6">
            Let&apos;s create something beautiful together for your special
            occasion.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
