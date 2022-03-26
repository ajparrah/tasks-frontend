import { FC } from 'react';
import classNames from 'classnames';
import { IIconProps } from '../../globals/interfaces/IIconProps';

interface IFilterIconProps extends IIconProps {}

const FilterIcon: FC<IFilterIconProps> = ({ width, height, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1792 1792"
      className={classNames('fill-current', className)}>
      <path d="M1595 295q17 41-14 70l-493 493v742q0 42-39 59-13 5-25 5-27 0-45-19l-256-256q-19-19-19-45v-486l-493-493q-31-29-14-70 17-39 59-39h1280q42 0 59 39z" />
    </svg>
  );
};

export default FilterIcon;
