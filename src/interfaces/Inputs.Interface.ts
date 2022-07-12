import { ChangeEvent, FormEvent } from "react";

export interface IInputs {
  label?: string;
  name: string;
  value: string;
  onInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => void;
}
