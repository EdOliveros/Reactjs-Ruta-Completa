import './CreteTodoButton.css'

function CreateTodoButton() {
    return (
        <button onClick={(event) => {
            console.log('click!')
            console.log(event)
            console.log(event.target)
        }}>
            +
        </button>
    );
}

export { CreateTodoButton }