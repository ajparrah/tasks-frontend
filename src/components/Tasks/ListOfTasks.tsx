import { FC } from 'react';
import TaskItem from './TaskItem';

interface IListOfTasksProps {}

const ListOfTasks: FC<IListOfTasksProps> = () => {
  return (
    <div className="w-full flex flex-col space-y-4 mb-4">
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <TaskItem key={index} />
      ))}
    </div>
  );
};

export default ListOfTasks;
