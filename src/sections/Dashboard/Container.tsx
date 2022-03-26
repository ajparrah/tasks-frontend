import { FC } from 'react';

const Container: FC = ({ children }) => {
  return (
    <div className="w-full flex justify-center py-6">
      <div className="w-full md:w-3/4 xl:w-3/5 2xl:w-2/5 flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};

export default Container;
