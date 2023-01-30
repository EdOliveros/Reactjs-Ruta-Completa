import React from 'react';
import {TodoContext} from '../TodoContext'
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    };

  return (
    <form className='form' onSubmit={onSubmit}>
        <label>Add New Task!</label>
        <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder='Cortar la cebolla para el almuerzo'
        />
        <div className='container-button'>
            <button
                type='button'
                onClick={onCancel}
            >
                Cancelar
            </button>
            <button
                type='submit'
            >
                Añadir
            </button>
        </div>    
    </form>
  );
};

export {TodoForm};