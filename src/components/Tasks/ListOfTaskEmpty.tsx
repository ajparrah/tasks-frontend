import { FC } from 'react';
import EmptyIcon from '../Icons/EmptyIcon';

interface IListOfTaskEmptyProps {}

const ListOfTaskEmpty: FC<IListOfTaskEmptyProps> = () => {
  return (
    <div className="flex flex-col items-center my-4">
      <EmptyIcon width={50} height={50} className="text-highlight-soft mb-4" />
      <h3>Aun no tienes cosas por hacer en tu lista</h3>
      <h4>Vamos, agrega la primera!</h4>
    </div>
  );
};

export default ListOfTaskEmpty;
