import { useState } from "react";

interface IUseListState<T> {
  state: T[];
  setState: React.Dispatch<React.SetStateAction<T[]>>;
  handleToggleProperty: (id: string, property: string) => void;
  handleDeleteById: (id: string) => void;
}

export const useModifyState = <T>(initialState: T[]): IUseListState<T> => {
  const [state, setState] = useState(initialState);

  const handleToggleProperty = (id: string, property: string): void => {
    const newState = state.map((sta: any) => {
      if (sta.id === id) {
        return { ...sta, [property]: !sta[property] };
      }
      return sta;
    });
    setState(newState);
  };

  const handleDeleteById = (id: string): void => {
    const newState = state.filter((sta: any) => {
      return sta.id !== id;
    });
    setState(newState);
  };

  return { state, setState, handleToggleProperty, handleDeleteById };
};
