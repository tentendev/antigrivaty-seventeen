import React from 'react';

export const CircleScribble: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 100" className={`absolute pointer-events-none ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M20,50 C20,20 80,10 100,20 C140,40 160,80 120,90 C80,100 30,80 25,55 C22,40 60,30 90,35" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      className="scribble-anim"
    />
  </svg>
);

export const UnderlineScribble: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 300 30" className={`absolute pointer-events-none ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M5,15 Q50,5 100,15 T200,15 T290,10" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round"
      className="scribble-anim"
    />
  </svg>
);

export const ArrowScribble: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 50" className={`absolute pointer-events-none ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M10,25 C30,25 60,15 90,25 M70,10 L90,25 L70,40" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const CrossScribble: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 50 50" className={`absolute pointer-events-none ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,10 L40,40 M40,10 L10,40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);
