import { ITodoListData } from "./interfaces";
import { Header, ToDoInput, ToDoList } from "./components";
import { useModifyState } from "./hooks";

function App() {
  const initialToDo: ITodoListData[] = [
    {
      id: "3d0ce968-9d54-412a-aa64-b8468c220c61",
      name: "first",
      endDate: "2022-07-08",
      urgency: "Medium",
      type: "Personal",
      completed: false,
    },
    {
      id: "1f335b3c-bec4-479a-9a52-e955172af25e",
      name: "second",
      endDate: "2022-07-08",
      urgency: "Medium",
      type: "Personal",
      completed: false,
    },
  ];

  const {
    state: toDoList,
    setState: setTodoList,
    handleToggleProperty,
    handleDeleteById,
  } = useModifyState(initialToDo);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <ToDoInput setTodoList={setTodoList} />
          <ToDoList
            toDoList={toDoList}
            handleToggleProperty={handleToggleProperty}
            handleDeleteById={handleDeleteById}
          />
        </div>
      </div>
    </>
  );
}

export default App;
