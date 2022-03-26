import { FC } from 'react';
import { format } from 'date-fns';

const Header: FC = () => {
  return (
    <div className="w-full flex justify-between items-center mb-4">
      <h1 className="font-bold">Cosas por hacer</h1>
      <h3>Hoy: {format(new Date(), 'dd/MM/yyyy')}</h3>
    </div>
  );
};

export default Header;
