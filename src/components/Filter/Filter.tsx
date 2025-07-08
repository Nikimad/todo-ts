import type { FC } from "react";

import "./Filter.css";

interface FilterProps {
  title: string;
  isDisabled: boolean;
  onClick: () => void;
}

const Filter: FC<FilterProps> = ({ title, isDisabled, onClick }) => (
  <button onClick={onClick} disabled={isDisabled} className="button filter">
    {title}
  </button>
);

export default Filter;
