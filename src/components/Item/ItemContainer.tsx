import type { FC } from "react";
import type { TodoType } from "../../models";

import { useCallback } from "react";

import Item from "./Item";

interface ItemContainerProps {
  todo: TodoType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const ItemContainer: FC<ItemContainerProps> = ({
  todo,
  onToggle,
  onDelete,
}) => {
  const { id } = todo;
  const handleToggle = useCallback(() => onToggle(id), [id, onToggle]);

  const handleDelete = useCallback(() => onDelete(id), [id, onDelete]);

  return (
    <Item
      id={todo.id}
      text={todo.text}
      completed={todo.completed}
      onToggle={handleToggle}
      onDelete={handleDelete}
    />
  );
};

export default ItemContainer;
