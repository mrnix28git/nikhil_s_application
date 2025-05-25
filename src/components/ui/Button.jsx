import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  size = 'medium',
  type = 'button',
  icon = null,
  ...props 
}) => {
  const baseClasses = 'font-medium rounded transition-colors duration-200 focus:outline-none';
  
  const variants = {
    primary: 'bg-purple text-white hover:bg-purple-light',
    secondary: 'bg-pink text-white hover:bg-pink-dark',
    gradient: 'bg-gradient-pink-purple text-white',
    outline: 'border-2 border-white text-white hover:bg-white/10'
  };
  
  const sizes = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      <div className="flex items-center justify-center">
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </div>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'gradient', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  icon: PropTypes.node
};

export default Button;