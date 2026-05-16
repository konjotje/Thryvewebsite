import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  key?: React.Key;
}

export const Card = ({ children, className = "", ...props }: CardProps) => {
  return (
    <div 
      className={`group relative rounded-3xl bg-[#0c1f0c]/90 backdrop-blur-xl border border-white/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)] hover:border-emerald-500/30 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.4)] ${className}`} 
      {...props}
    >
      {/* Subtler central green glow inside the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-500/10 blur-[60px] rounded-full pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-50"></div>
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};
