import { FC, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  id: 'modals';
}

const Portal: FC<IPortalProps> = ({ children, id = 'modals' }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.querySelector(`#${id}`) as Element)
    : null;
};

export default Portal;
