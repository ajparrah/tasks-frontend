import { FC } from 'react';
import FilterIcon from '../../components/Icons/FilterIcon';
import Button from '../../components/Buttons/Button';

const Actions: FC = () => {
  return (
    <div className="w-full flex justify-between items-center mb-4">
      <Button
        label="Liberar Seleccionadas"
        onClick={() => console.log('Liberar seleccionadas')}
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
