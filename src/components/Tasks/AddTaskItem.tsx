import { FC, useState } from 'react';
import Button from '../Buttons/Button';
import Modal from '../Modal/Modal';
import ModalContentAddTaskItem from './ModalContentAddTaskItem';

interface IAddTaskItemProps {}

const AddTaskItem: FC<IAddTaskItemProps> = () => {
  const [showModalToAddTask, setShowModalToAddTask] = useState(false);

  const handleHideModalToAddTask = () => {
    setShowModalToAddTask(false);
  };
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
        <ModalContentAddTaskItem onClose={handleHideModalToAddTask} />
      </Modal>
    </>
  );
};

export default AddTaskItem;
