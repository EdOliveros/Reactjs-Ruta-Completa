import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../createTodoButton';
import { TodoHero } from '../TodoHero'

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <>
      <div className='mobile-container' >
        <TodoHero/>
        <div className='mobile' >
        <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} />
        <TodoSearch  
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList>

          { loading && <p>Estamos Cargando...</p> }
          { error && <p>Desesperate, Hubo un error!!</p> }
          { (!loading && searchedTodos.length === 0) && <p>Agrega un Nuevo ToDo!!</p> }

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

        <CreateTodoButton/>
        </div>
      </div>
    </>  
    );
}

export { AppUI }