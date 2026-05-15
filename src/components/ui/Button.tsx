import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, className = "", onClick, ...props }: ButtonProps) => {
  return (
    <button 
      className={`relative p-[2px] rounded-xl bg-gradient-to-br from-emerald-400/40 via-emerald-600/20 to-transparent shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 ${className}`}
      onClick={onClick}
      {...props}
    >
      <div className="relative rounded-[10px] bg-gradient-to-br from-emerald-950/50 to-black/50 backdrop-blur-sm px-6 py-3 flex items-center justify-center gap-2">
        <div className="relative z-10 flex items-center gap-2 text-white font-medium text-sm">
          {children}
        </div>
      </div>
    </button>
  );
};
