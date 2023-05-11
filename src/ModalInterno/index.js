import './ModalInterno.css'
import React from 'react'
import { TodoContext } from '../TodoContext'

function ModalInterno() {

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    
    const onCancel = () => {
        setOpenModal(false)
    }
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <>
            <form 
                onSubmit={onSubmit}
                className="formulario-container"
            >
                <textarea 
                    className="input" 
                    placeholder='Cortar cebolla'
                    value={newTodoValue}
                    onChange={onChange}
                />

                <div className="buttons-container">
                    <button 
                        type='button'
                        className="button-cerrar"
                        onClick={onCancel}
                    >
                            Cerrar
                    </button>
                    <button 
                        type='submit'
                        className="button-anyadir"
                    >
                            Añadir
                    </button>
                </div>
            </form>
        </>
    );
}

export { ModalInterno }