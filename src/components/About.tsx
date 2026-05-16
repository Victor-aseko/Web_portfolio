"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone, User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* About Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex w-full md:w-5/12 justify-center md:-mt-24 mb-8 md:mb-0"
          >
            <div className="relative w-72 aspect-[3/4] sm:w-80 sm:aspect-[3/4]">
              <div className="absolute inset-0 bg-primary-500 rounded-3xl transform -translate-x-4 translate-y-4 opacity-20"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl z-10">
                <Image
                  src="/Assets/Image3.png" 
                  alt="Victor Aseko"
                  fill
                  sizes="(max-width: 768px) 288px, 320px"
                  className="object-cover brightness-110"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-7/12"
          >
            <div className="inline-block px-4 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium rounded-full mb-4 text-sm tracking-wide">
              My Biography
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Software Development & Architecture
            </h2>
            <div className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed space-y-6">
              <div className="space-y-4">
                <p>
                  I am Victor Aseko, a Software Developer specializing in building highly robust, secure, and scalable Core Banking Systems. My journey began with frontend technologies, but quickly evolved into a deep passion for backend architecture and systems programming. 
                </p>
                <p>
                  Beyond enterprise systems, I consult on diverse technical and non-technical projects, collaborating with teams globally to deliver comprehensive software solutions that drive operational excellence.
                </p>
                <p>Most of my work involves designing reliable systems, optimizing performance, and occasionally staring at logs long enough for the problem to confess on its own.                </p>
              </div>




              {/* Mobile Image - Placed before Technical Stack on small screens */}
              <div className="md:hidden flex justify-center py-6">
                <div className="relative w-full max-w-[280px] aspect-[3/4]">
                  <div className="absolute inset-0 bg-primary-500 rounded-3xl transform -translate-x-3 translate-y-3 opacity-20"></div>
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-xl z-10">
                    <Image
                      src="/Assets/Image3.png"
                      alt="Victor Aseko"
                      fill
                      sizes="280px"
                      className="object-cover brightness-110"
                    />
                  </div>
                </div>
              </div>

              <div>
                <strong>🚀 Technical Stack:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1 text-base">
                  <li><strong>JavaScript Ecosystem:</strong> React.js, Next.js, Node.js, Express.js</li>
                  <li><strong>Enterprise Development:</strong> .NET Core, C#, ASP.NET MVC</li>
                  <li><strong>Databases:</strong> SQL Server, PostgreSQL, MongoDB (NoSQL), Redis</li>
                  <li><strong>Other:</strong> Python (Django), TypeScript, RESTful APIs</li>
                </ul>
              </div>
              <p>
                <strong>🎓 Education:</strong> Bachelor of Science in Computer Science
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-primary-50 dark:bg-slate-800 p-3 rounded-lg text-primary-600 dark:text-primary-400">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-500 dark:text-slate-400 font-medium">Name</h4>
                  <p className="font-semibold text-slate-900 dark:text-white">Victor Aseko</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-50 dark:bg-slate-800 p-3 rounded-lg text-primary-600 dark:text-primary-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-500 dark:text-slate-400 font-medium">From</h4>
                  <p className="font-semibold text-slate-900 dark:text-white">Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-50 dark:bg-slate-800 p-3 rounded-lg text-primary-600 dark:text-primary-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-500 dark:text-slate-400 font-medium">Email</h4>
                  <p className="font-semibold text-slate-900 dark:text-white">victoraseko2004@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-50 dark:bg-slate-800 p-3 rounded-lg text-primary-600 dark:text-primary-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-500 dark:text-slate-400 font-medium">Phone</h4>
                  <p className="font-semibold text-slate-900 dark:text-white">+254 759 107 631</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="bg-primary-700 hover:bg-primary-600 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-lg shadow-primary-700/20 text-center w-full sm:w-auto"
              >
                Get in Touch
              </Link>
              <a
                href="/Assets/myCv.pdf"
                download="Victor_Aseko_CV.pdf"
                className="border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 px-8 py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
