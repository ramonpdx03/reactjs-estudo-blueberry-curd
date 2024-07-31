import React from 'react';
import { ArrowLeft } from "phosphor-react";

interface LayoutLoginProps {
  btnBack?: string;
  children?: React.ReactNode;
}

export default function LayoutLogin({ btnBack = '', children }: LayoutLoginProps) {
  return (
    <div className="my-auto p-4 flex flex-col items-center">
      <div className="relative m-auto min-w-[300px] max-w-[600px] w-full flex justify-center p-8 rounded-xl bg-slate-800">
        { btnBack !== '' &&
          <div className="absolute top-4 left-4 cursor-pointer">
            <a id="btn-back" href={btnBack}><ArrowLeft size={24} /></a>
          </div>
        }
        <div className="min-w-[260px] max-w-[360px] w-full flex flex-col justify-center gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}