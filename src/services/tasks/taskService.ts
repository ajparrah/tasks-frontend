import { isPast, isToday } from 'date-fns';
import { TASK_API_URL } from '../../globals/api/taskAPI';
import { TASK_STATUS } from './enums/TaskEnums';
import { Task } from './types/TaskTypes';

export default class TaskService {
  private route: string;
  constructor() {
    this.route = `${TASK_API_URL}/tasks`;
  }

  public async getAll(): Promise<Task[]> {
    try {
      const url = this.route;
      const response = await fetch(url, {
        method: 'GET',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Ha ocurrido un error al tratar de obtener las tareas');
    }
  }

  public async add(description: string, expirationDate: string): Promise<Task> {
    try {
      const url = this.route;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description,
          expirationDate: expirationDate,
          createdAt: new Date().toISOString(),
          completed: false,
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Ha ocurrido un error al tratar de agregar la tarea');
    }
  }

  public async update(taskUpdated: Task): Promise<Task> {
    try {
      const url = `${this.route}/${taskUpdated.id}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskUpdated),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Ha ocurrido un error al tratar de editar la tarea');
    }
  }

  //#region Utilities
  public static getStatusOfTask(task: Task): TASK_STATUS {
    if (task.completed) return TASK_STATUS.completed;
    const expirationDateParsed = new Date(task.expirationDate);

    const isSoonToExpire = isToday(expirationDateParsed);
    if (isSoonToExpire) return TASK_STATUS.soonToExpire;

    const isExpired = isPast(expirationDateParsed);
    if (isExpired) return TASK_STATUS.expired;

    return TASK_STATUS.riskFree;
  }
  //#endregion
}
