import React from "react";

interface ButtonProps {
  type?: 'primary' | 'secondary';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export default function Button({type = 'primary', onClick, className, children, ...props}: ButtonProps) {
  const buttonType: {[key: string]: string} = {
    'primary': 'btn-primary',
    'secondary': 'btn-secondary',
  };

  return (
    <button
      className={`btn ${buttonType[type]} ${className ?? ''}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}