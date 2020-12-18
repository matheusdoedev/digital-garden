import React from "react";

const Input = ({ type, name, label, value, onChange }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default Input;
