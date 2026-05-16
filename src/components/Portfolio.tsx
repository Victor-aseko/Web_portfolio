"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    { id: 1, image: "/Assets/miniBoutique.png", title: "MiniBoutique Fashion App", link: "https://github.com/Victor-aseko/BoutiqueMiniMart" },
    { id: 2, image: "/Assets/ExpenseTBImage.jpg", title: "Expense Tracker App", link: "https://react-expenses-tracker-vic.netlify.app/" },
    { id: 3, image: "/Assets/WebDesign.jpg", title: "Forkify Web Application", link: "https://victor-aseko-forkify.netlify.app/" },
    { id: 4, image: "/Assets/Web_design.jpg", title: "Flight Booking", link: "https://github.com/Victor-aseko/Flight_UI" },
  ];

  return (
    <section id="portfolio" className="pt-8 pb-24 md:pt-10 md:pb-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-medium rounded-full mb-4 text-sm tracking-wide">
            Portfolio
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            My Latest Work
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-lg mb-16 max-w-2xl mx-auto">
            Welcome to my Web Development Portfolio! Explore a Collection of Projects showcasing my Expertise in Fullstack Development
          </p>
        </motion.div>

        {/* Scrolling container */}
        <div className="relative w-full overflow-hidden py-8">
          <div className="flex flex-nowrap gap-6 w-max scrolling">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20, duration: 0.6, delay: index * 0.12 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] shrink-0 aspect-[4/3] bg-slate-200 dark:bg-slate-800"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-sm">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-white text-xl font-bold mb-2">{project.title}</h4>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary-600 hover:bg-primary-500 text-white p-3 rounded-full mt-2 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS animation for continuous back‑and‑forth scroll */}
      <style jsx>{`
        .scrolling {
          position: relative;
          animation: scrollLR 20s ease-in-out infinite alternate;
        }
        .scrolling:hover {
          animation-play-state: paused;
        }
        @keyframes scrollLR {
          0%, 5% { 
            left: 0; 
            transform: translateX(0); 
          }
          95%, 100% { 
            left: 100%; 
            transform: translateX(-100%); 
          }
        }
      `}</style>
    </section>
  );
}
