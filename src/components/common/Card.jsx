import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';

const Card = ({ 
  title, 
  description, 
  icon, 
  buttonText = "Learn More", 
  buttonAction,
  className = "",
  variant = "default"
}) => {
  const cardVariants = {
    default: "bg-white border border-[#334155] rounded-tr-[15px] shadow-card",
    gradient: "bg-gradient-to-t from-[#fdc56c] to-[#f52d59] rounded-[25px] shadow-card text-white"
  };

  return (
    <div className={`${cardVariants[variant]} ${className} flex flex-col h-full`}>
      <div className="p-6 flex-1 flex flex-col">
        {icon && (
          <div className="flex justify-center mb-4">
            {typeof icon === 'string' ? (
              <img src={icon} alt={title} className="w-[89px] h-[89px] object-contain" />
            ) : (
              icon
            )}
          </div>
        )}
        
        <h3 className={`text-center md:text-left font-bold text-lg mb-4 ${variant === 'gradient' ? 'text-white' : 'text-purple'}`}>
          {title}
        </h3>
        
        <div className={`text-xs leading-relaxed mb-6 ${variant === 'gradient' ? 'text-white' : 'text-black'}`}>
          {typeof description === 'string' ? (
            <p className="text-center md:text-left">{description}</p>
          ) : (
            description
          )}
        </div>
      </div>
      
      {buttonText && (
        <div className="mt-auto p-4">
          <Button
            variant={variant === 'gradient' ? 'outline' : 'gradient'}
            className={`w-36 py-2 rounded-[10px] mx-auto block`}
            onClick={buttonAction}
          >
            {buttonText}
            {variant !== 'gradient' && (
              <span className="ml-2">→</span>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  buttonText: PropTypes.string,
  buttonAction: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'gradient'])
};

export default Card;