import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../services/tasks/types/TaskTypes';
import { RootState } from '../store';

export interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;

export const selectTask = (state: RootState) => state.task.tasks;

export default taskSlice.reducer;
