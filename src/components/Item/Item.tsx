import type { FC } from "react";
import type { TodoType } from "../../models";

import "./Item.css";

interface ItemProps extends TodoType {
  onToggle: () => void;
  onDelete: () => void;
}

const Item: FC<ItemProps> = ({ id, text, completed, onToggle, onDelete }) => {
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
      <span
        className={`item__textbox${completed ? " item__textbox_line" : ""}`}
      >
        {text}
      </span>
      <button onClick={onDelete} aria-label={`delete-${id}`} className="button">
        &#10005;
      </button>
    </li>
  );
};

export default Item;
