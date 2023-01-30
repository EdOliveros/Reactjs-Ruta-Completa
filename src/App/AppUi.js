import React from 'react';
import { TodoContext } from '../TodoContext'; 
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Count } from '../Count';
import {Modal} from '../Modal/index'
import { TodoForm } from '../TodoForm';


function AppUi() {
  const {
    error, 
    loading, 
    searchedTodos, 
    completedTodo, 
    deletedTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)

  return (
    <React.Fragment>
    <TodoCounter
    />
    <TodoSearch/>
    <Count/>

    <TodoList>
      {error && <p>Desesperate, hubo un error...</p>}
      {loading && <p>Estamos cargando, no desesperes...</p>}
      {(!loading && !searchedTodos.length) && <p>Crea tu primer ToDo!</p>}


      {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        onCompleted={() => completedTodo(todo.text)}
        onDeleted={() => deletedTodo(todo.text)}
        />
        
      ))}
    </TodoList>

    {!!openModal && (
      <Modal>
       <TodoForm/>
      </Modal>
    )}
     
    <CreateTodoButton
    setOpenModal={setOpenModal}
    />
  </React.Fragment>
  )
}

export {AppUi}
