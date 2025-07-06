"use client";
import { socialLinks } from '@/config/config';
import { Link } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

export const HeroSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  // Smooth scroll function
interface ScrollToSectionFn {
    (sectionId: string): void;
}

const scrollToSection: ScrollToSectionFn = (sectionId) => {
    const element: HTMLElement | null = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};

  useEffect(() => {
    // Simple typing effect implementation (replaces typed.js dependency)
    const strings = [
      'Kashish Seth.',
      'A Architecture Student.',
      'A Designer.',
      'An Artist.', 
      'A Student Leader.',
    ];
    
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';
    
    const typeSpeed = 50;
    const backSpeed = 30;
    const backDelay = 1500;
    const startDelay = 500;
    
    const type = () => {
      const currentString = strings[stringIndex];
      
      if (isDeleting) {
        currentText = currentString.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = currentString.substring(0, charIndex + 1);
        charIndex++;
      }
      
      if (typedRef.current) {
        typedRef.current.textContent = currentText;
      }
      
      let nextDelay = isDeleting ? backSpeed : typeSpeed;
      
      if (!isDeleting && charIndex === currentString.length) {
        nextDelay = backDelay;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        stringIndex = (stringIndex + 1) % strings.length;
      }
      
      setTimeout(type, nextDelay);
    };
    
    const timeout = setTimeout(type, startDelay);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
 
      <section id="hero" className="min-h-screen relative flex items-center justify-center bg-cover bg-center bg-no-repeat" 
           style={{
             backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
           }}>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h4 className="text-xl md:text-2xl font-light mb-4 opacity-90">Hello & Welcome</h4>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
            I Am <span className="font-bold" ref={typedRef}></span>
            <span className="animate-pulse">|</span>
          </h1>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
        
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
    
          
          {/* Download CV Button */}
          <div className="mb-8">
            <a href="https://www.diyakamboj.com/cv.pdf" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 tracking-wide">
              Download CV
            </a>
          </div>
        </div>
        
        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce" style={{
            animationDuration: '2s',
            animationIterationCount: 'infinite'
          }}>
            <button 
              onClick={() => scrollToSection('featured')}
              className="text-white opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:opacity-100"
            >
              <div className="w-10 h-16 border-2 border-white rounded-full flex items-end justify-center pb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m0 0l-6-6m6 6l6-6" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>
      
   
  );
};

