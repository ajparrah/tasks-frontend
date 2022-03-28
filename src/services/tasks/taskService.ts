import { TASK_API_URL } from '../../globals/api/taskAPI';
import { Task } from './types/TaskTypes';

export default class TaskService {
  private route: string;
  constructor() {
    this.route = `${TASK_API_URL}/tasks`;
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
}
