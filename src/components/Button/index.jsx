import React from 'react';
import './style.css'

export function Button({ children, color, ...rest }) {
  return (
    <button className='button' style={{ backgroundColor: color }} {...rest}>{children}</button>
  )
}

