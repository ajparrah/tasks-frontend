import { format } from 'date-fns';
import { ChangeEvent, FC } from 'react';
import {
  addSelectedTask,
  removeSelectedTask,
} from '../../globals/slices/taskReducer';
import { useAppDispatch } from '../../hooks/useStore';
import { TASK_STATUS } from '../../services/tasks/enums/TaskEnums';
import CheckIcon from '../Icons/CheckIcon';
import WatchIcon from '../Icons/WatchIcon';
import XIcon from '../Icons/XIcon';

interface ITaskItemProps {
  id: number;
  description: string;
  expirationDate: Date;
  status: TASK_STATUS;
  completed: boolean;
}

const TaskItem: FC<ITaskItemProps> = ({
  id,
  description,
  expirationDate,
  status,
  completed,
}) => {
  const dispatch = useAppDispatch();
  const handleSelectTask = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(addSelectedTask(id));
    } else {
      dispatch(removeSelectedTask(id));
    }
  };

  return (
    <div className="w-full flex flex-wrap md:flex-nowrap justify-around items-center px-4 lg:px-10 py-6 md:py-10 gap-x-3 gap-y-3 md:gap-y-0 bg-main border border-stroke">
      <input
        type="checkbox"
        className="w-6 h-6 appearance-none bg-main border border-black rounded-md cursor-pointer checked:border-transparent checked:bg-highlight-soft focus:outline-none focus:ring-0 text-highlight-soft disabled:cursor-default"
        onChange={handleSelectTask}
        checked={completed ? false : undefined}
        disabled={completed}
      />
      <p className="basis-4/5 md:basis-1/2">{description}</p>
      <input
        type="date"
        className="border border-stroke bg-gray-light text-base p-3 focus:outline-none focus:ring-1 focus:ring-highlight-soft focus:border-highlight-soft"
        title="Ingresa la fecha de vencimiento"
        defaultValue={format(expirationDate, 'yyyy-MM-dd')}
        disabled={completed}
      />
      {status === TASK_STATUS.expired && (
        <XIcon
          width={70}
          height={70}
          className="text-secondary"
          title="Vencida"
        />
      )}
      {status === TASK_STATUS.soonToExpire && (
        <WatchIcon
          width={70}
          height={70}
          className="text-tertiary"
          title="Pronto a vencer"
        />
      )}
      {status === TASK_STATUS.completed && (
        <CheckIcon
          width={70}
          height={70}
          className="text-green-500"
          title="Completada"
        />
      )}
    </div>
  );
};

export default TaskItem;
