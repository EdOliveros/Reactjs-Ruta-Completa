import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../createTodoButton';
import { TodoHero } from '../TodoHero'
import { TodosLoading }  from '../TodosLoading'
import { TodosError }  from '../TodosError'
import { TodosEmpty }  from '../TodosEmpty'
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext' 
import { ModalInterno } from '../ModalInterno'
import React from 'react';
import { TodoHeader } from '../TodoHeader';

function AppUI() {

  const { 
    openModal, 
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);

  return (
      <>
    <div className='mobile-container' >
      <TodoHero/>
      <div className='mobile' >

      <TodoHeader>
        <TodoCounter 
            completedTodos={completedTodos}
            totalTodos={totalTodos}
        />
        <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoContext.Consumer>
        {({
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo
        }) => (
          <TodoList>

            { loading && <TodosLoading /> }
            { error && <TodosError /> }
            { (!loading && searchedTodos.length === 0) && <TodosEmpty /> }

            {
            searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed} 
                onCompleted={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            )) }
          </TodoList>
        )}
      </TodoContext.Consumer>

      <CreateTodoButton/>

      {
        openModal && 
          <Modal>
            <ModalInterno />
          </Modal>
      }

      </div>
    </div>
  </>  
  );
}

export { AppUI }