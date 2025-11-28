import React from 'react';

interface HarvestLogoProps {
  className?: string;
}

const HarvestLogo: React.FC<HarvestLogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="harvestLogoTitle"
    >
      <title id="harvestLogoTitle">The Lord's Harvest Logo</title>
      
      {/* Background Badge */}
      <circle cx="50" cy="50" r="48" fill="#5D4037" stroke="#C5A059" strokeWidth="3" />
      
      {/* Inner Glow/Sunburst effect */}
      <circle cx="50" cy="50" r="35" fill="#6D4C41" fillOpacity="0.5" />
      
      {/* The Cross */}
      <path 
        d="M50 20 V80 M35 35 H65" 
        stroke="#C5A059" 
        strokeWidth="6" 
        strokeLinecap="round"
      />
      <path 
        d="M50 20 V80 M35 35 H65" 
        stroke="#F9F7F2" 
        strokeWidth="2" 
        strokeLinecap="round" 
        opacity="0.8"
      />

      {/* Wheat Stalks (Left) */}
      <path 
        d="M30 80 Q 20 60 30 45" 
        stroke="#C5A059" 
        strokeWidth="2" 
        fill="none"
      />
      <path d="M30 45 L 25 50 M 30 48 L 25 54 M 30 52 L 25 58" stroke="#C5A059" strokeWidth="2" strokeLinecap="round"/>
      
      {/* Wheat Stalks (Right) */}
      <path 
        d="M70 80 Q 80 60 70 45" 
        stroke="#C5A059" 
        strokeWidth="2" 
        fill="none"
      />
      <path d="M70 45 L 75 50 M 70 48 L 75 54 M 70 52 L 75 58" stroke="#C5A059" strokeWidth="2" strokeLinecap="round"/>

      {/* Text Ring - Simplified representations */}
      <path 
        d="M25 25 Q 50 10 75 25" 
        stroke="#C5A059" 
        strokeWidth="1" 
        strokeDasharray="2 2"
        fill="none" 
        opacity="0.5"
      />
    </svg>
  );
};

export default HarvestLogo;