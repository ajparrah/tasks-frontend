import { FC } from 'react';
import CheckIcon from '../Icons/CheckIcon';
import WatchIcon from '../Icons/WatchIcon';
import XIcon from '../Icons/XIcon';

interface ITaskItemProps {}

const TaskItem: FC<ITaskItemProps> = () => {
  return (
    <div className="w-full flex justify-around items-center px-10 py-10 bg-main border border-stroke">
      <input
        type="checkbox"
        className="w-6 h-6 appearance-none bg-main border border-black rounded-md cursor-pointer checked:border-transparent checked:bg-highlight-soft focus:outline-none focus:ring-0 text-highlight-soft"
      />
      <p className="basis-1/2">
        Juntarse en el barcon el grupo de la universidad
      </p>
      <input
        type="date"
        className="border border-stroke bg-gray-light text-base p-3 focus:outline-none focus:ring-1 focus:ring-highlight-soft focus:border-highlight-soft"
        title="Ingresa la fecha de vencimiento"
      />
      <CheckIcon
        width={70}
        height={70}
        className="text-green-500"
        title="Completada"
      />
      {/* <WatchIcon
        width={70}
        height={70}
        className="text-tertiary"
        title="Pronto a vencer"
      />
      <XIcon
        width={70}
        height={70}
        className="text-secondary"
        title="Vencida"
      /> */}
    </div>
  );
};

export default TaskItem;
