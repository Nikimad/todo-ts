import type { FC } from "react";
import type { TodoType, FilterValueType } from "../../models";

import Item from "../Item";
import Adder from "../Adder";
import Filters from "../Filters";

import "./List.css";
import Footer from "../Footer";

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
  <>
    <Adder value={text} onChange={handleChange} onSubmit={handleSubmit} />
    <div className="styledwrapper list__wrapper">
      <ul className="list">
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
    <Footer
      activeCount={activeCount}
      currentFilterValue={currentFilterValue}
      isCompletedExist={todos.some((todo) => todo.completed)}
      onSelect={handleSelectFilter}
      onDeleteCompleted={handleDeleteCompleted}
    />
  </>
);

export default List;
