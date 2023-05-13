import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { TodosEmpty } from '../TodosEmpty';
import { ModalInterno } from '../ModalInterno';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoHero } from '../TodoHero'
import { Modal } from '../Modal';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();
  
  return (
    <>
      <div className='mobile-container'>
        <TodoHero/>
        <div className='mobile'>
      <TodoHeader
        loading={loading}
      >
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue} 
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError /> }
        onLoading={() => <TodosLoading /> }
        onEmpty={() => <TodosEmpty /> }
        onEmptySearchResults={
          (searchText) => <p>No tenemos resultado para {searchText}</p> 

        }
        // render={
        //   todo => (
        //     <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onCompleted={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        //   )
        // }
      >

        {
          todo => (
            <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
          )
        } 

      </TodoList>

      {!!openModal && (
        <Modal>
          <ModalInterno 
          addTodo={addTodo}
          setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton 
      setOpenModal={setOpenModal}
      />
      </div>
      </div>
    </>
  );
}

export default App;