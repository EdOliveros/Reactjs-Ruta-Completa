import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../createTodoButton';
import { TodoHero } from '../TodoHero'
import { TodosLoading }  from '../TodosLoading'
import { TodosError }  from '../TodosError'
import { TodosEmpty }  from '../TodosEmpty'
import { TodoContext } from '../TodoContext' 
import React from 'react';

function AppUI() {

  return (
      <>
    <div className='mobile-container' >
      <TodoHero/>
      <div className='mobile' >

      <TodoCounter />
      <TodoSearch />

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
      </div>
    </div>
  </>  
  );
}

export { AppUI }