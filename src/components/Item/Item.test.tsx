import type { TodoType } from "../../models";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Item from "./Item";

describe("Item", () => {
  it("Вызывает onToggle и onDelete", () => {
    const todo: TodoType = {
      id: crypto.randomUUID(),
      text: "1",
      completed: false,
    };

    const onToggle = vi.fn();
    const onDelete = vi.fn();

    render(<Item {...todo} onToggle={onToggle} onDelete={onDelete} />);

    const checkbox = screen.getByLabelText(`toggle-${todo.id}`);
    const deleteButton = screen.getByLabelText(`delete-${todo.id}`);

    fireEvent.click(checkbox);
    fireEvent.click(deleteButton);

    expect(onToggle).toHaveBeenCalled();
    expect(onDelete).toHaveBeenCalled();
  });
});
