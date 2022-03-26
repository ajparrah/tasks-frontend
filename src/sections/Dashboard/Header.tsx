import { FC } from 'react';

const Header: FC = () => {
  return (
    <div className="w-full flex justify-between items-center mb-4">
      <h1 className="font-bold">Cosas por hacer</h1>
      <h3>Hoy: 14/08/2019</h3>
    </div>
  );
};

export default Header;
