import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../Buttons/Button';
import { addTaskSchema } from '../../services/tasks/schemas/taskSchemas';
import InputWithLabel from '../Input/InputWithLabel';
import TextareaWithCharacterCounter from '../Input/TextareaWithCharacterCounter';
import { format } from 'date-fns';
import classNames from 'classnames';
import { useAppDispatch } from '../../hooks/useStore';
import { addTask } from '../../globals/slices/taskReducer';

interface IAddTaskFormData {
  expirationDate: Date;
  description: string;
  completed: boolean;
}

interface IModalContentAddTaskItem {
  onClose: () => void;
}

const ModalContentAddTaskItem: FC<IModalContentAddTaskItem> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    watch,
  } = useForm<IAddTaskFormData>({
    resolver: yupResolver(addTaskSchema),
    mode: 'onChange',
  });

  const handleAddTask = async (data: IAddTaskFormData) => {
    const { description, expirationDate } = data;
    dispatch(
      addTask({
        description,
        expirationDate: expirationDate.toISOString(),
      }),
    );
    reset();
    onClose();
  };

  const buttonToAddStyles = {
    'pointer-events-none': !isValid,
  };

  return (
    <>
      <h1>Agregar nueva tarea</h1>
      <p className="mb-4">Debes completar los datos solicitados</p>
      <form className="w-full flex flex-col">
        <InputWithLabel
          label="Fecha de vencimiento"
          type="date"
          register={register}
          registerLabel="expirationDate"
          errorMessage={errors.expirationDate?.message}
          className="w-1/5"
          containerClassName="mb-2"
          min={format(new Date(), 'yyyy-MM-dd')}
        />
        <TextareaWithCharacterCounter
          label="Descripción:"
          register={register}
          registerLabel="description"
          watch={watch}
          maxLength={140}
          rows={4}
          errorMessage={errors.description?.message}
          containerClassName="mb-2"
        />
      </form>
      <div className="w-full flex justify-between">
        <Button
          label="Cancelar"
          className="basis-1/2 mr-2"
          onClick={() => {
            reset();
            onClose();
          }}
        />
        <Button
          label="Agregar"
          className={classNames('basis-1/2', buttonToAddStyles)}
          disabled={!isValid}
          onClick={handleSubmit(handleAddTask)}
        />
      </div>
    </>
  );
};

export default ModalContentAddTaskItem;
