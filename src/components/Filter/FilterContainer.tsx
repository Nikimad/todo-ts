import type { FC } from "react";
import type { FilterType, FilterValueType } from "../../models";

import { useCallback } from "react";

import Filter from "./Filter";

interface FilterContainerProps {
  filter: FilterType;
  currentFilterValue: FilterValueType;
  onSelect: (filterValue: FilterValueType) => void;
}

const FilterContainer: FC<FilterContainerProps> = ({
  filter,
  currentFilterValue,
  onSelect,
}) => {
  const { title, value } = filter;
  const handleSelect = useCallback(() => onSelect(value), [value, onSelect]);

  return (
    <Filter
      title={title}
      isDisabled={currentFilterValue === value}
      onClick={handleSelect}
    />
  );
};

export default FilterContainer;
