import { FunctionComponent } from 'react';
import { IIconProps } from '../../globals/interfaces/IIconProps';
import classNames from 'classnames';

interface ICloseIconProps extends IIconProps {}

const CloseIcon: FunctionComponent<ICloseIconProps> = ({
  width,
  height,
  className,
}) => {
  return (
    <svg
      width={width.toString()}
      height={height.toString()}
      viewBox="0 0 22 22"
      className={classNames('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M12.2898 11.0057L21.7203 1.57523C22.0843 1.2237 22.0944 0.643703 21.7429 0.279726C21.3914 -0.0842516 20.8114 -0.0943442 20.4474 0.257178C20.4398 0.264533 20.4322 0.272049 20.4248 0.279726L10.9943 9.71022L1.56377 0.279672C1.1998 -0.0718506 0.619795 -0.061758 0.268272 0.302219C-0.074661 0.657285 -0.074661 1.22016 0.268272 1.57523L9.69878 11.0057L0.268272 20.4362C-0.0894241 20.794 -0.0894241 21.374 0.268272 21.7317C0.626022 22.0894 1.20602 22.0894 1.56377 21.7317L10.9943 12.3012L20.4248 21.7317C20.7888 22.0832 21.3688 22.0731 21.7203 21.7092C22.0632 21.3541 22.0632 20.7912 21.7203 20.4362L12.2898 11.0057Z" />
    </svg>
  );
};

export default CloseIcon;
