"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "JavaScript / TypeScript (React, Next.js, Node.js, Express)", percentage: 90, color: "bg-emerald-500" },
    { name: "Artificial Intelligence Expert (AI & ML)", percentage: 85, color: "bg-primary-500" },
    { name: ".NET Core & C# (Enterprise Systems)", percentage: 88, color: "bg-sky-500" },
    { name: "Backend Development & API Design", percentage: 89, color: "bg-rose-500" },
    { name: "Freelance Software Consultant", percentage: 80, color: "bg-indigo-500" },
    { name: "Core Banking Systems Architecture", percentage: 87, color: "bg-amber-500" },
  ];

  return (
    <section id="skills" className="pt-8 pb-12 md:pt-10 md:pb-12 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium rounded-full mb-4 text-sm tracking-wide">
            My Expertise
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-16">
            My Featured Skills
          </h3>
        </motion.div>

        <div className="space-y-8 text-left">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  {skill.name}
                </span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {skill.percentage}%
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  className={`h-3 rounded-full ${skill.color}`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
