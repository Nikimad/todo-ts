import type { FC } from "react";

import "./Adder.css";

interface AdderProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Adder: FC<AdderProps> = ({ value, onChange, onSubmit }) => (
  <form
    onSubmit={onSubmit}
    aria-label="Add todo form"
    className="styledwrapper adder"
  >
    <input
      type="text"
      placeholder="Create a new todo..."
      value={value}
      aria-label="Add todo input"
      name="newTodoText"
      onChange={onChange}
      className="adder__input"
    />
    <button
      type="submit"
      aria-label="Add todo button"
      className="button adder__button"
    >
      <span aria-hidden={true}>+</span>
      <span className="visually-hidden">add new todo</span>
    </button>
  </form>
);

export default Adder;
