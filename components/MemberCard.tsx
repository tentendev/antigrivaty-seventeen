import React, { useState } from 'react';
import { Member } from '../types';

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  const [imgSrc, setImgSrc] = useState(member.image);
  const [hasError, setHasError] = useState(false);

  // Fallback images based on unit if the main image fails
  const getFallback = () => {
    if (member.unit === 'HIP-HOP TEAM') return 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop';
    if (member.unit === 'VOCAL TEAM') return 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1287&auto=format&fit=crop';
    return 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=1330&auto=format&fit=crop';
  };

  return (
    <div className="group flex flex-col h-full bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden aspect-[3/4]">
        <div className="absolute top-4 left-4 z-20 flex gap-2">
           <span className="bg-white/90 backdrop-blur px-2 py-1 text-xs font-bold uppercase tracking-wider text-svt-black border border-gray-200">
             {member.unit}
           </span>
        </div>
        
        <img 
          src={imgSrc} 
          alt={member.stageName} 
          referrerPolicy="no-referrer"
          onError={() => {
            if (!hasError) {
              setImgSrc(getFallback());
              setHasError(true);
            }
          }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0 contrast-125"
        />
        
        {/* Overlay Hover Info */}
        <div className="absolute inset-0 bg-svt-pink/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center text-white">
           <p className="font-body text-lg mb-4">{member.description}</p>
           <div className="text-sm font-mono border-t border-white/40 pt-4 w-full flex justify-between">
              <span>DOB: {member.birthDate}</span>
              <span>TYPE: {member.bloodType}</span>
           </div>
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col justify-between border-t border-gray-100">
        <div>
           <h3 className="font-display text-3xl uppercase mb-1">{member.stageName}</h3>
           <p className="font-body text-sm text-gray-500 uppercase tracking-wide">{member.fullName}</p>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
             <span className="text-xs font-bold uppercase tracking-widest text-svt-black border-b border-svt-black pb-0.5">View Profile</span>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;