import { forwardRef } from 'react';
import ErrorMessage from './ErrorMessage';
import classNames from 'classnames';
import { UseFormWatch } from 'react-hook-form';

interface ITextareaWithCharacterCounterProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
  maxLength: number;
  register: any;
  registerLabel: string;
  watch: UseFormWatch<any>;
  errorMessage?: string;
  containerClassName?: string;
}

const TextareaWithCharacterCounter = forwardRef<
  HTMLTextAreaElement,
  ITextareaWithCharacterCounterProps
>(
  (
    {
      label,
      maxLength,
      register,
      registerLabel,
      watch,
      errorMessage,
      containerClassName,
      ...extended
    },
    textAreaRef,
  ) => {
    const propsInjected = { ...register(registerLabel), ...extended };
    const count = watch(registerLabel)?.length || 0;

    return (
      <div
        className={classNames(
          'w-full',
          'flex',
          'flex-col',
          'justify-center',
          containerClassName,
        )}>
        <label htmlFor={registerLabel}>{label}</label>
        <textarea
          className="bg-gray-light w-full text-base p-3 border-1 border-highlight-soft rounded-lg focus:outline-none focus:ring-1 focus:ring-highlight-soft focus:border-transparent"
          maxLength={maxLength}
          ref={textAreaRef}
          {...propsInjected}
        />
        <p className="text-sm mt-1 self-end">
          {count}/{maxLength}
        </p>
        <ErrorMessage message={errorMessage} className="mt-1" />
      </div>
    );
  },
);

TextareaWithCharacterCounter.displayName = 'TextareaWithCharacterCounter';

export default TextareaWithCharacterCounter;
