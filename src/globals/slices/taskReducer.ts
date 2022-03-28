import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import TaskService from '../../services/tasks/taskService';
import { Task } from '../../services/tasks/types/TaskTypes';
import { RootState } from '../store';

export interface TaskState {
  tasks: Task[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  taskSelected: number[];
}

const initialState: TaskState = {
  tasks: [],
  status: 'idle',
  error: null,
  taskSelected: [],
};

export const addTask = createAsyncThunk<
  Task,
  Pick<Task, 'description' | 'expirationDate'>
>(
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

export const getAllTask = createAsyncThunk<Task[]>(
  'tasks/fetchGetAllTask',
  async (): Promise<Task[]> => {
    const insTaskService = new TaskService();
    const allTasks = await insTaskService.getAll();
    return allTasks;
  },
);

export const markTaskAsCompleted = createAsyncThunk<
  Task[],
  void,
  { state: RootState }
>(
  'tasks/fetchMarkTaskAsCompleted',
  async (arg, { getState }): Promise<Task[]> => {
    const insTaskService = new TaskService();
    const { task } = getState();
    const { tasks, taskSelected } = task;
    const updatedTasks = await Promise.allSettled(
      taskSelected.map(async (taskId) => {
        const taskFound = tasks.find((task) => task.id === taskId);
        if (taskFound) {
          const taskUpdated = await insTaskService.update({
            ...taskFound,
            id: taskId,
            completed: true,
          });
          return taskUpdated;
        }
        return undefined;
      }),
    );
    const tasksUpdatedSuccessfully = updatedTasks
      .map((taskUpdated) => {
        if (taskUpdated.status === 'fulfilled') {
          return taskUpdated.value;
        }
      })
      .filter((taskUpdated) => taskUpdated !== undefined) as Task[];
    return tasksUpdatedSuccessfully;
  },
);

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addSelectedTask: (state, action: PayloadAction<number>) => {
      if (!state.taskSelected.includes(action.payload)) {
        state.taskSelected.push(action.payload);
      }
    },
    removeSelectedTask: (state, action: PayloadAction<number>) => {
      if (state.taskSelected.includes(action.payload)) {
        state.taskSelected = state.taskSelected.filter(
          (taskSelected) => taskSelected !== action.payload,
        );
      }
    },
  },
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
      })
      .addCase(markTaskAsCompleted.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(markTaskAsCompleted.fulfilled, (state, action) => {
        state.status = 'idle';
        const taskNoUpdated = state.tasks.filter(
          (task) => !state.taskSelected.includes(task.id),
        );
        state.tasks = [...taskNoUpdated, ...action.payload];
        state.taskSelected = [];
      });
  },
});

export const { addSelectedTask, removeSelectedTask } = taskSlice.actions;

export const selectTask = (state: RootState) => state.task.tasks;
export const selectTaskSelected = (state: RootState) => state.task.taskSelected;

export default taskSlice.reducer;
