import React from "react";
import { IInputs } from "../../interfaces";

interface RadioGroupProps extends IInputs {
  children: JSX.Element | JSX.Element[];
}

export const RadioGroup = ({
  name,
  label,
  value,
  children,
  onInputChange,
}: RadioGroupProps) => {
  return (
    <>
      <div className="form-group">
        {label && <label>{label}</label>}

        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            name: name,
            state: value,
            onInputChange,
          })
        )}
      </div>
    </>
  );
};
