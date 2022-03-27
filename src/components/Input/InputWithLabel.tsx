import classNames from 'classnames';
import React, { forwardRef } from 'react';
import ErrorMessage from './ErrorMessage';

interface IInputWithLabelProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  register: any;
  registerLabel: string;
  errorMessage?: string;
  containerClassName?: string;
}

const InputWithLabel = forwardRef<HTMLInputElement, IInputWithLabelProps>(
  (
    {
      label,
      register,
      registerLabel,
      errorMessage,
      containerClassName,
      className,
      ...extended
    },
    inputRef,
  ) => {
    const propsInjected = { ...register(registerLabel), ...extended };
    const inputStyles = [
      'text-base',
      'p-3',
      'border-1',
      'border-highlight-soft',
      'focus:outline-none',
      'focus:ring-1',
      'focus:ring-highlight-soft',
      'focus:border-transparent',
    ];

    return (
      <>
        <div className={classNames('flex', 'flex-col', containerClassName)}>
          <label htmlFor={registerLabel}>{label}</label>
          <input
            ref={inputRef}
            {...propsInjected}
            id={registerLabel}
            className={classNames(inputStyles, className)}
          />
          {errorMessage && (
            <ErrorMessage message={errorMessage} className="mt-1" />
          )}
        </div>
      </>
    );
  },
);

InputWithLabel.displayName = 'InputWithLabel';

export default InputWithLabel;
