import { FC } from 'react';
import FilterIcon from '../../components/Icons/FilterIcon';
import Button from '../../components/Buttons/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import {
  selectTaskSelected,
  markTaskAsCompleted,
} from '../../globals/slices/taskReducer';

const Actions: FC = () => {
  const taskSelected = useAppSelector(selectTaskSelected);
  const dispatch = useAppDispatch();
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center mb-4 gap-y-2 xl:gap-y-0">
      <Button
        label="Liberar Seleccionadas"
        onClick={() => dispatch(markTaskAsCompleted())}
        disabled={taskSelected.length === 0}
        className="order-2 md:order-none"
      />
      <div
        className="flex items-center hover:opacity-70 transition ease-in-out duration-300 cursor-pointer"
        onClick={() => console.log('Ordenar')}>
        <FilterIcon
          width={20}
          height={20}
          className="text-highlight-soft mr-2"
        />
        <p>Ordenar</p>
      </div>
    </div>
  );
};

export default Actions;
