import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Adder from "./Adder";

describe("Adder", () => {
  it("Вызывает onChange и onSubmit", () => {
    const onChange = vi.fn();
    const onSubmit = vi.fn((e) => e.preventDefault());

    render(<Adder value="" onChange={onChange} onSubmit={onSubmit} />);

    const baseName = "Add todo";

    const form = screen.getByLabelText(`${baseName} form`);
    const input = screen.getByLabelText(`${baseName} input`);

    fireEvent.change(input, { target: { value: "1" } });
    fireEvent.submit(form);

    expect(onChange).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalled();
  });
});
