import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ScheduleState {
  goals: Goals[];
  todos: Todos[];
  modals: Modals;
}
export interface Goals {
  id: number;
  title: string;
}

export interface Todos {
  goalId: string;
  keyId: number;
  title: string;
  done: boolean;
}

export interface Modals {
  isOpen: boolean;
}

export interface GoalState {
  goals: Goals[];
}

export interface TodoState {
  todos: Todos[];
}

export interface AddTodoPayload {
  goalId: string;
  title: string;
}

export interface SuccessTodo {
  keyId: number;
}

const initialState: ScheduleState = {
  goals: [
    {
      id: 1,
      title: "할 일",
    },
    {
      id: 2,
      title: "리액트",
    },
    {
      id: 3,
      title: "Machine Learning",
    },
  ],
  todos: [
    { goalId: "할 일", keyId: 123, title: "편지 쓰기", done: false },
    { goalId: "할 일", keyId: 543, title: "동아리 감사 서류", done: false },
    { goalId: "할 일", keyId: 1241423, title: "활동 내역서 제출", done: true },
    { goalId: "리액트", keyId: 4563, title: "유데미 강의 듣기", done: false },
    {
      goalId: "Machine Learning",
      keyId: 124134,
      title: "코세라 강의 듣기",
      done: false,
    },
  ],
  modals: {
    isOpen: false,
  },
};

const ScheduleSlice = createSlice({
  name: "Schedule",
  initialState,

  reducers: {
    addGoal: (state, action: PayloadAction<string>) => {
      state.goals = [...state.goals, { id: Date.now(), title: action.payload }];
    },
    addTodo: (state, action: PayloadAction<AddTodoPayload>) => {
      state.todos = [
        ...state.todos,
        {
          goalId: action.payload.goalId,
          keyId: Date.now(),
          title: action.payload.title,
          done: false,
        },
      ];
    },
    deleteGoal: (state, action: PayloadAction<number>) => {
      state.goals = state.goals.filter(
        (goal: Goals) => goal.id !== action.payload
      );
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(
        (todo: Todos) => todo.keyId !== action.payload
      );
    },
    changeTodoProgress: (state, action: PayloadAction<SuccessTodo>) => {
      state.todos = state.todos.map((todo: Todos) => {
        if (todo.keyId === action.payload.keyId) {
          todo.done = !todo.done;
        }
        return todo;
      });
    },
    changeModalState: (state, action: PayloadAction<boolean>) => {
      state.modals = { ...state.modals, isOpen: action.payload };
    },
  },
});

export const store = configureStore({
  reducer: {
    getSchedule: ScheduleSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const {
  addGoal,
  addTodo,
  deleteGoal,
  deleteTodo,
  changeTodoProgress,
  changeModalState,
} = ScheduleSlice.actions;
