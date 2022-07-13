import { IInputs } from "../../interfaces";
import { v4 as uuidv4 } from "uuid";

interface SelectGroup extends IInputs {
  children: JSX.Element | JSX.Element[];
}
export const Select = ({
  label,
  name,
  children,
  value,
  onInputChange,
}: SelectGroup) => {
  const id = uuidv4();
  return (
    <>
      <div className="mb-3">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <select
          className="form-select"
          id={id}
          name={name}
          value={value}
          onChange={onInputChange}
        >
          {children}
        </select>
      </div>
    </>
  );
};
