import React, {useState} from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../components/locales/i18n';


export const EditTodoForm = ({editTodo, task}) => {
  const { t } = useTranslation();

    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>{t('app.addButton')}</button>
  </form>
  )
}
