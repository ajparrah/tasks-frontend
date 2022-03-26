import { FC } from 'react';

interface IAddTaskItemProps {}

const AddTaskItem: FC<IAddTaskItemProps> = () => {
  return (
    <div className="w-full bg-main border border-stroke flex justify-center items-center py-8 cursor-pointer hover:bg-gray-50">
      <span className="text-center font-bold text-6xl">+</span>
    </div>
  );
};

export default AddTaskItem;
