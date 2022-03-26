import { FunctionComponent } from 'react';
import ContainerModal from './ContainerModal';
import classNames from 'classnames';
import CloseIcon from '../Icons/CloseIcon';
import Portal from '../Utils/Portal';

interface IModalProps {
  open: boolean;
  onClose: () => void;
}

const Modal: FunctionComponent<IModalProps> = ({ children, open, onClose }) => {
  const modalStyles = [
    'relative',
    'w-3/5',
    'max-w-full',
    'p-7',
    'rounded-3xl',
    'bg-white',
    'z-20',
  ];
  return (
    <Portal id="modals">
      <ContainerModal open={open}>
        <div className={classNames(modalStyles)}>
          <div
            className="absolute right-7 top-7 cursor-pointer z-20"
            onClick={onClose}>
            <CloseIcon width={24} height={24} className="text-stroke" />
          </div>

          {children}
        </div>
      </ContainerModal>
    </Portal>
  );
};

export default Modal;
