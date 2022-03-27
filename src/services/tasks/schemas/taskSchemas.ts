import { startOfToday } from 'date-fns';
import * as yup from 'yup';

export const addTask = yup.object().shape({
  expirationDate: yup
    .date()
    .min(startOfToday(), 'La fecha de vencimiento ingresada no es válida')
    .required(
      'Debes ingresar la fecha de vencimiento de la tarea, es obligatorio',
    ),
  description: yup
    .string()
    .required('Debes ingresar la descripción de la tarea que debes realizar'),
});
