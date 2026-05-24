import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void);
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ children, className = "", size = "md", onClick, disabled, type = 'button', ...props }: ButtonProps) => {
  const paddingClasses = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4"
  };

  const textClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  return (
    <button 
      className={`group relative p-[1px] rounded-xl bg-gradient-to-br from-emerald-400/80 via-emerald-600/30 to-emerald-900/40 hover:from-emerald-400 hover:via-emerald-500/50 hover:to-emerald-900/60 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      <div className={`relative w-full h-full rounded-[11px] bg-thryve-card flex items-center justify-center overflow-hidden ${paddingClasses[size]}`}>
        <div className={`relative z-10 flex items-center gap-2 text-[#E8E3D4] font-bold font-heading tracking-wide ${textClasses[size]}`}>
          {children}
        </div>
      </div>
    </button>
  );
};