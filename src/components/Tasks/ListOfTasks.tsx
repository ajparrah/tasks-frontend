import { FC } from 'react';
import { selectTask } from '../../globals/slices/taskReducer';
import { useAppSelector } from '../../hooks/useStore';
import TaskService from '../../services/tasks/taskService';
import ListOfTaskEmpty from './ListOfTaskEmpty';
import TaskItem from './TaskItem';

interface IListOfTasksProps {}

const ListOfTasks: FC<IListOfTasksProps> = () => {
  const tasks = useAppSelector(selectTask);
  return (
    <div className="w-full flex flex-col px-4 md:px-0 space-y-4 mb-4">
      {tasks.length !== 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            description={task.description}
            expirationDate={new Date(task.expirationDate)}
            completed={task.completed}
            status={TaskService.getStatusOfTask(task)}
          />
        ))
      ) : (
        <ListOfTaskEmpty />
      )}
    </div>
  );
};

export default ListOfTasks;
