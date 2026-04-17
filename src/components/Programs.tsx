import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Rocket, Zap, ArrowRight, X, CheckCircle2, Target, Gamepad2, Video, Users, BookOpen, ClipboardCheck, MessageSquare, Mountain, Presentation } from 'lucide-react';

const programs = [
  {
    id: 'lab',
    title: 'BrightLeadershipLab',
    tag: 'Flagship',
    desc: 'An intensive leadership journey for high-potential talent and senior management.',
    icon: <Star className="w-6 h-6" />,
    color: 'bg-bright-yellow',
    details: {
      overview: 'Our flagship leadership lab is designed to bring out the brightest potential in people through experiential journeys.',
      offerings: [
        'Leadership Development Pathways',
        'Managerial Effectiveness',
        'Emotional Intelligence for Leaders',
        'Communication, Confidence & Executive Presence',
        'Mindset, Behaviour & Culture Workshops'
      ],
      benefits: 'Programs boost retention, productivity, and adaptability, with ROI through metrics like promotion readiness and reduced turnover.'
    }
  },
  {
    id: 'ipreneur',
    title: 'I-Preneur Workshop',
    tag: 'Entrepreneurship',
    desc: 'Building an entrepreneurial mindset within the organization to drive innovation.',
    icon: <Rocket className="w-6 h-6" />,
    color: 'bg-bright-blue',
    details: {
      overview: 'Designed for SMEs and entrepreneurs to scale through structured workflows and performance management.',
      offerings: [
        'Performance Management: Setting KPIs that drive growth',
        'People Strategy: Talent optimization for SMEs',
        'Business Transformation: Structured workflows',
        'Organizational Excellence: Culture of accountability'
      ],
      benefits: 'We help you Build for Business so it becomes an asset, not a heavy burden for the founder.'
    }
  },
  {
    id: 'custom',
    title: 'Custom Programs',
    tag: 'Bespoke',
    desc: 'Tailored solutions designed specifically for your unique organizational challenges.',
    icon: <Zap className="w-6 h-6" />,
    color: 'bg-bright-black',
    details: {
      overview: 'We craft tailored programs emphasizing behavioural and interpersonal development through interactive workshops.',
      offerings: [
        'Communication Excellence',
        'Leadership & Influence',
        'Team Dynamics & Conflict Resolution',
        'Emotional Intelligence & Adaptability'
      ],
      benefits: 'Participants achieve 25-40% gains in key soft skills, driving higher engagement and productivity.'
    }
  }
];

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null);

  return (
    <section id="programs" className="py-4 bg-white overflow-hidden scroll-mt-32">
      <div id="sme" className="absolute top-0 left-0 w-0 h-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.4em] text-bright-blue uppercase mb-1 block"
          >
            FEATURED PROGRAMS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-bright-black leading-tight"
          >
            Learning That <br />
            <span className="text-bright-blue italic font-serif font-light">Lights a Lifetime.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              id={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group cursor-pointer scroll-mt-32"
              onClick={() => setSelectedProgram(program)}
            >
              <div className="absolute inset-0 bg-bright-black rounded-[40px] transform group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500" />
              <div className="relative bg-white border-2 border-bright-black p-12 rounded-[40px] z-10 h-full flex flex-col hover:bg-gray-50 transition-colors duration-500">
                <div className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center mb-10 text-white shadow-lg`}>
                  {program.icon}
                </div>
                <div className="text-xs font-bold text-bright-blue uppercase tracking-[0.2em] mb-4">{program.tag}</div>
                <h4 className="text-3xl font-bold text-bright-black mb-6 leading-tight">{program.title}</h4>
                <p className="text-gray-500 mb-10 flex-grow text-lg leading-relaxed font-medium">
                  {program.desc}
                </p>
                <div className="flex items-center text-xs font-bold tracking-widest text-bright-black group-hover:text-bright-blue transition-colors uppercase">
                  LEARN MORE <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Program Detail Modal */}
        <AnimatePresence>
          {selectedProgram && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProgram(null)}
                className="absolute inset-0 bg-bright-black/90 backdrop-blur-md"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                className="relative bg-white w-full max-w-5xl rounded-[48px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
              >
                <button 
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-8 right-8 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:text-bright-black hover:bg-bright-yellow transition-all z-10"
                >
                  <X size={24} />
                </button>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
                  <div className={`lg:col-span-5 ${selectedProgram.color} p-16 text-white flex flex-col justify-center items-start relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="w-24 h-24 bg-white/20 rounded-[32px] flex items-center justify-center mb-10 backdrop-blur-md">
                      {React.cloneElement(selectedProgram.icon as React.ReactElement, { size: 48 })}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-60 mb-4">{selectedProgram.tag}</span>
                    <h4 className="text-5xl font-display font-bold mb-8 leading-tight">{selectedProgram.title}</h4>
                    <div className="w-16 h-1.5 bg-white rounded-full" />
                  </div>
                  
                  <div className="lg:col-span-7 p-16 overflow-y-auto max-h-[80vh] lg:max-h-none">
                    <div className="mb-12">
                      <h5 className="text-xs font-bold text-bright-blue uppercase tracking-[0.3em] mb-6">PROGRAM OVERVIEW</h5>
                      <p className="text-2xl text-bright-black font-display font-medium leading-relaxed">
                        {selectedProgram.details.overview}
                      </p>
                    </div>
                    
                    <div className="mb-12">
                      <h5 className="text-xs font-bold text-bright-blue uppercase tracking-[0.3em] mb-6">CORE OFFERINGS</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedProgram.details.offerings.map((item, i) => (
                          <div key={i} className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <CheckCircle2 className="w-5 h-5 text-bright-yellow mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-bright-black font-bold">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-bright-black p-10 rounded-[32px] text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
                      <h5 className="text-xs font-bold text-bright-yellow uppercase tracking-[0.3em] mb-4">KEY BENEFITS</h5>
                      <p className="text-xl font-serif italic leading-relaxed text-gray-300">
                        "{selectedProgram.details.benefits}"
                      </p>
                    </div>
                    
                    <div className="mt-12">
                      <a 
                        href="#contact" 
                        onClick={() => setSelectedProgram(null)}
                        className="inline-flex items-center bg-bright-blue text-white px-12 py-5 rounded-full font-bold hover:bg-bright-black transition-all shadow-xl shadow-bright-blue/20 text-lg"
                      >
                        ENQUIRE NOW <ArrowRight className="ml-3 w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Training Methodology Section */}
        <div className="mt-16 mb-20">
          <div className="text-center mb-8">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-[0.4em] text-bright-blue uppercase mb-1 block"
            >
              OUR APPROACH
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-bright-black"
            >
              Training <span className="text-bright-blue italic font-serif font-light">Methodology</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Why-to-What Model Highlight (Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 bg-bright-black text-white p-10 rounded-[48px] relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-bright-yellow/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
              <div className="relative z-10">
                <div className="text-bright-yellow font-bold text-sm tracking-[0.3em] uppercase mb-6">CORE PHILOSOPHY</div>
                <h3 className="text-4xl font-display font-bold mb-6 leading-tight">
                  Designed on the <br />
                  <span className="text-bright-yellow">Why-to-What</span> Model.
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed font-medium mb-8">
                  Adults learn better when they experience. Every BBC workshop is built on Sinek's Golden Circle — starting with WHY before moving to HOW and WHAT.
                </p>
              </div>
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-bright-yellow flex items-center justify-center text-bright-yellow font-bold text-sm mb-1">WHY</div>
                    <span className="text-[8px] font-bold tracking-widest text-bright-yellow uppercase">Purpose</span>
                  </div>
                  <ArrowRight className="text-gray-600 w-4 h-4" />
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-400 font-bold text-sm mb-1">HOW</div>
                    <span className="text-[8px] font-bold tracking-widest text-gray-400 uppercase">Process</span>
                  </div>
                  <ArrowRight className="text-gray-600 w-4 h-4" />
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-400 font-bold text-sm mb-1">WHAT</div>
                    <span className="text-[8px] font-bold tracking-widest text-gray-400 uppercase">Result</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Methodology Grid (Right) - 4x2 Layout */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Games & Activities', desc: 'Structured games with clear learning objectives and powerful debriefs that create lasting behavioral insights.', icon: <Gamepad2 className="w-5 h-5" />, color: 'bg-bright-blue' },
                { title: 'Videos & Case Studies', desc: 'Curated video content and real-world case studies that ground abstract concepts in business reality.', icon: <Video className="w-5 h-5" />, color: 'bg-bright-black' },
                { title: 'Role Plays & Simulations', desc: 'Practice-based learning through structured role plays that build muscle memory for real workplace situations.', icon: <Users className="w-5 h-5" />, color: 'bg-bright-blue' },
                { title: 'Story Telling', desc: "Monika's certified storytelling approach creates emotional connection and 22x higher retention than data alone.", icon: <BookOpen className="w-5 h-5" />, color: 'bg-bright-yellow' },
                { title: 'Assessment Tools', desc: 'Pre and post-training assessments using validated psychometric and behavioral tools to measure growth.', icon: <ClipboardCheck className="w-5 h-5" />, color: 'bg-bright-black' },
                { title: 'Interactive Facilitation', desc: 'Discussion, paired activities, individual reflection — Transactional Analysis and NLP-informed facilitation style.', icon: <MessageSquare className="w-5 h-5" />, color: 'bg-bright-yellow' },
                { title: 'Experiential / Outbound', desc: 'Outdoor activities with powerful indoor debriefs — the most impactful way adults develop character and capability.', icon: <Mountain className="w-5 h-5" />, color: 'bg-bright-blue' },
                { title: 'Presentations & PPT', desc: 'Visually rich, content-dense presentations that inform and inspire — never death by PowerPoint.', icon: <Presentation className="w-5 h-5" />, color: 'bg-bright-black' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 bg-gray-50 rounded-[24px] border border-gray-100 hover:bg-white hover:shadow-lg transition-all group flex flex-col h-full"
                >
                  <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h4 className="text-base font-bold text-bright-black mb-2 group-hover:text-bright-blue transition-colors leading-tight">{item.title}</h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed font-medium flex-grow">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Experiential Workshops Highlight */}
        <div id="workshops" className="mt-4 relative">
          <div className="bg-bright-yellow p-8 md:p-12 rounded-[80px] flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3" />
            
            <div className="lg:w-1/2 relative z-10">
              <span className="text-sm font-bold tracking-[0.4em] text-bright-black/60 uppercase mb-1 block">EXPERIENTIAL LEARNING</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-bright-black mb-4 leading-[0.9]">
                Outbound <br />
                <span className="text-bright-blue italic font-serif font-light">Training.</span>
              </h2>
              <p className="text-bright-black/70 text-xl mb-8 leading-relaxed font-medium">
                We craft tailored programs emphasizing behavioural and interpersonal development through interactive workshops, role-plays, and real-world simulations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {['Communication Excellence', 'Leadership & Influence', 'Team Dynamics', 'Emotional Intelligence'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-bright-blue rounded-full" />
                    <span className="text-lg font-bold text-bright-black">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="inline-flex items-center bg-bright-black text-white px-10 py-5 rounded-full font-bold hover:bg-bright-blue transition-all shadow-2xl shadow-bright-black/20 text-lg">
                VIEW MODULES <ArrowRight className="ml-3 w-6 h-6" />
              </a>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative z-10">
              <div className="space-y-6">
                <img src="https://picsum.photos/seed/workshop1/600/600" alt="Workshop" className="rounded-[40px] shadow-2xl aspect-square object-cover" referrerPolicy="no-referrer" />
                <div className="bg-bright-blue p-8 rounded-[40px] text-white">
                  <div className="text-4xl font-bold mb-2">25-40%</div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-60">Gain in Soft Skills</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white p-8 rounded-[40px] shadow-xl">
                  <div className="text-bright-blue font-bold text-lg leading-tight">Interactive Simulations</div>
                </div>
                <img src="https://picsum.photos/seed/workshop2/600/800" alt="Workshop" className="rounded-[40px] shadow-2xl aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

