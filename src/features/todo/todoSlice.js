import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a To-Do App" },
    { id: 3, text: "Explore Redux Toolkit" },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
