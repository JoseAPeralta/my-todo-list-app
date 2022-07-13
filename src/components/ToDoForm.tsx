import { v4 as uuidv4 } from "uuid";
import { Input, InputDate, Radio, RadioGroup, Select } from "./forms";
import { ITodoListData } from "../interfaces/TodoListData.Interface";
import { useForm } from "../hooks";
import { getToday } from "../helpers";

interface ITodoFormProps {
  setTodoList: React.Dispatch<React.SetStateAction<ITodoListData[]>>;
}

export const ToDoInput = ({ setTodoList }: ITodoFormProps) => {
  const initialState: ITodoListData = {
    id: uuidv4(),
    name: "",
    endDate: getToday(),
    urgency: "Medium",
    type: "Personal",
    completed: false,
  };
  const { formState, onInputChange, onResetForm } = useForm(initialState);
  const { name, endDate, urgency, type } = formState;

  const addTask = () => {
    setTodoList((current) => [...current, formState]);
    onResetForm();
  };
  return (
    <>
      <div className="col-12 col-md-4">
        <form>
          <Input
            label={"Name"}
            name={"name"}
            value={name}
            placeholder={"task name"}
            onInputChange={onInputChange}
          />

          <InputDate
            label={"End date"}
            name={"endDate"}
            min={getToday()}
            value={endDate}
            onInputChange={onInputChange}
          />

          <RadioGroup
            label={"Urgency"}
            name={"urgency"}
            value={urgency}
            onInputChange={onInputChange}
          >
            <Radio value={"More"}>More</Radio>
            <Radio value={"Medium"}>Medium</Radio>
            <Radio value={"Less"}>Less</Radio>
          </RadioGroup>

          <Select
            label={"Type"}
            name={"type"}
            value={type}
            onInputChange={onInputChange}
          >
            <option>Personal</option>
            <option>Academic</option>
            <option>Job</option>
          </Select>

          <input
            className="btn btn-primary btn-lg btn-block"
            type="button"
            value="Add task"
            onClick={addTask}
          />

          <input
            className="btn btn-primary btn-lg btn-block"
            type="button"
            value="Reset form"
            onClick={onResetForm}
          />
        </form>
      </div>
    </>
  );
};
