import { FC } from 'react';
import AddTaskItem from '../../components/Tasks/AddTaskItem';
import ListOfTasks from '../../components/Tasks/ListOfTasks';

const Tasks: FC = () => {
  return (
    <>
      <ListOfTasks />
      <AddTaskItem />
    </>
  );
};

export default Tasks;
