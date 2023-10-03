import React, {useState} from 'react'
import i18n from '../components/locales/i18n';
import { useTranslation } from 'react-i18next';


export const TodoForm = ({addTodo}) => {
  const { t } = useTranslation();

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) { addTodo(value); setValue('');
    }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} 
    className="todo-input" 
    placeholder={t('app.placeholder')}
    />
    <button type="submit" className='todo-btn'>{t('app.addButton')}</button>

    <div>
        <button className='todo-btn' onClick={() => i18n.changeLanguage('en')}>English</button>
        <button className='todo-btn' onClick={() => i18n.changeLanguage('es')}>Español</button>
      </div>
  </form>
  )
}
