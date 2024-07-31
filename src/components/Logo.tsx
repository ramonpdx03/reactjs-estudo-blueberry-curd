import React from 'react';
import logo from '../images/logo.png';

interface LogoProps {
  size?: number;
  withText?: boolean;
}

export default function Logo({ size = 56, withText = false }: LogoProps) {
  let imgLogo = <img src={logo} alt="Blueberry Curd" width={size} height={size} />

  if (withText) {
    return (
      <div className="flex justify-center items-center gap-2">
        {imgLogo}
        <h1><span className="text-indigo-400">Blueberry</span> Curd</h1>
      </div>
    );
  }

  return imgLogo;
}