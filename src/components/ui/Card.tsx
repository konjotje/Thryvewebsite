import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  key?: React.Key;
}

export const Card = ({ children, className = "", ...props }: CardProps) => {
  return (
    <div className={`relative p-[2px] rounded-3xl bg-gradient-to-br from-white/30 via-emerald-500/20 to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover-glow ${className}`} {...props}>
      <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full opacity-40"></div>
      <div className="relative overflow-hidden bg-black/40 backdrop-blur-xl rounded-[calc(1.5rem-2px)] p-4 md:p-6 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};
