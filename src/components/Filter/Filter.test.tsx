import type { FilterType } from "../../models";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Filter from "./Filter";

describe("Filter", () => {
  const filter: FilterType = {
    title: "All",
    value: "all",
  };

  const testOnClick = (filter: FilterType, isDisabled: boolean) => {
    const onClick = vi.fn();
    render(
      <Filter title={filter.title} isDisabled={isDisabled} onClick={onClick} />
    );

    const button = screen.getByText(filter.title);
    fireEvent.click(button);

    return onClick;
  };

  it("Клик на фильтр", () => {
    const onClick = testOnClick(filter, false);
    expect(onClick).toHaveBeenCalled();
  });

  it("Клик на выбранный фильтр", () => {
    const onClick = testOnClick(filter, true);
    expect(onClick).not.toHaveBeenCalled();
  });
});
