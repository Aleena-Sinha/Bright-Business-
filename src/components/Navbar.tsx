import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Search, Phone, Mail } from 'lucide-react';

const navItems = [
  { 
    name: 'ABOUT', 
    href: '#about',
    subItems: [
      { name: 'Our Story', href: '#story' },
      { name: 'Founder Profile', href: '#founder' },
      { name: 'Our Philosophy', href: '#philosophy' }
    ]
  },
  { 
    name: 'SERVICES', 
    href: '#services',
    subItems: [
      { name: 'Leadership Development', href: '#leadership' },
      { name: 'Experiential Workshops', href: '#workshops' },
      { name: 'OD & Culture Transformation', href: '#od' },
      { name: 'SME / Entrepreneur Programs', href: '#sme' }
    ]
  },
  { 
    name: 'PROGRAMS', 
    href: '#programs',
    subItems: [
      { name: 'BrightLeadershipLab (Flagship)', href: '#lab' },
      { name: 'I-Preneur Workshop', href: '#ipreneur' },
      { name: 'Custom Programs', href: '#custom' }
    ]
  },
  { 
    name: 'INSIGHTS', 
    href: '#insights',
    subItems: [
      { name: 'Articles / Blogs', href: '#articles' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Downloads', href: '#resources' }
    ]
  },
  { name: 'CONTACT', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-bright-black text-white py-2 px-4 sm:px-6 lg:px-8 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
          <div className="flex items-center space-x-4">
            <span>Bright Business Consulting</span>
            <span className="text-bright-yellow">•</span>
            <span>Learning & Organizational Development</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:+919925000497" className="flex items-center hover:text-bright-yellow transition-colors">
              <Phone size={12} className="mr-2" /> +91 99250 00497
            </a>
            <a href="mailto:Brightbizcon@gmail.com" className="flex items-center hover:text-bright-yellow transition-colors">
              <Mail size={12} className="mr-2" /> Brightbizcon@gmail.com
            </a>
          </div>
        </div>
      </div>

      <nav className={`transition-all duration-500 ${scrolled ? 'bg-white/95 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] py-0' : 'bg-white/80 backdrop-blur-xl py-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="https://picsum.photos/seed/bright-logo/400/150" 
                alt="Bright Business Consulting Logo" 
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a 
                    href={item.href}
                    className="flex items-center text-xs font-bold tracking-[0.2em] transition-all text-bright-black hover:text-bright-blue"
                  >
                    {item.name}
                    {item.subItems && <ChevronDown className="ml-1 w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform" />}
                  </a>
                  
                  {item.subItems && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          className="absolute top-full left-0 mt-4 w-72 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] rounded-[24px] overflow-hidden border border-gray-100 p-2"
                        >
                          {item.subItems.map((sub) => (
                            <a 
                              key={sub.name}
                              href={sub.href}
                              className="block px-5 py-4 text-sm font-bold text-bright-black hover:bg-bright-yellow hover:text-bright-black transition-all rounded-xl mb-1 last:mb-0"
                            >
                              {sub.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              <a href="#contact" className="bg-bright-black text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-bright-blue transition-all shadow-xl shadow-bright-black/10">
                BOOK NOW
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-bright-black hover:text-bright-blue p-2"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name} className="space-y-1">
                    <a
                      href={item.href}
                      onClick={() => !item.subItems && setIsOpen(false)}
                      className="block px-3 py-3 text-base font-bold text-bright-black hover:bg-bright-yellow rounded-md"
                    >
                      {item.name}
                    </a>
                    {item.subItems && (
                      <div className="pl-6 space-y-1">
                        {item.subItems.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-bright-blue"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <a href="#contact" className="block w-full text-center bg-bright-blue text-white px-5 py-3 rounded-md text-base font-bold">
                    BOOK A CONSULTATION
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

