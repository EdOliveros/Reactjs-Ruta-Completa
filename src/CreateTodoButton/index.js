import './CreteTodoButton.css'

function CreateTodoButton({
    setOpenModal
}) {
    return (
        <button id='button' onClick={(event) => {
            setOpenModal(state => !state)
            console.log('escuchando')
            }}>
            +
          </button>
    );
}

export { CreateTodoButton }