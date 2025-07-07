export type FilterValueType = "all" | "active" | "completed";

export type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};

export type FilterType = {
  title: string;
  value: FilterValueType;
};
