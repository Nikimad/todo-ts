import type { FC } from "react";

interface AdderProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Adder: FC<AdderProps> = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} aria-label="Add todo form">
    <input
      type="text"
      placeholder="Create a new todo..."
      value={value}
      aria-label="Add todo input"
      name="newTodoText"
      onChange={onChange}
    />
    <button type="submit" aria-label="Add todo button">Add</button>
  </form>
);

export default Adder;
