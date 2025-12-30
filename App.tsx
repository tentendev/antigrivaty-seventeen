import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UnitSection from './components/UnitSection';
import MemberCard from './components/MemberCard';
import Footer from './components/Footer';
import { MEMBERS } from './constants';
import { UnitType } from './types';
import { CircleScribble } from './components/Icons';

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState('ALL');

    const filteredMembers = activeTab === 'ALL'
        ? MEMBERS
        : MEMBERS.filter(member => member.unit === `${activeTab} TEAM` as UnitType);

    return (
        <div className="min-h-screen bg-white text-svt-black overflow-x-hidden">
            <Navbar />

            <main>
                <Hero />
                <UnitSection />

                {/* Members Grid Section */}
                <section id="members" className="py-24 px-6 max-w-[1920px] mx-auto border-t border-gray-100">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div className="relative">
                            <h2 className="font-display text-5xl md:text-6xl uppercase">
                                All Members
                            </h2>
                            <CircleScribble className="text-svt-green w-32 h-32 -top-10 -right-10 opacity-70" />
                        </div>
                        <div className="hidden md:block">
                            <a href="#" className="font-display text-xl uppercase text-gray-400 hover:text-svt-black transition-colors">View All Profiles</a>
                        </div>
                    </div>

                    {/* Filter Tabs (Visual Only for aesthetics) */}
                    <div className="flex gap-8 mb-12 overflow-x-auto pb-4 border-b border-gray-100">
                        {['ALL', 'HIP-HOP', 'VOCAL', 'PERFORMANCE'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`font-display text-lg uppercase tracking-wider whitespace-nowrap transition-colors ${activeTab === tab
                                        ? 'text-svt-pink border-b-2 border-svt-pink'
                                        : 'text-gray-400 hover:text-black'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[500px]">
                        {filteredMembers.map((member) => (
                            <MemberCard key={member.id} member={member} />
                        ))}
                    </div>
                </section>

                {/* Latest News / Promo Section */}
                <section id="news" className="bg-svt-black text-white py-32 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30">
                        <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Concert" />
                    </div>
                    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                        <span className="font-mono text-svt-pink mb-4 block">OPEN CALL</span>
                        <h2 className="font-display text-5xl md:text-8xl uppercase mb-12 leading-none">
                            Be Part of the<br />
                            Next Generation<br />
                            Carat Bong
                        </h2>
                        <button className="bg-white text-svt-black px-8 py-4 rounded-full font-display text-xl uppercase hover:bg-svt-green transition-colors">
                            Join The Fandom
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default App;