import type { FC } from "react";
import type { TodoType, FilterValueType } from "../../models";

import Item from "../Item";
import Adder from "../Adder";
import Filters from "../Filters";

export interface ListProps {
  text: string;
  todos: TodoType[];
  filteredTodos: TodoType[];
  activeCount: number;
  currentFilterValue: FilterValueType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSelectFilter: (filter: FilterValueType) => void;
  handleDeleteCompleted: () => void;
  handleToggle: (id: string) => void;
  handleDelete: (id: string) => void;
}

const List: FC<ListProps> = ({
  text,
  todos,
  filteredTodos,
  activeCount,
  currentFilterValue,
  handleChange,
  handleSubmit,
  handleSelectFilter,
  handleDeleteCompleted,
  handleToggle,
  handleDelete,
}) => (
  <div>
    <Adder value={text} onChange={handleChange} onSubmit={handleSubmit} />
    <div>
      <div aria-label="todos counter">{activeCount} items left</div>
      <Filters
        currentFilterValue={currentFilterValue}
        onSelect={handleSelectFilter}
      />
    </div>
    <button
      onClick={handleDeleteCompleted}
      disabled={!todos.some((todo) => todo.completed)}
      aria-label="Delete completed"
    >
      Delete completed
    </button>
    <ul>
      {filteredTodos.map((todo) => (
        <Item
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  </div>
);

export default List;
