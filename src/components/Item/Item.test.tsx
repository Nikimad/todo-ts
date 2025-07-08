import type { TodoType } from "../../models";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Item from "./Item";

describe("Item", () => {
  const getTodo = (): TodoType => ({
    id: crypto.randomUUID(),
    text: "1",
    completed: false,
  });

  it("Вызывает onEdit", () => {
    const todo = getTodo();
    const onEdit = vi.fn();

    render(
      <Item
        {...todo}
        isEditing={true}
        onChange={() => {}}
        onToggle={() => {}}
        onDelete={() => {}}
        onStartEditing={() => {}}
        onAfterStartEditing={() => {}}
        onEdit={onEdit}
      />
    );
    const input = screen.getByLabelText(`text-${todo.id}`);
    const form = screen.getByLabelText(`form-${todo.id}`);

    fireEvent.blur(input);
    expect(onEdit).toHaveBeenCalled();

    fireEvent.submit(form);
    expect(onEdit).toHaveBeenCalled();
  });

  it("Вызывает onChange", () => {
    const todo = getTodo();
    const onChange = vi.fn();

    render(
      <Item
        {...todo}
        isEditing={true}
        onChange={onChange}
        onToggle={() => {}}
        onDelete={() => {}}
        onStartEditing={() => {}}
        onAfterStartEditing={() => {}}
        onEdit={() => {}}
      />
    );

    const input = screen.getByLabelText(`text-${todo.id}`);
    fireEvent.change(input, { target: { value: `${todo.text}1` } });
    expect(onChange).toHaveBeenCalled();
  });

  it("Вызывает остальные колбэки", () => {
    const todo = getTodo();

    const onToggle = vi.fn();
    const onDelete = vi.fn();
    const onStartEditing = vi.fn();

    render(
      <Item
        {...todo}
        isEditing={false}
        onChange={() => {}}
        onToggle={onToggle}
        onDelete={onDelete}
        onStartEditing={onStartEditing}
        onAfterStartEditing={() => {}}
        onEdit={() => {}}
      />
    );

    const text = screen.getByLabelText(`static-text-${todo.id}`);
    const checkbox = screen.getByLabelText(`toggle-${todo.id}`);
    const deleteBtn = screen.getByLabelText(`delete-${todo.id}`);

    fireEvent.click(text);
    fireEvent.click(checkbox);
    fireEvent.click(deleteBtn);
    expect(onStartEditing).toHaveBeenCalled();
    expect(onToggle).toHaveBeenCalled();
    expect(onDelete).toHaveBeenCalled();
  });

  it("Вызывает onAfterStartEditing при маунте input", async () => {
    const todo = getTodo();
    const onAfterStartEditing = vi.fn((el) => el?.focus());

    render(
      <Item
        {...todo}
        isEditing={true}
        onChange={() => {}}
        onToggle={() => {}}
        onDelete={() => {}}
        onStartEditing={() => {}}
        onEdit={() => {}}
        onAfterStartEditing={onAfterStartEditing}
      />
    );

    const input = screen.getByLabelText(`text-${todo.id}`);
    expect(onAfterStartEditing).toHaveBeenCalled();
    await waitFor(() => {
      expect(document.activeElement).toBe(input);
    });
  });
});
