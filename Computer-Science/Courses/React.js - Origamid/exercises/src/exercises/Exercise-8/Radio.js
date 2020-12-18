import React from "react";
// styles
import "./radio.css";

const Radio = ({
  value,
  setValue,
  options,
  active,
  onChange,
  pergunta,
  onClick,
  id,
  ...props
}) => {
  if (active === false) {
    return null;
  } else
    return (
      <div key={id} id={id} className="question-block">
        <h3>{pergunta}</h3>
        <div className="radio-block">
          {options.map((option, index) => (
            <div className="radio">
              <label htmlFor={option}>
                {index + 1}) {option}
                <input
                  key={value}
                  id={id}
                  type="radio"
                  name={option}
                  value={option}
                  checked={value === option}
                  onChange={onChange}
                  {...props}
                />
              </label>
            </div>
          ))}
        </div>
        <button onClick={onClick}>Proxima</button>
      </div>
    );
};

export default Radio;
