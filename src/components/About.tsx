"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const features = [
    {
      icon: "🎨",
      title: "Custom Design",
      description:
        "Every piece is uniquely crafted to match your vision and requirements.",
    },
    {
      icon: "✨",
      title: "Premium Quality",
      description:
        "We use only the finest materials to ensure lasting beauty and durability.",
    },
    {
      icon: "💝",
      title: "Personal Touch",
      description:
        "Each creation is infused with love and attention to detail.",
    },
    {
      icon: "🚚",
      title: "Nationwide Delivery",
      description: "We deliver our beautiful creations across India with care.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-ivory-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-deep-plum mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About <span className="gradient-text">RTistic</span>
            </motion.h2>

            <motion.p
              className="text-lg text-charcoal-black/80 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At RTistic, we believe that every moment deserves to be celebrated
              with something truly special. Our journey began in 2018 when our founder, 
              Rupali, started crafting personalized paper gifts for friends and family 
              from her small Mumbai apartment.
            </motion.p>

            <motion.p
              className="text-lg text-charcoal-black/80 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              What started as a passion project quickly grew into a full-service 
              gifting agency. Today, we've created over 1000+ beautiful paper crafts 
              for clients across India, from intimate wedding invitations to grand 
              corporate events. Our team of skilled artisans brings years of experience 
              and an unwavering commitment to excellence.
            </motion.p>

            <motion.div
              className="bg-gradient-gold rounded-xl p-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-start">
                <div className="text-3xl mr-4">💝</div>
                <div>
                  <h4 className="text-lg font-semibold text-deep-plum mb-2">
                    Our Mission
                  </h4>
                  <p className="text-deep-plum/80 text-sm">
                    To transform ordinary moments into extraordinary memories through 
                    handcrafted paper creations that tell your unique story.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg card-hover"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-deep-plum mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-charcoal-black/70 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative z-10 mb-6">
              <Image
                src="/images/art2.jpeg"
                alt="RTistic handmade paper craft workshop in Mumbai - premium wedding invitation design process"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>

            {/* Secondary Images */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Image
                  src="/images/art3.jpeg"
                  alt="Handmade paper craft detail with gold foil embellishments - RTistic premium wedding stationery"
                  width={250}
                  height={200}
                  className="rounded-xl shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative"
              >
                <Image
                  src="/images/art4.jpeg"
                  alt="Custom handcrafted paper creation with traditional Indian motifs - RTistic personalized gifts Mumbai"
                  width={250}
                  height={200}
                  className="rounded-xl shadow-lg"
                />
                {/* Decorative Badge */}
                <div className="absolute -top-4 -right-4 bg-gold-start text-ivory-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Handmade
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -inset-8 bg-gradient-rose rounded-3xl opacity-10 blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
