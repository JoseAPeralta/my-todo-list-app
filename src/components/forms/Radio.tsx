import { ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";

type RadioProps = {
  name?: string;
  value: string;
  children: string;
  state?: string;
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Radio = ({
  name,
  value,
  children,
  state,
  onInputChange,
}: RadioProps) => {
  const id = uuidv4();

  return (
    <>
      <div className="custom-control custom-radio">
        <input
          className="custom-control-input"
          type="radio"
          name={name}
          value={value}
          id={id}
          checked={state === value}
          onChange={onInputChange}
        />
        <label className="custom-control-label" htmlFor={id}>
          {children}
        </label>
      </div>
    </>
  );
};
