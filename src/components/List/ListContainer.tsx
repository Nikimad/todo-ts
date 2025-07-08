import { useCallback, useState } from "react";
import type { FilterValueType, TodoType } from "../../models";

import List from "./List";

const ListContainer = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [text, setText] = useState("");
  const [currentFilterValue, setFilterValue] = useState<FilterValueType>("all");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (text.trim() === "") return;

      const newTodo: TodoType = {
        id: crypto.randomUUID(),
        text,
        completed: false,
      };

      setTodos((prev) => [...prev, newTodo]);
      setText("");
    },
    [text]
  );

  const handleToggle = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const handleDelete = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const handleDeleteCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  }, []);

  const handleSelectFilter = useCallback((filterValue: FilterValueType) => {
    setFilterValue((prev) => (prev !== filterValue ? filterValue : prev));
  }, []);

  const filteredTodos = todos.filter((todo) => {
    if (currentFilterValue === "active") return !todo.completed;
    if (currentFilterValue === "completed") return todo.completed;
    return true;
  });

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <List
      text={text}
      todos={todos}
      filteredTodos={filteredTodos}
      activeCount={activeCount}
      currentFilterValue={currentFilterValue}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleSelectFilter={handleSelectFilter}
      handleDeleteCompleted={handleDeleteCompleted}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );
};

export default ListContainer;
