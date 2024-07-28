import { Eye, EyeClosed } from "phosphor-react";
import { PatternFormat } from 'react-number-format';
import { useState } from "react";

export default function Input({ type = 'text', id, isPassword = false, label = '', className = '', icon = null, handleClickIcon, mask = '', ...props }) {
  let [ typeValue, setTypeValue ] = useState(type);

  if (isPassword) {
    icon = typeValue === 'password' ? <Eye size={22} /> : <EyeClosed size={22} />;
    handleClickIcon = () => setTypeValue(typeValue === 'password' ? 'text' : 'password');
  }

  return (
    <div key={id} className={`relative ${className}`}>
      { label !== '' &&
        <label>{label}</label>
      }
      { mask !== '' &&
        <PatternFormat
          format={mask}
          mask="_"
          {...props}
        />
      }
      { mask === '' &&
        <input
          type={typeValue}
          {...props}
        />
      }
      { icon !== null &&
        <div className={`absolute pt-6 h-full flex items-center right-4 bottom-0 ${handleClickIcon ? 'cursor-pointer' : ''}`}
          onClick={handleClickIcon}
        >
          {icon}
        </div>
      }
    </div>
  );
}