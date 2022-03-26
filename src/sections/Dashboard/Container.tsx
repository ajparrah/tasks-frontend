import { FC } from 'react';

const Container: FC = ({ children }) => {
  return (
    <div className="w-full flex justify-center py-6">
      <div className="w-2/5 flex flex-col items-center">{children}</div>
    </div>
  );
};

export default Container;
