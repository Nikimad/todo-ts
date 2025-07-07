import type { FC } from "react";

interface FilterProps {
  title: string;
  isDisabled: boolean;
  onClick: () => void;
}

const Filter: FC<FilterProps> = ({ title, isDisabled, onClick }) => (
  <button onClick={onClick} disabled={isDisabled}>
    {title}
  </button>
);

export default Filter;
