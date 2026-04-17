import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-[0.4em] text-bright-blue uppercase mb-1 block"
            >
              CONTACT US
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-bright-black leading-tight mb-4"
            >
              Let's Bring Brightness to Your <br />
              <span className="text-bright-blue italic font-serif font-light">People & Business.</span>
            </motion.h2>
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
              Whether you want leadership workshops, culture transformation, or a full learning strategy — we're here to co-create.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-bright-yellow flex items-center justify-center rounded-xl shadow-lg shadow-bright-yellow/20">
                  <Mail className="text-bright-black w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</div>
                  <div className="text-lg font-bold text-bright-black">info@brightconsultancy.in</div>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-bright-blue flex items-center justify-center rounded-xl shadow-lg shadow-bright-blue/20">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</div>
                  <div className="text-lg font-bold text-bright-black">+91 9925000497</div>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-bright-black flex items-center justify-center rounded-xl shadow-lg shadow-bright-black/20">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Location</div>
                  <div className="text-lg font-bold text-bright-black">Ahmedabad, India</div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              <a href="#" className="w-10 h-10 border-2 border-gray-100 flex items-center justify-center rounded-full hover:bg-bright-blue hover:border-bright-blue hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-10 rounded-3xl border border-gray-100"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h4 className="text-2xl font-bold text-bright-black mb-4">Message Sent!</h4>
                <p className="text-gray-500 max-w-xs">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-bright-blue font-bold text-sm hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <h4 className="text-2xl font-bold text-bright-black mb-8">Request a Consultation</h4>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-bright-blue transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Company</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-bright-blue transition-colors"
                        placeholder="Acme Inc."
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-bright-blue transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Contact Number</label>
                      <input 
                        required
                        type="tel" 
                        className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-bright-blue transition-colors"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Location Details</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-bright-blue transition-colors"
                        placeholder="City, Country"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Service Interested In</label>
                      <select className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-bright-blue transition-colors appearance-none">
                        <option>Leadership Development</option>
                        <option>Experiential Workshops</option>
                        <option>OD & Culture Transformation</option>
                        <option>HR Consulting</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-bright-blue transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button type="submit" className="w-full bg-bright-blue text-white py-4 rounded-lg font-bold flex items-center justify-center hover:bg-bright-black transition-colors shadow-lg shadow-bright-blue/20">
                    SEND MESSAGE <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
