import { FC } from 'react';
import classNames from 'classnames';

interface IErrorMessageProps {
  message?: string;
  className?: string;
}

const ErrorMessage: FC<IErrorMessageProps> = ({ message, className }) => {
  const baseStyles = ['text-sm', 'text-red-600'];
  const showErrorMessage = {
    invisible: !message,
  };
  return (
    <p className={classNames(baseStyles, showErrorMessage, className)}>
      {message || 'Ha ocurrido un error'}
    </p>
  );
};

export default ErrorMessage;
