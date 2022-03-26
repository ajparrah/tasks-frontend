import { FC } from 'react';
import classNames from 'classnames';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isLoading?: boolean;
}

const Button: FC<IButtonProps> = ({
  label,
  isLoading,
  disabled,
  ...extended
}) => {
  const isDisabled = isLoading || disabled;

  const disabledStyles = {
    'cursor-default': isDisabled,
    'bg-gray-light': isDisabled,
    'text-gray': isDisabled,
  };
  return (
    <button
      className={classNames(
        'py-2',
        'px-10',
        'text-center',
        'bg-gray-300',
        'hover:bg-gray-200',
        'transition',
        'ease-in-out',
        'duration-300',
        disabledStyles,
      )}
      {...extended}>
      {isLoading ? 'Cargando...' : label}
    </button>
  );
};

export default Button;
