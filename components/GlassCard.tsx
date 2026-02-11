
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  useBreathing?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", useBreathing = false }) => {
  return (
    <div className={`
      liquid-glass rounded-[2rem] p-6 transition-all duration-500 
      hover:bg-white/[0.03]
      ${useBreathing ? 'breathing-neon' : ''} 
      ${className}
    `}>
      {children}
    </div>
  );
};
