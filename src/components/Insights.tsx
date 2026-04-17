import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calendar, User, Target, Award, Users, TrendingUp } from 'lucide-react';
import CaseStudies from './CaseStudies';

const blogs = [
  {
    title: 'Building a Culture of Accountability',
    excerpt: 'How to move from a blame culture to one where ownership and responsibility are celebrated.',
    date: 'Oct 12, 2023',
    author: 'Monika Modi',
    category: 'Culture'
  },
  {
    title: 'The Art of Fearless Feedback',
    excerpt: 'Science-backed strategies for having difficult conversations that drive growth.',
    date: 'Sep 28, 2023',
    author: 'Monika Modi',
    category: 'Leadership'
  },
  {
    title: 'Campus to Corporate Transition',
    excerpt: 'Preparing the next generation of leaders for the realities of the modern workplace.',
    date: 'Sep 15, 2023',
    author: 'Monika Modi',
    category: 'Development'
  }
];

export default function Insights() {
  return (
    <section id="insights" className="py-12 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.4em] text-bright-blue uppercase mb-1 block"
          >
            OUR INSIGHTS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-bright-black leading-tight"
          >
            Articles & <span className="text-bright-blue italic font-serif font-light">Blogs.</span>
          </motion.h2>
        </div>

        <div id="articles" className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-mt-32">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="h-48 bg-bright-blue overflow-hidden relative">
                <img 
                  src={`https://picsum.photos/seed/blog${idx}/600/400`} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-bright-yellow text-bright-black text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4 font-bold uppercase tracking-widest">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {blog.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {blog.author}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-bright-black mb-4 group-hover:text-bright-blue transition-colors">
                  {blog.title}
                </h4>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  {blog.excerpt}
                </p>
                <a href="#contact" className="text-bright-black font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                  ENQUIRE NOW <BookOpen className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies Section - Inserted here */}
        <div className="mt-8">
          <div className="text-center mb-4">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.4em] text-bright-blue uppercase mb-1 block"
            >
              REAL IMPACT
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold text-bright-black leading-tight"
            >
              Case <span className="text-bright-blue italic font-serif font-light">Studies.</span>
            </motion.h2>
          </div>
          <CaseStudies />
        </div>

        {/* Testimonials Section */}
        <div className="mt-8">
          <div className="bg-bright-blue p-6 rounded-3xl text-white text-center">
            <h4 className="text-2xl font-bold mb-6">What Our Clients Say</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { quote: "Bright Business Consulting helped us reimagine leadership. Their program isn't just a workshop — it's a transformation.", author: "Global MNC Partner" },
                { quote: "The learning path they designed brought measurable behaviour change. We saw improvements in collaboration that lasted.", author: "Operations Director" },
                { quote: "The workshop changed how our team communicates. Clarity and confidence have reached new heights.", author: "SME Founder" }
              ].map((testi, i) => (
                <div key={i} className="space-y-4">
                  <p className="text-lg italic font-serif">"{testi.quote}"</p>
                  <div className="text-bright-yellow font-bold text-sm uppercase tracking-widest">— {testi.author}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
