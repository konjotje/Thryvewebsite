import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  key?: React.Key;
}

export const Card = ({ children, className = "", innerClassName = "", ...props }: CardProps) => {
  return (
    <div 
      className={`group relative p-[1px] rounded-3xl bg-gradient-to-br from-emerald-400/60 via-emerald-800/20 to-emerald-900/30 hover:from-emerald-400/80 hover:via-emerald-700/30 hover:to-emerald-900/50 transition-all duration-300 hover:scale-[1.02] ${className}`} 
      {...props}
    >
      <div className={`relative w-full h-full rounded-[calc(1.5rem-1px)] bg-thryve-card overflow-hidden ${innerClassName}`}>
        <div className="relative z-10 h-full w-full">
          {children}
        </div>
      </div>
    </div>
  );
};
