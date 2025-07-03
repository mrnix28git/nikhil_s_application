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
    primary: 'bg-[#f52d59] text-white hover:bg-[#e04a4e]',
    secondary: 'bg-[#fdc56c] text-white hover:bg-[#e4b159]',
    gradient: 'bg-gradient-to-r from-[#fdc56c] to-[#f52d59] text-white',
    outline: 'border-2 border-[#f52d59] text-[#f52d59] hover:bg-[#f52d59]/10'
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
