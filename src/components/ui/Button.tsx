import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, className = "", onClick, ...props }: ButtonProps) => {
  return (
    <button 
      className={`group relative p-[1px] rounded-xl bg-gradient-to-br from-emerald-400/80 via-emerald-600/30 to-emerald-900/40 hover:from-emerald-400 hover:via-emerald-500/50 hover:to-emerald-900/60 shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_8px_30px_rgba(16,185,129,0.2)] ${className}`}
      onClick={onClick}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
      
      <div className="relative w-full h-full rounded-[11px] bg-[#0c1f0c] backdrop-blur-xl px-6 py-3 flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/20 blur-[20px] rounded-full pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-50"></div>
        
        <div className="relative z-10 flex items-center gap-2 text-white font-bold text-sm font-heading tracking-wide">
          {children}
        </div>
      </div>
    </button>
  );
};
