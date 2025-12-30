import React from 'react';
import { CircleScribble, UnderlineScribble, ArrowScribble } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-20 pb-32 overflow-hidden px-6 max-w-[1920px] mx-auto border-l border-r border-gray-100">
      
      {/* Top Tagline */}
      <div className="flex justify-center mb-16 relative">
        <span className="font-display font-bold text-sm tracking-[0.2em] uppercase text-gray-500">
          From Plexis to the World
        </span>
        <div className="absolute top-1/2 left-0 w-full h-px bg-pink-100 -z-10"></div>
      </div>

      {/* Main Headline */}
      <div className="text-center relative z-10 max-w-6xl mx-auto">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.9] text-svt-black">
          We Find, Fund <br/> 
          and Build for <br/>
          <span className="relative inline-block mt-2">
            Tomorrow's Idols,
            <UnderlineScribble className="text-svt-green w-full h-full -bottom-4 left-0" />
          </span>
          <span className="relative inline-block mx-4">
            Today
            <CircleScribble className="text-svt-pink w-[140%] h-[140%] -top-[20%] -left-[20%]" />
          </span>
        </h1>
        
        <div className="mt-12 flex justify-center">
            <a href="#members" className="font-display text-xl uppercase font-bold border-b-2 border-svt-black hover:border-svt-pink hover:text-svt-pink transition-all pb-1">
                Meet The Members
            </a>
        </div>
      </div>

      {/* Vertical Outline Text (Decorative) */}
      <div className="hidden lg:block absolute top-1/2 left-10 -translate-y-1/2 opacity-20 pointer-events-none select-none">
         <div className="flex flex-col font-display text-9xl text-transparent" style={{ WebkitTextStroke: '2px black' }}>
            <span>SAY</span>
            <span>THE</span>
            <span>NAME</span>
         </div>
      </div>

      {/* Description Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-32 max-w-6xl mx-auto">
        <div>
           <h2 className="font-display text-6xl text-transparent uppercase" style={{ WebkitTextStroke: '1px black' }}>
             13 Members<br/>3 Units<br/>1 Team
           </h2>
        </div>
        <div className="font-body text-lg leading-relaxed text-gray-700 space-y-6">
            <p>
                SEVENTEEN 於2015年成立，懷抱著巨大的野心：將最好的音樂帶給世界，並以前所未有的速度解決我們最大的挑戰。
            </p>
            <p className="border-l-4 border-svt-pink pl-6 italic">
                七年前，SEVENTEEN 還只是一個想法。如今，我們是一個獨立的、擁有數十億串流的強大團體，通過與 CARAT 們的獨特夥伴關係，創造了變革性的舞台。
            </p>
            <p>
                與 PLEDIS Entertainment 一起，我們創造了一個非凡的音樂商業生態系統，持續增加對世界巡演的投資，吸引了來自世界各地的頂尖人才。
            </p>
        </div>
      </div>
      
      {/* Decorative arrow */}
      <ArrowScribble className="absolute bottom-20 right-20 w-32 h-32 text-svt-serenity rotate-12 hidden md:block" />

    </section>
  );
};

export default Hero;