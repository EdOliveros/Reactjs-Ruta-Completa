import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../createTodoButton';
import { TodoHero } from '../TodoHero'

function AppUI({
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