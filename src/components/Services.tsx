"use client";

import { motion } from "framer-motion";
import { Landmark, Sparkles, Database, Briefcase } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Landmark className="w-10 h-10 mb-4 text-primary-600" />,
      title: "Core Banking Systems",
      description: "Develop scalable and highly secure core banking systems with a focus on reliability and performance.",
    },
    {
      icon: <Sparkles className="w-10 h-10 mb-4 text-primary-600" />,
      title: "AI & ML Solutions",
      description: "Harness the power of AI to automate processes, build predictive models, and integrate intelligent features.",
    },
    {
      icon: <Database className="w-10 h-10 mb-4 text-primary-600" />,
      title: "Backend Development",
      description: "Design and implement high-performance APIs and robust distributed systems architectures.",
    },
    {
      icon: <Briefcase className="w-10 h-10 mb-4 text-primary-600" />,
      title: "Consulting & Writing",
      description: "Professional technical writing, project management, and strategic software consulting services.",
    },
  ];

  return (
    <section id="services" className="pt-12 pb-12 md:pt-16 md:pb-12 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-medium rounded-full mb-4 text-sm tracking-wide">
            Services
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-16">
            What I Do For You
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-col items-center"
            >
              <div className="bg-primary-50 dark:bg-slate-700 p-4 rounded-2xl mb-6">
                {service.icon}
              </div>
              <h5 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h5>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
