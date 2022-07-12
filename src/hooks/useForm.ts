import { ChangeEvent, useState } from "react";

interface UseFormReturn<T> {
  formState: T;
  onInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => void;
  onResetForm: () => void;
}

export const useForm = <T>(initialForm: T): UseFormReturn<T> => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = (): void => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
