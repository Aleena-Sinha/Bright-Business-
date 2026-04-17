import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    category: 'Manufacturing',
    title: 'Leadership Development for Mid-Level Managers',
    description: 'Designed and delivered a leadership journey focused on accountability, ownership, and team performance improvement.',
    resultNum: '35%',
    resultLabel: 'Increase in team productivity'
  },
  {
    category: 'Banking',
    title: 'Sales Effectiveness Program',
    description: 'Enabled frontline sales teams with structured selling techniques and customer engagement frameworks.',
    resultNum: '28%',
    resultLabel: 'Increase in conversions'
  },
  {
    category: 'Healthcare',
    title: 'Team Building OBT Intervention',
    description: 'Conducted large-scale outbound training to improve collaboration, trust, and communication across departments.',
    resultNum: '90%',
    resultLabel: 'Improved team alignment'
  },
  {
    category: 'Pharma',
    title: 'Behavioral Skills Transformation',
    description: 'Delivered behavioral interventions focusing on communication, feedback, and emotional intelligence.',
    resultNum: '40%',
    resultLabel: 'Increase in engagement scores'
  },
  {
    category: 'Retail',
    title: 'Customer Experience Excellence',
    description: 'Designed experiential workshops to improve customer handling, service mindset, and brand representation.',
    resultNum: '25%',
    resultLabel: 'Increase in customer satisfaction'
  },
  {
    category: 'Telecom',
    title: 'Change Management Program',
    description: 'Helped teams navigate organizational change through structured communication and mindset shifts.',
    resultNum: '50%',
    resultLabel: 'Faster adoption of change'
  }
];

export default function CaseStudies() {
  return (
    <div id="case-studies" className="py-8 scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cases.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="group flex flex-col h-full bg-white rounded-2xl p-5 border border-gray-100 hover:border-bright-yellow transition-all duration-300 hover:shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-bright-yellow/5 rounded-bl-full -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            
            <div className="flex-grow relative z-10">
              <span className="inline-block px-2 py-0.5 bg-gray-50 text-bright-blue rounded-md text-[8px] font-bold tracking-widest uppercase mb-3">
                {item.category}
              </span>
              <h3 className="text-base font-bold text-bright-black mb-2 group-hover:text-bright-blue transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-[10px] text-gray-500 leading-relaxed mb-4 line-clamp-2">
                {item.description}
              </p>
            </div>
            
            <div className="pt-4 border-t border-gray-50 mt-auto flex items-end justify-between relative z-10">
              <div>
                <div className="text-2xl font-display font-bold text-bright-black">
                  {item.resultNum}
                </div>
                <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">
                  {item.resultLabel}
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-bright-yellow/10 flex items-center justify-center group-hover:bg-bright-yellow transition-colors">
                <ArrowRight className="w-4 h-4 text-bright-blue group-hover:text-bright-black transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
