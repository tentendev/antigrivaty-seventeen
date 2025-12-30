import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: '關於我們', href: '#about' },
    { label: '分隊介紹', href: '#units' },
    { label: '成員檔案', href: '#members' },
    { label: '最新消息', href: '#news' },
    { label: '官方連結', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1920px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="block w-40 hover:opacity-80 transition-opacity">
           <img 
            src="https://logos-world.net/wp-content/uploads/2022/01/Seventeen-Logo.png" 
            alt="Seventeen Logo" 
            className="h-auto w-full object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="font-display uppercase text-sm font-bold tracking-wider hover:text-svt-pink transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-svt-green transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button className="bg-svt-black text-white px-5 py-2 font-display text-sm uppercase tracking-widest hover:bg-svt-pink transition-colors">
            Join Membership
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-svt-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 top-20 flex flex-col p-6 gap-4 animate-fade-in">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="font-display text-2xl uppercase font-bold text-svt-black hover:text-svt-pink"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;