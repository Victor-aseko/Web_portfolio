"use client";

import { Triangle, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      {/* Logo Bar with weird badges from original */}
      <div className="bg-primary-700 py-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex justify-center items-center">
              <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center text-white text-center p-2 bg-primary-700">
                <div>
                  <div className="font-bold text-lg leading-tight">100%</div>
                  <div className="text-[10px] leading-tight">CLEAN CODE</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center text-white text-center flex-col gap-2">
              <div className="bg-primary-700 p-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="white" strokeWidth="1.5" />
                  <path d="M13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7Z" fill="white" />
                  <path d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z" fill="white" />
                  <path d="M7 13C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13Z" fill="white" />
                  <path d="M17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13Z" fill="white" />
                  <path d="M9.17157 14.8284C9.56209 15.219 9.56209 15.8521 9.17157 16.2426C8.78105 16.6332 8.14788 16.6332 7.75736 16.2426C7.36683 15.8521 7.36683 15.219 7.75736 14.8284C8.14788 14.4379 8.78105 14.4379 9.17157 14.8284Z" fill="white" />
                  <path d="M16.2426 14.8284C16.6332 14.4379 16.6332 13.8047 16.2426 13.4142C15.8521 13.0237 15.219 13.0237 14.8284 13.4142C14.4379 13.8047 14.4379 14.4379 14.8284 14.8284C15.219 15.219 15.8521 15.219 16.2426 14.8284Z" fill="white" />
                  <path d="M9.17157 9.17157C9.56209 8.78105 9.56209 8.14788 9.17157 7.75736C8.78105 7.36683 8.14788 7.36683 7.75736 7.75736C7.36683 8.14788 7.36683 8.78105 7.75736 9.17157C8.14788 9.56209 8.78105 9.56209 9.17157 9.17157Z" fill="white" />
                  <path d="M16.2426 9.17157C16.6332 9.56209 16.6332 10.1953 16.2426 10.5858C15.8521 10.9763 15.219 10.9763 14.8284 10.5858C14.4379 10.1953 14.4379 9.56209 14.8284 9.17157C15.219 8.78105 15.8521 8.78105 16.2426 9.17157Z" fill="white" />
                </svg>
              </div>
              <div className="font-semibold tracking-wider text-sm">FAST & SECURE</div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center text-white text-center p-2 bg-primary-700">
                <div className="font-medium text-xs tracking-widest">RESPONSIVE</div>
              </div>
            </div>
            <div className="flex justify-center items-center text-white text-center flex-col gap-2">
              <div className="bg-primary-700 p-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="1.5" />
                  <path d="M12 4V2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M12 22V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M4 12H2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M22 12H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M19.7778 4.22266L17.5558 6.44466" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6.44446 17.5554L4.22247 19.7774" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M19.7778 19.7774L17.5558 17.5554" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6.44446 6.44466L4.22247 4.22266" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="font-semibold tracking-wider text-sm">SCALABLE</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center">
          
          <Link href="#home" className="flex items-center group mb-8">
            <div className="relative w-48 h-12 md:w-56 md:h-16">
              <Image 
                src="/Assets/logo.jpg" 
                alt="Soft Serve Solutions Logo" 
                fill 
                sizes="(max-width: 768px) 192px, 224px"
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-10 text-slate-400">
            <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <Phone className="w-5 h-5 text-primary-500" />
              <span>+254 759 107 631</span>
            </div>
            <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <Mail className="w-5 h-5 text-primary-500" />
              <span>victoraseko2004@gmail.com</span>
            </div>
            <a 
              href="https://wa.me/254759108018" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <svg width="20" height="20" fill="currentColor" className="text-primary-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
            <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <MapPin className="w-5 h-5 text-primary-500" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          <div className="flex gap-6 mb-12">
            <a href="https://www.linkedin.com/in/victor-aseko-04b078375" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all" aria-label="LinkedIn">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/Victor-aseko" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all" aria-label="GitHub">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>

          <div className="text-slate-500 text-sm text-center border-t border-slate-800 pt-8 w-full">
            © 2026 Victor Aseko. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
