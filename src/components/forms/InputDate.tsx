import { IInputs } from "../../interfaces";

interface InputProps extends IInputs {
  min?: string;
}

export const InputDate = ({
  label,
  name,
  value,
  min,
  onInputChange,
}: InputProps) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          className="form-control"
          type="date"
          name={name}
          id={name}
          min={min}
          value={value}
          onChange={onInputChange}
        />
      </div>
    </>
  );
};
