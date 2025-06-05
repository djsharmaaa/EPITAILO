import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-xl font-semibold text-white bg-[#898989] hover:bg-[#898989] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#898989] focus:ring-offset-2 dark:focus:ring-[#898989] ${className}`}
    >
      {children}
    </button>
  );
}