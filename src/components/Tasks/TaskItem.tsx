import { FC } from 'react';

interface ITaskItemProps {}

const TaskItem: FC<ITaskItemProps> = () => {
  return (
    <div className="bg-main border border-stroke flex items-center px-10 py-10">
      <h4>Tarea</h4>
    </div>
  );
};

export default TaskItem;
