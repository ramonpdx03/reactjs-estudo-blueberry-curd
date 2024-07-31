import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Checkbox({ type = "checkbox", id, name, children, disabled = false, className = '', ...props }: CheckboxProps) {
  return (
    <label htmlFor={id} className={`checkbox ${className}`}>
      <input type={type} id={id} name={name} disabled={disabled} {...props} />
      <span className={`text-sm ${disabled ? 'text-slate-400' : ''}`}>{children}</span>
    </label>
  );
}