export type TodoEntity = {
  id: Number;
  text: String;
  complete: Boolean;
};

export type TodoCollection = TodoEntity[] | undefined;
