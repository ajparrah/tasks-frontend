import { FC, useState } from 'react';
import Modal from '../Modal/Modal';

interface IAddTaskItemProps {}

const AddTaskItem: FC<IAddTaskItemProps> = () => {
  const [showModalToAddTask, setShowModalToAddTask] = useState(false);
  return (
    <>
      <div
        className="w-full bg-main border border-stroke flex justify-center items-center py-8 cursor-pointer hover:bg-gray-50"
        onClick={() => setShowModalToAddTask(true)}>
        <span className="text-center font-bold text-6xl">+</span>
      </div>
      <Modal
        open={showModalToAddTask}
        onClose={() => setShowModalToAddTask(false)}>
        <h1>Agregar nueva tarea</h1>
      </Modal>
    </>
  );
};

export default AddTaskItem;
