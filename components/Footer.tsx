import React from 'react';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-svt-black text-white pt-20 pb-10 px-6">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1">
                 <h2 className="font-display text-6xl mb-6">SVT</h2>
                 <div className="flex gap-4">
                    <a href="#" className="hover:text-svt-pink transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="hover:text-svt-pink transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="hover:text-svt-pink transition-colors"><Youtube size={20} /></a>
                    <a href="#" className="hover:text-svt-pink transition-colors"><Facebook size={20} /></a>
                 </div>
            </div>
            
            <div>
                <h4 className="font-display uppercase text-lg mb-6 text-gray-400">PLEDIS</h4>
                <ul className="space-y-2 font-body text-sm text-gray-300">
                    <li><a href="#" className="hover:text-white">What We Do</a></li>
                    <li><a href="#" className="hover:text-white">Audition</a></li>
                    <li><a href="#" className="hover:text-white">Company</a></li>
                    <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-display uppercase text-lg mb-6 text-gray-400">UNITS</h4>
                <ul className="space-y-2 font-body text-sm text-gray-300">
                    <li><a href="#" className="hover:text-white">Hip-Hop Team</a></li>
                    <li><a href="#" className="hover:text-white">Vocal Team</a></li>
                    <li><a href="#" className="hover:text-white">Performance Team</a></li>
                    <li><a href="#" className="hover:text-white">BSS (BooSeokSoon)</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-display uppercase text-lg mb-6 text-gray-400">LEGAL</h4>
                <ul className="space-y-2 font-body text-sm text-gray-300">
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                    <li><a href="#" className="hover:text-white">Fan Club Rules</a></li>
                </ul>
            </div>
        </div>
        
        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono">
            <p>© 2024 PLEDIS Entertainment. All Rights Reserved.</p>
            <p>DESIGN CONCEPT: OXFORD SCIENCE ENTERPRISES TRIBUTE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;