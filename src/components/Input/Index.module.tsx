import React, { forwardRef } from 'react';
import "./style.css";

type inputProps = {
  type: string;
  style: React.CSSProperties;
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, inputProps>(({ type, style, placeholder }, ref) => {
  return (
    <input type={type} style={style} ref={ref} placeholder={placeholder} className='input'/>
  )
})

export default Input;