// src/components/Button.jsx
import React from 'react';

const Button = ({ text, href, target = "_self", className = "" }) => {
  return (
    <a 
      href={href} 
      target={target} 
      rel={target === "_blank" ? "noopener noreferrer" : undefined} 
      className={`btn ${className}`}
    >
      {text}
    </a>
  );
};

export default Button;
