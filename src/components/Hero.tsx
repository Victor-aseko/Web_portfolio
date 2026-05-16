"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const roles = ["Software Engineer", "Artificial Intelligence Expert", "Backend Developer", "Frontend Developer", "Freelance Consultant", "Full Stack Engineer"];

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const fullText = roles[roleIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      let typeSpeed = 150;

      if (isDeleting) {
        typeSpeed /= 2;
      }

      if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000; // Pause before deleting
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        typeSpeed = 500; // Pause before typing next word
      }

      timer = setTimeout(handleType, typeSpeed);
    };

    timer = setTimeout(handleType, 150);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Assets/backgImages.jpg"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Hi, I'm <span className="text-primary-400">Victor Aseko</span>
            </h1>
            <h3 className="text-2xl md:text-3xl text-slate-200 font-medium mb-6 h-10 flex items-center justify-center md:justify-start">
              <span>{currentText}</span>
              <span className="inline-block w-1 h-8 bg-primary-400 ml-1 cursor-blink"></span>
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto md:mx-0">
             I’m a Software Engineer with 2+ years of working experience creating scalable and user-centered digital products across core banking and e-commerce platforms. I enjoy building reliable systems and intuitive experiences that solve real-world problems.
              </p>
              <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto md:mx-0">
                I strive to design experiences that are not only functional, but also intuitive, engaging, and impactful. </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link
                href="#portfolio"
                className="bg-primary-700 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-primary-700/30 hover:-translate-y-1 w-full sm:w-auto"
              >
                Explore Projects
              </Link>
              <a
                href="/Assets/myCv.pdf"
                download="Victor_Aseko_CV.pdf"
                className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-black/5 hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-primary-500 rounded-full transform translate-x-4 translate-y-4 opacity-20"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
                <Image
                  src="/Assets/about_new.png"
                  alt="Victor Aseko Profile"
                  fill
                  sizes="(max-width: 768px) 288px, 384px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
