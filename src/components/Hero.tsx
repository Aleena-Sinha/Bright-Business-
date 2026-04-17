import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Lightbulb, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-bright-black">
      {/* Full Page Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/bright-consulting-hero/1920/1080" 
          alt="Bright Business Consulting" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bright-black/80 via-bright-black/40 to-bright-black/80" />
      </div>
      
      {/* Main Content Container */}
      <div className="flex-grow flex items-center justify-center relative z-10 pt-32 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white leading-[0.85] mb-4 tracking-tighter">
              BRIGHT <span className="text-bright-yellow">PEOPLE</span> <br />
              <span className="italic font-serif font-light text-bright-blue">Build</span> <br />
              BRIGHT <span className="text-bright-yellow">BUSINESS</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 mb-6 max-w-xl mx-auto leading-relaxed font-medium opacity-80">
              We partner with organizations to unlock human potential, build capable leaders, and create cultures that thrive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
              <a href="#services" className="bg-bright-yellow text-bright-black px-6 py-3 rounded-full font-bold flex items-center justify-center hover:bg-white transition-all group shadow-2xl shadow-bright-yellow/20 text-sm min-w-[180px]">
                EXPLORE SERVICES
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="#contact" className="bg-transparent text-white border-2 border-white/30 backdrop-blur-sm px-6 py-3 rounded-full font-bold flex items-center justify-center hover:bg-white hover:text-bright-black transition-all text-sm min-w-[180px]">
                GET IN TOUCH
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Stats Overlay - Positioned at bottom of flex flow */}
      <div className="relative z-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-0 bg-white/5 backdrop-blur-xl p-6 rounded-[40px] border border-white/10">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl font-bold text-bright-yellow">50+</span>
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Global Clients</span>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10" />
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl font-bold text-bright-yellow">10+</span>
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Years Experience</span>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10" />
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl font-bold text-bright-yellow">1000+</span>
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Trained Professionals</span>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10" />
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl font-bold text-bright-yellow">12</span>
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Industry Awards</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden lg:block"
      >
        <div className="w-1 h-6 bg-gradient-to-b from-bright-yellow to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}
