import { FunctionComponent } from 'react';
import classNames from 'classnames';

interface IContainerModalProps {
  open: boolean;
}

const ContainerModal: FunctionComponent<IContainerModalProps> = ({
  children,
  open,
}) => {
  const showModal = {
    flex: open,
    'justify-center': open,
    'items-center': open,
    hidden: !open,
  };
  return (
    <div
      className={classNames(
        'fixed',
        'w-full',
        'h-full',
        'top-0',
        'left-0',
        'right-0',
        'bottom-0',
        'bg-black',
        'bg-opacity-20',
        'z-10',
        'overflow-auto',
        'py-10',
        showModal,
      )}>
      {children}
    </div>
  );
};

export default ContainerModal;
