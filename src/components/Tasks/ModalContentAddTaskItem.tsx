import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../Buttons/Button';
import { addTask } from '../../services/tasks/schemas/taskSchemas';
import InputWithLabel from '../Input/InputWithLabel';
import TextareaWithCharacterCounter from '../Input/TextareaWithCharacterCounter';
import { format } from 'date-fns';

interface IAddTaskFormData {
  expirationDate: Date;
  description: string;
}

interface IModalContentAddTaskItem {
  onClose: () => void;
}

const ModalContentAddTaskItem: FC<IModalContentAddTaskItem> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    watch,
  } = useForm<IAddTaskFormData>({
    resolver: yupResolver(addTask),
    mode: 'onChange',
  });

  const handleAddTask = async (data: IAddTaskFormData) => {
    console.log('Task', data);
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
          className="basis-1/2"
          disabled={!isValid}
          onClick={handleSubmit(handleAddTask)}
        />
      </div>
    </>
  );
};

export default ModalContentAddTaskItem;
