import { FC } from 'react';
import classNames from 'classnames';
import { IIconProps } from '../../globals/interfaces/IIconProps';

interface IEmptyIconProps extends IIconProps {}

const EmptyIcon: FC<IEmptyIconProps> = ({ width, height, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={classNames('fill-current', className)}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 3V8H19"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 21H18C18.5523 21 19 20.5523 19 20V7.41421C19 7.149 18.8946 6.89464 18.7071 6.70711L15.2929 3.29289C15.1054 3.10536 14.851 3 14.5858 3H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21Z"
      />
    </svg>
  );
};

export default EmptyIcon;
