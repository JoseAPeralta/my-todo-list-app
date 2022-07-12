import { ITodoListData } from "../../interfaces";
import { formatDate } from "../../helpers";
import { UrgencyItem } from "./index";

interface ITodoListProps extends ITodoListData {
  handleToggleProperty: (id: string, property: string) => void;
  handleDeleteById: (id: string) => void;
}

export const ToDoListItem = ({
  id,
  name,
  endDate,
  urgency,
  type,
  completed,
  handleToggleProperty,
  handleDeleteById,
}: ITodoListProps) => {
  const formattedDate = formatDate(endDate);

  return (
    <>
      <td>{name}</td>
      <td>{formattedDate}</td>

      <td className="text-center">
        <UrgencyItem urgency={urgency} />
      </td>
      <td>{type}</td>
      <td className="text-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleToggleProperty(id, "completed")}
        />
      </td>
      <td>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => handleDeleteById(id)}
        >
          Delete
        </button>
      </td>
    </>
  );
};
