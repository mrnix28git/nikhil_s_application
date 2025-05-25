import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  required = false,
  className = '',
  error = '',
  ...props
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-gray-700 font-bold mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
        className="w-full px-3 py-2 bg-[#e7e7e7] border border-[#e5e5e5] rounded-md focus:outline-none focus:ring-1 focus:ring-purple"
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.string
};

export default InputField;