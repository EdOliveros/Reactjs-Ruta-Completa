import React from 'react';
import { TodoContext } from '../TodoContext'
import './CreteTodoButton.css'

function CreateTodoButton() {

    const {
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <button id='button' onClick={(event) => {
            // openModal ? 
            // setOpenModal(false) :
            // setOpenModal(true) 

            setOpenModal(state => !state)

            console.log('escuchando')
        }}>
            +
        </button>
    );
}

export { CreateTodoButton }