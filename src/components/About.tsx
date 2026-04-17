import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Heart, Award, Users, Settings, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative bg-white overflow-hidden scroll-mt-32 pt-12 lg:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {/* Section Header */}
        <div className="mb-4">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.4em] text-bright-blue uppercase mb-1 block"
          >
            WHO WE ARE
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold text-bright-black leading-tight"
          >
            The Engine of <span className="text-bright-blue italic font-serif font-light">Growth.</span>
          </motion.h2>
        </div>

        {/* Story & Pillars Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-8">
          {/* Our Story Text */}
          <motion.div 
            id="story"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 scroll-mt-40"
          >
            <h3 className="text-2xl font-bold text-bright-black mb-6">Our Story</h3>
            <p className="text-lg text-bright-black leading-relaxed mb-6 font-medium">
              Every successful business runs on a high-performance engine. But that engine is fuelled by people. Bright Business Consulting exists to ensure your human capital and your business processes are in perfect sync.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              Bright Business Consulting is an Ahmedabad-based people and culture consulting firm with 10+ years of experience in human transformation. We partner with MNCs, large enterprises, and progressive fast-growing companies to build teams that thrive and cultures that inspire.
            </p>
          </motion.div>

          {/* Philosophy Section */}
          <div className="lg:col-span-5 scroll-mt-40 pl-0 ml-0 mr-0 -mt-[27px]">
            <h3 className="text-xl font-bold text-bright-black mb-6">Our Philosophy</h3>
            <div id="philosophy" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { 
                  title: 'Business-Aligned Learning', 
                  desc: 'Ensure every learning initiative directly supports business goals, performance outcomes, and organizational growth.', 
                  icon: <Target className="w-4 h-4" /> 
                },
                { 
                  title: 'Capability Transformation', 
                  desc: 'Focus on building future-ready skills and competencies that drive leadership, agility, and innovation.', 
                  icon: <TrendingUp className="w-4 h-4" /> 
                },
                { 
                  title: 'Experiential & Applied Learning', 
                  desc: 'Design immersive, real-world learning experiences that go beyond theory and create lasting behavioral change.', 
                  icon: <Users className="w-4 h-4" /> 
                },
                { 
                  title: 'Impact Measurement & Growth', 
                  desc: 'Track, measure, and continuously optimize learning effectiveness to deliver tangible business impact.', 
                  icon: <Award className="w-4 h-4" /> 
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-bright-yellow transition-colors group"
                >
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm group-hover:bg-bright-yellow transition-colors">
                    <div className="text-bright-blue group-hover:text-bright-black transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-bright-black mb-1">{item.title}</h4>
                  <p className="text-[10px] text-gray-500 leading-tight">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Bold Promise Section - Integrated into the same page flow */}
        <div className="pt-[10px] border-t border-gray-100">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-4 gap-6">
            <div>
              <span className="text-[10px] font-bold tracking-[0.4em] text-bright-blue uppercase mb-3 block">COMMITMENT</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-bright-black">Our Bold Promise</h3>
            </div>
            <p className="text-gray-500 max-w-sm text-sm">We don't just consult; we partner for measurable transformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Build for Business', 
                desc: 'We believe that a business should be an asset, not a heavy burden for the founder.',
                icon: <Target className="w-6 h-6" />
              },
              { 
                title: 'Performance Guarantee', 
                desc: 'We identify the bottlenecks in your "people-chain" and turn them into your competitive advantage.',
                icon: <Award className="w-6 h-6" />
              },
              { 
                title: 'Anchored in Empathy', 
                desc: 'Ensuring people feel valued, leaders feel empowered, and organizations feel future-ready.',
                icon: <Heart className="w-6 h-6" />
              }
            ].map((promise, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-bright-black rounded-[32px] border border-white/5 hover:bg-bright-blue transition-all group"
              >
                <div className="text-bright-yellow mb-6 group-hover:text-white transition-colors">
                  {promise.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{promise.title}</h4>
                <p className="text-gray-400 group-hover:text-white/80 transition-colors text-sm leading-relaxed">{promise.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder Section - Integrated */}
      <div id="founder" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 scroll-mt-40">
        <div className="bg-bright-yellow rounded-[60px] p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          
          <div className="lg:w-1/4 relative">
            <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://picsum.photos/seed/monika-modi/800/1000" 
                alt="Monika Modi" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:w-3/4">
            <span className="text-[10px] font-bold tracking-[0.3em] text-bright-black/60 uppercase mb-4 block">FOUNDER'S MESSAGE</span>
            <blockquote className="text-2xl md:text-3xl font-serif italic text-bright-black mb-8 leading-tight">
              "People do better when they feel seen, supported, and inspired. At Bright, we don’t just deliver sessions — we create experiences that shift mindsets."
            </blockquote>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Experiential Learning Expert', 'Behavioural Trainer', 'OD Consultant', 'NLP & EI Practitioner'].map((tag, i) => (
                <span key={i} className="px-4 py-1.5 bg-bright-black text-white rounded-full text-[10px] font-bold tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-px w-12 bg-bright-black/20" />
              <div className="text-lg font-bold text-bright-black">Monika Modi</div>
              <div className="text-bright-black/50 text-[10px] font-bold uppercase tracking-widest">Founder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
