import { IInputs } from "../../interfaces";

interface InputProps extends IInputs {
  placeholder?: string;
}

export const Input = ({
  label,
  name,
  placeholder,
  value = "",
  onInputChange,
}: InputProps) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          className="form-control"
          type="text"
          name={name}
          placeholder={placeholder}
          id={name}
          value={value}
          onChange={onInputChange}
        />
      </div>
    </>
  );
};
