import type { FC } from "react";
import type { FilterValueType } from "../../models";

import Filters from "../Filters";

import "./Footer.css";

interface FooterProps {
  activeCount: number;
  currentFilterValue: FilterValueType;
  isCompletedExist: boolean;
  onSelect: (filter: FilterValueType) => void;
  onDeleteCompleted: () => void;
}

const Footer: FC<FooterProps> = ({
  activeCount,
  currentFilterValue,
  isCompletedExist,
  onSelect,
  onDeleteCompleted,
}) => (
  <div className="styledwrapper footer">
    <div aria-label="todos counter">{activeCount} items left</div>
    <Filters currentFilterValue={currentFilterValue} onSelect={onSelect} />
    <button
      onClick={onDeleteCompleted}
      disabled={!isCompletedExist}
      aria-label="Delete completed"
      className="button"
    >
      Delete completed
    </button>
  </div>
);

export default Footer;
