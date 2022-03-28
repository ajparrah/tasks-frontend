import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import TaskService from '../../services/tasks/taskService';
import { Task } from '../../services/tasks/types/TaskTypes';
import { RootState } from '../store';

export interface TaskState {
  tasks: Task[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  status: 'idle',
  error: null,
};

export const addTask = createAsyncThunk(
  'tasks/fetchAddTask',
  async (
    taskToAdd: Pick<Task, 'description' | 'expirationDate'>,
  ): Promise<Task> => {
    const insTaskService = new TaskService();
    const taskAdded = await insTaskService.add(
      taskToAdd.description,
      taskToAdd.expirationDate,
    );
    return taskAdded;
  },
);

export const getAllTask = createAsyncThunk(
  'tasks/fetchGetAllTask',
  async (): Promise<Task[]> => {
    const insTaskService = new TaskService();
    const allTasks = await insTaskService.getAll();
    return allTasks;
  },
);

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.status = 'idle';
        state.tasks.push(action.payload);
      })
      .addCase(getAllTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllTask.fulfilled, (state, action) => {
        state.status = 'idle';
        state.tasks = action.payload;
      });
  },
});

// export const {} = taskSlice.actions;

export const selectTask = (state: RootState) => state.task.tasks;

export default taskSlice.reducer;
