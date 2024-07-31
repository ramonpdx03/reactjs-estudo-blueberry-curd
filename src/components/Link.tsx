import React from 'react';

interface LinkProps {
  children?: React.ReactNode;
  to?: string;
  className?: string;
  [key: string]: any;
}

export default function Link({ children, to, className, ...props }: LinkProps) {
  return (
    <a
      href={to}
      className={`text-indigo-400 hover:text-indigo-300 underline ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
