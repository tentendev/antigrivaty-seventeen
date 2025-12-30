import React from 'react';
import { UnitType } from '../types';
import { ArrowScribble } from './Icons';

const units = [
  {
    type: UnitType.HIPHOP,
    title: 'HIP-HOP',
    subtitle: 'TEAM',
    desc: '我們開發基礎的新流動，這將推動第四次工業革命。強烈的節奏與歌詞是我們的武器。',
    color: 'bg-indigo-600',
    img: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1470&auto=format&fit=crop' // Abstract techy/cool
  },
  {
    type: UnitType.VOCAL,
    title: 'VOCAL',
    subtitle: 'TEAM',
    desc: '我們與科學界的名人合作，將新穎的研究轉化為改善患者生活的新藥。感性的嗓音治癒心靈。',
    color: 'bg-cyan-400',
    img: 'https://images.unsplash.com/photo-1507643179173-442f01fc4341?q=80&w=1475&auto=format&fit=crop' // Water/Soft
  },
  {
    type: UnitType.PERFORMANCE,
    title: 'PERF',
    subtitle: 'TEAM',
    desc: '我們支持健康與技術交匯處的先驅者，推動數位工具的採用。極致的舞蹈展現身體美學。',
    color: 'bg-emerald-500',
    img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1470&auto=format&fit=crop' // Green/Energy
  }
];

const UnitSection: React.FC = () => {
  return (
    <section id="units" className="py-20 px-6 max-w-[1920px] mx-auto">
        <div className="mb-16 max-w-5xl">
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-tight">
                Across our three sectors, we are the <br/>
                <span className="relative inline-block text-svt-black z-10 px-2">
                    First
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-[50%] border-2 border-svt-pink -z-10 rotate-[-5deg]"></div>
                </span> 
                cheque in and back our companies <br/>
                <span className="border-b-4 border-svt-black">all the way to exit</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {units.map((unit) => (
                <div key={unit.type} className="group cursor-pointer">
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                        <img 
                            src={unit.img} 
                            alt={unit.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        <div className="absolute bottom-6 left-6 z-10">
                             <h3 className="font-display text-6xl text-white uppercase leading-none drop-shadow-lg">
                                {unit.title} <br/>
                                <span className="text-white/80">{unit.subtitle}</span>
                             </h3>
                        </div>
                    </div>
                    <div className="pt-6 border-t border-gray-200 mt-4 group-hover:border-svt-pink transition-colors">
                        <p className="font-body text-lg text-gray-800 leading-relaxed">
                            {unit.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        
        {/* Infographic Style Stats similar to ref */}
        <div className="mt-32 py-16 border-t border-b border-gray-100 grid grid-cols-1 md:grid-cols-4 gap-8 text-center items-center">
             <div>
                <span className="block font-display text-lg uppercase text-gray-500 mb-2">Since</span>
                <span className="font-display text-7xl md:text-8xl">2015</span>
             </div>
             <div className="relative">
                <ArrowScribble className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 text-blue-500 rotate-180" />
                 <span className="block font-display text-lg uppercase text-gray-500 mb-2">Albums Sold</span>
                 <span className="font-display text-7xl md:text-8xl">10M+</span>
             </div>
             <div>
                 <span className="block font-display text-lg uppercase text-gray-500 mb-2">World Tours</span>
                 <span className="font-display text-7xl md:text-8xl">3</span>
             </div>
             <div className="relative">
                 <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-svt-pink italic font-serif">that have resulted in</span>
                 <span className="block font-display text-lg uppercase text-gray-500 mb-2">Music Wins</span>
                 <span className="font-display text-7xl md:text-8xl relative inline-block">
                    50+
                    <div className="absolute bottom-2 left-0 w-full h-1 bg-svt-green"></div>
                 </span>
             </div>
        </div>
    </section>
  );
};

export default UnitSection;