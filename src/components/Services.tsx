import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Zap, 
  Settings, 
  Briefcase, 
  Compass, 
  MessageSquare, 
  ShieldCheck, 
  BarChart3,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 'leadership',
    icon: <Users className="w-8 h-8" />,
    title: 'Leadership Development',
    desc: 'Experiential leadership journeys and pathways designed to bring out the brightest potential in people.',
    features: ['Leadership Development Pathways', 'Managerial Effectiveness', 'Emotional Intelligence for Leaders', 'Communication & Confidence'],
    color: 'bg-blue-50'
  },
  {
    id: 'workshops',
    icon: <Zap className="w-8 h-8" />,
    title: 'Training & Capability Building',
    desc: 'Experiential, engaging and transformation-oriented sessions that shift perspectives and habits.',
    features: ['Behavioural Training', 'Soft Skills', 'Team Building & Outdoor Workshops', 'Customer Experience'],
    color: 'bg-yellow-50'
  },
  {
    id: 'od',
    icon: <Settings className="w-8 h-8" />,
    title: 'Organizational Development',
    desc: 'Building systems that enable long-term success and sustainable organizational brilliance.',
    features: ['Competency Mapping', 'Role Clarity Frameworks', 'Performance Management Systems', 'Culture & Change Management'],
    color: 'bg-gray-50'
  },
  {
    id: 'hr',
    icon: <Briefcase className="w-8 h-8" />,
    title: 'HR Consulting',
    desc: 'Strategic and operational clarity for HR teams to become structured and future-ready.',
    features: ['HR Audits', 'HR Policy Design', 'HR Processes & SOP Creation', 'Talent Development Programs'],
    color: 'bg-blue-50'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-8 bg-gray-50/50 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-8 gap-12">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-[0.4em] text-bright-blue uppercase mb-1 block"
            >
              OUR SOLUTIONS
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-bright-black leading-tight"
            >
              What We Do to <br />
              <span className="text-bright-blue italic font-serif font-light">Brighten Your Business.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-sm leading-relaxed"
          >
            Strong processes + strong people = sustainable organizational brilliance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-12 rounded-[40px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group border border-transparent hover:border-bright-yellow"
            >
              <div className={`w-20 h-20 ${service.color} rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                <div className="text-bright-blue scale-125">{service.icon}</div>
              </div>
              <h4 className="text-2xl font-bold text-bright-black mb-6">{service.title}</h4>
              <p className="text-gray-500 text-sm mb-10 leading-relaxed font-medium">
                {service.desc}
              </p>
              <ul className="space-y-4 mb-10">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-xs font-bold text-bright-black/60">
                    <div className="w-2 h-2 bg-bright-yellow rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center text-xs font-bold tracking-widest text-bright-blue hover:text-bright-black transition-colors group/link uppercase">
                LEARN MORE <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Detailed Service Areas */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div id="od" className="bg-bright-black text-white p-12 rounded-3xl relative overflow-hidden scroll-mt-32">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Settings size={120} />
            </div>
            <h4 className="text-2xl font-bold mb-6 text-bright-yellow">Organizational Development</h4>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We partner with leaders to diagnose organizational challenges, design practical solutions, and implement structured development initiatives that enhance performance, collaboration, and long-term success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Compass className="text-bright-yellow w-5 h-5" />
                  <span className="text-sm font-bold">Change Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="text-bright-yellow w-5 h-5" />
                  <span className="text-sm font-bold">Performance Systems</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="text-bright-yellow w-5 h-5" />
                  <span className="text-sm font-bold">Culture Building</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="text-bright-yellow w-5 h-5" />
                  <span className="text-sm font-bold">Role Clarity</span>
                </div>
              </div>
            </div>
          </div>

          <div id="leadership" className="bg-white border border-gray-100 p-12 rounded-3xl relative overflow-hidden shadow-sm scroll-mt-32">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-bright-blue">
              <Lightbulb size={120} />
            </div>
            <h4 className="text-2xl font-bold mb-6 text-bright-blue">Employee Development</h4>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our programs identify skill gaps, deliver targeted training, and foster continuous growth through customized strategies like workshops, coaching, and e-learning.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Onboarding', 'Leadership Tracks', 'Cross-Functional', 'Technical Upskilling', 'Emotional Intelligence', 'Communication Excellence'].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
            <a href="#contact" className="inline-block bg-bright-blue text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-bright-black transition-colors">
              GET STARTED
            </a>
          </div>
        </div>

        {/* HR Consulting Section */}
        <div id="hr" className="mt-8 bg-gray-100 p-12 rounded-3xl border border-gray-200 scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h4 className="text-2xl font-bold mb-6 text-bright-black">HR Consulting</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                We deliver targeted HR solutions—from audits and policy design to processes, talent development, and capability building.
              </p>
              <div className="bg-bright-yellow/20 p-4 rounded-lg border border-bright-yellow/30">
                <p className="text-xs font-bold text-bright-black">"Key benefits include 25-40% gains in HR efficiency, compliance, and employee engagement."</p>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'HR Audits', desc: 'Comprehensive reviews of compliance and effectiveness.' },
                { title: 'Policy Design', desc: 'Tailored policies compliant with Indian laws.' },
                { title: 'Process & SOP', desc: 'Streamlined SOPs for onboarding and payroll.' },
                { title: 'Capability Building', desc: 'Training for HR teams in analytics and relations.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                  <h5 className="font-bold text-bright-blue mb-2">{item.title}</h5>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
