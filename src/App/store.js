import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../feacture/todo/todos'
export const store=configureStore({
  reducer:todoReducer
});