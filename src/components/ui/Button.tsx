import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, className = "", onClick, ...props }: ButtonProps) => {
  return (
    <button 
      className={`group relative rounded-xl bg-[#0c1f0c]/90 backdrop-blur-xl border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_8px_30px_rgba(16,185,129,0.2)] hover:border-emerald-500/40 overflow-hidden px-6 py-3 flex items-center justify-center ${className}`}
      onClick={onClick}
      {...props}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/20 blur-[20px] rounded-full pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-50"></div>
      
      <div className="relative z-10 flex items-center gap-2 text-white font-medium text-sm">
        {children}
      </div>
    </button>
  );
};
