import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-bright-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-bright-yellow flex items-center justify-center rounded-sm mr-2">
                <span className="text-bright-black font-bold text-lg">B</span>
              </div>
              <span className="font-display font-bold text-lg tracking-tighter">
                BRIGHT BUSINESS <span className="text-bright-blue">CONSULTING</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ahmedabad-based people and culture consulting firm with 10+ years of experience in human transformation.
            </p>
          </div>
          
          <div>
            <h5 className="text-bright-yellow font-bold text-xs uppercase tracking-[0.2em] mb-6">SERVICES</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#leadership" className="hover:text-white transition-colors">Leadership Development</a></li>
              <li><a href="#workshops" className="hover:text-white transition-colors">Experiential Workshops</a></li>
              <li><a href="#od" className="hover:text-white transition-colors">OD & Culture</a></li>
              <li><a href="#sme" className="hover:text-white transition-colors">SME Programs</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-bright-yellow font-bold text-xs uppercase tracking-[0.2em] mb-6">QUICK LINKS</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">Insights</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">Resources</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-bright-yellow font-bold text-xs uppercase tracking-[0.2em] mb-6">NEWSLETTER</h5>
            <p className="text-gray-400 text-xs mb-4">Subscribe to get the latest insights on leadership and culture.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 border border-white/10 px-4 py-2 text-sm rounded-l-md focus:outline-none focus:border-bright-yellow w-full"
              />
              <button className="bg-bright-yellow text-bright-black px-4 py-2 rounded-r-md font-bold text-xs">
                JOIN
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-xs">
            © 2024 Bright Business Consulting. All rights reserved.
          </div>
          <div className="flex space-x-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
