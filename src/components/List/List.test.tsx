import { describe, beforeEach, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import List from "./ListContainer";

describe("List", () => {
  let input: HTMLElement;
  let button: HTMLElement;

  const addTask = (text: string) => {
    input = screen.getByLabelText("Add todo input");
    button = screen.getByLabelText("Add todo button");

    fireEvent.change(input, { target: { value: text } });
    fireEvent.click(button);
  };

  beforeEach(() => {
    render(<List />);
    addTask("1");
    addTask("2");
  });

  it("Добавление пустой задачи", () => {
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(button);

    const todos = screen.getAllByLabelText("todo");
    expect(todos.length).toBe(2);
  });

  it("Добавление задач", () => {
    const todos = screen.getAllByLabelText("todo");
    expect(todos.length).toBe(2);
  });

  it("Удаление задач", () => {
    const deleteButton = screen.getAllByLabelText(/delete/)[0];
    fireEvent.click(deleteButton);

    const todos = screen.getAllByLabelText("todo");
    expect(todos.length).toBe(1);
  });

  it("Изменение счётчика", async () => {
    const counter = screen.getByLabelText("todos counter");
    expect(counter.textContent).toBe("2 items left");

    const checkboxes = await screen.findAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);

    expect(counter.textContent).toBe("1 items left");
  });

  it("Фильтрование", async () => {
    const checkboxes = await screen.findAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);

    fireEvent.click(screen.getByText("Active"));
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.queryByText("1")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Completed"));
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.queryByText("2")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("All"));
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("Удаление законченных", async () => {
    const checkboxes = await screen.findAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);

    const clearBtn = screen.getByLabelText("Delete completed");
    fireEvent.click(clearBtn);

    expect(screen.queryByText("1")).not.toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
