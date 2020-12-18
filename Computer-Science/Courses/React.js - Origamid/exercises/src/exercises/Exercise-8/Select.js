import React from "react";

const Select = ({ label, name, options, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <select defaultValue="" name={name} id={name}>
        <option value="" disabled hidden />

        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
