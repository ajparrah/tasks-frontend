import { FC } from 'react';
import classNames from 'classnames';
import { IIconProps } from '../../globals/interfaces/IIconProps';

interface ICheckIconProps extends IIconProps {
  title: string;
}

const CheckIcon: FC<ICheckIconProps> = ({
  width,
  height,
  className,
  title,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1792 1792"
      className={classNames('fill-current', className)}>
      <title>{title}</title>
      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
    </svg>
  );
};

export default CheckIcon;
