import type { FC } from "react";
import type { TodoType } from "../../models";

interface ItemProps extends TodoType {
  onToggle: () => void;
  onDelete: () => void;
}

const Item: FC<ItemProps> = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
}) => {
  return (
    <li aria-label="todo">
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        aria-label={`toggle-${id}`}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </span>
      <button onClick={onDelete} aria-label={`delete-${id}`}>
        Delete
      </button>
    </li>
  );
};

export default Item;
