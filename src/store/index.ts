import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Todos {
  id: number;
  title: string;
}

export interface TodoState {
  todos: Todos[];
}

const initialState: TodoState = {
  todos: [
    { id: 1, title: "할 일" },
    { id: 2, title: "리액트" },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [...state.todos, { id: Date.now(), title: action.payload }];
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(
        (todo: Todos) => todo.id !== action.payload
      );
    },
  },
});

export const store = configureStore({
  reducer: {
    getTodos: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { addTodo, deleteTodo } = todoSlice.actions;
