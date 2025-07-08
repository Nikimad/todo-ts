import type { FC } from "react";
import type { TodoType } from "../../models";

import { useCallback, useState } from "react";

import Item from "./Item";

interface ItemContainerProps {
  todo: TodoType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

const ItemContainer: FC<ItemContainerProps> = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const { id, text } = todo;

  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text);

  const handleStartEditing = useCallback(() => {
    if (!isEditing) setIsEditing(true);
  }, [isEditing]);

  const handleFocusOnStartEditing = useCallback(
    (el: HTMLInputElement) => {
      if (isEditing && el) {
        el.focus();
      }
    },
    [isEditing]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleToggle = useCallback(() => onToggle(id), [id, onToggle]);

  const handleDelete = useCallback(() => onDelete(id), [id, onDelete]);

  const handleEdit = useCallback(() => {
    if (isEditing) {
      onEdit(id, value);
      setIsEditing(false);
    }
  }, [id, value, isEditing, onEdit]);

  return (
    <Item
      id={todo.id}
      completed={todo.completed}
      isEditing={isEditing}
      text={value}
      onChange={handleChange}
      onToggle={handleToggle}
      onDelete={handleDelete}
      onStartEditing={handleStartEditing}
      onAfterStartEditing={handleFocusOnStartEditing}
      onEdit={handleEdit}
    />
  );
};

export default ItemContainer;
