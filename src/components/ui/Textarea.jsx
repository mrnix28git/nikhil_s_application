import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  required = false,
  className = '',
  rows = 4,
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
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
        rows={rows}
        className="w-full px-3 py-2 bg-[#e7e7e7] border border-[#e5e5e5] rounded-md focus:outline-none focus:ring-1 focus:ring-purple"
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  rows: PropTypes.number,
  error: PropTypes.string
};

export default Textarea;