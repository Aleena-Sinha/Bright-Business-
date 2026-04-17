import React from 'react';
import { motion } from 'motion/react';

const clients = [
  { name: 'Adani', logo: 'https://logo.clearbit.com/adani.com' },
  { name: 'Zydus', logo: 'https://logo.clearbit.com/zyduslife.com' },
  { name: 'Sun Pharma', logo: 'https://logo.clearbit.com/sunpharma.com' },
  { name: 'Varroc', logo: 'https://logo.clearbit.com/varroc.com' },
  { name: 'Rockwool', logo: 'https://logo.clearbit.com/rockwool.com' },
  { name: 'MRF', logo: 'https://logo.clearbit.com/mrftyres.com' },
  { name: 'Yes Bank', logo: 'https://logo.clearbit.com/yesbank.in' },
  { name: 'Sabarmati Gas', logo: 'https://logo.clearbit.com/sabarmatigas.com' },
  { name: 'Vodafone', logo: 'https://logo.clearbit.com/vodafone.com' },
  { name: 'Suzuki', logo: 'https://logo.clearbit.com/suzuki.in' },
  { name: 'Idea', logo: 'https://logo.clearbit.com/vi.in' },
  { name: 'Fabindia', logo: 'https://logo.clearbit.com/fabindia.com' },
  { name: 'HDFC Bank', logo: 'https://logo.clearbit.com/hdfcbank.com' },
  { name: 'Larsen & Toubro', logo: 'https://logo.clearbit.com/larsentoubro.com' },
  { name: 'IIM Indore', logo: 'https://logo.clearbit.com/iimidr.ac.in' },
  { name: 'Sintex', logo: 'https://logo.clearbit.com/sintex-plastics.com' },
  { name: 'Westside', logo: 'https://logo.clearbit.com/westside.com' },
  { name: 'Reliance', logo: 'https://logo.clearbit.com/ril.com' },
];

export default function Clients() {
  return (
    <section className="pt-8 pb-4 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-[0.4em] text-bright-blue uppercase mb-1 block"
            >
              TRUSTED BY LEADERS
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-bright-black leading-tight"
            >
              Our Key <span className="text-bright-blue italic font-serif font-light">Clients.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-md text-lg font-medium"
          >
            We've partnered with some of the most respected names in the industry to drive human transformation and organizational excellence.
          </motion.p>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden bg-gray-50/50 py-12 border-y border-gray-100">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {clients.concat(clients).map((client, idx) => (
            <div key={idx} className="mx-12 flex flex-col items-center group">
              <div className="w-40 h-24 flex items-center justify-center bg-white rounded-2xl p-4 shadow-sm border border-gray-200 transition-all duration-500 transform group-hover:scale-110 group-hover:shadow-xl overflow-hidden">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=FACC15&color=000&bold=true`;
                  }}
                />
              </div>
              <span className="mt-4 text-[10px] font-bold tracking-[0.2em] text-bright-blue uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
