import type { FC } from "react";
import type { TodoType } from "../../models";

import "./Item.css";

interface ItemProps extends TodoType {
  isEditing: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggle: () => void;
  onDelete: () => void;
  onStartEditing: () => void;
  onAfterStartEditing: (e: HTMLInputElement) => void;
  onEdit: () => void;
}

const Item: FC<ItemProps> = ({
  id,
  text,
  completed,
  isEditing,
  onChange,
  onToggle,
  onDelete,
  onStartEditing,
  onAfterStartEditing,
  onEdit,
}) => {
  return (
    <li aria-label="todo" className="item">
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          aria-label={`toggle-${id}`}
          name={`toggle-${id}`}
          className="visually-hidden item__checkbox"
        />
        <span className="item__checkbox__box"></span>
      </label>
      {isEditing ? (
        <form aria-label={`form-${id}`} onSubmit={onEdit}>
          <input
            type="text"
            onChange={onChange}
            value={text}
            aria-label={`text-${id}`}
            name={`text-${id}`}
            placeholder="Todo will be removed if it empty"
            onBlur={onEdit}
            ref={onAfterStartEditing}
          />
        </form>
      ) : (
        <button
          className={`button item__textbox${
            completed ? " item__textbox_line" : ""
          }`}
          onClick={onStartEditing}
          aria-label={`static-text-${id}`}
        >
          {text}
        </button>
      )}
      <button onClick={onDelete} aria-label={`delete-${id}`} className="button">
        &#10005;
      </button>
    </li>
  );
};

export default Item;
