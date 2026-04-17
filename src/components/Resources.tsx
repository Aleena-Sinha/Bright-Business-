import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, FileCheck, FileCode } from 'lucide-react';

const resources = [
  {
    title: 'Company Profile 2024',
    type: 'PDF',
    size: '2.4 MB',
    icon: <FileText className="w-6 h-6" />,
    color: 'bg-bright-blue'
  },
  {
    title: 'Leadership Lab Brochure',
    type: 'PDF',
    size: '1.8 MB',
    icon: <FileCheck className="w-6 h-6" />,
    color: 'bg-bright-yellow'
  },
  {
    title: 'Culture Audit Whitepaper',
    type: 'PDF',
    size: '3.1 MB',
    icon: <FileCode className="w-6 h-6" />,
    color: 'bg-bright-black'
  }
];

export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="text-center md:text-left">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-[0.4em] text-bright-blue uppercase mb-1 block"
            >
              RESOURCE CENTER
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-bright-black leading-tight"
            >
              Knowledge for <span className="text-bright-blue italic font-serif font-light">Download.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-sm text-sm"
          >
            Access our latest research, program brochures, and company insights to help you build a brighter business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((res, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 bg-gray-50 rounded-[32px] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-bright-yellow/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform" />
              
              <div className={`w-14 h-14 ${res.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {res.icon}
              </div>

              <h4 className="text-xl font-bold text-bright-black mb-2 group-hover:text-bright-blue transition-colors">
                {res.title}
              </h4>
              
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2 py-1 bg-gray-100 rounded">
                  {res.type}
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {res.size}
                </span>
              </div>

              <button className="flex items-center text-xs font-bold text-bright-black hover:text-bright-blue transition-colors">
                <Download className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
                DOWNLOAD NOW
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
