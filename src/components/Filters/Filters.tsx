import type { FC } from "react";
import type { FilterType, FilterValueType } from "../../models";

import Filter from "../Filter";

import "./Filters.css";

interface FiltersProps {
  currentFilterValue: FilterValueType;
  onSelect: (filterValue: FilterValueType) => void;
}

const Filters: FC<FiltersProps> = ({ currentFilterValue, onSelect }) => {
  const filters: FilterType[] = [
    {
      title: "All",
      value: "all",
    },
    { title: "Active", value: "active" },
    { title: "Completed", value: "completed" },
  ];

  return (
    <div className="filters">
      {filters.map((filter) => (
        <Filter
          key={filter.value}
          filter={filter}
          currentFilterValue={currentFilterValue}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default Filters;
