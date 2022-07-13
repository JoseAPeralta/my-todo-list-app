import { ITodoListData } from "../../interfaces";
import { ToDoListItem } from "./index";

interface ITodoProps {
  toDoList: ITodoListData[];
  handleToggleProperty: (id: string, property: string) => void;
  handleDeleteById: (id: string) => void;
}

export const ToDoList = ({
  toDoList,
  handleToggleProperty,
  handleDeleteById,
}: ITodoProps) => {
  return (
    <>
      <div className="col-12 col-md-8">
        <div className="table-responsive">
          <table className="table table-striped table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">End date</th>
                <th scope="col">Urgency</th>
                <th scope="col">Type</th>
                <th scope="col">Completed</th>
              </tr>
            </thead>
            <tbody>
              {toDoList.map((toDo) => (
                <tr
                  key={toDo.id}
                  className={toDo.completed ? "text-muted" : ""}
                >
                  <ToDoListItem
                    handleToggleProperty={handleToggleProperty}
                    handleDeleteById={handleDeleteById}
                    {...toDo}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
