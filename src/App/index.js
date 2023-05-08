import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../createTodoButton';
import { TodoHero } from '../TodoHero'
import React from 'react';
import { useLocalStorage } from './useLocalStorage';

// const defaultTodos = [
//   {
//     text: 'Cortar cebolla',
//     completed: true
//   },
//   {
//     text: 'Estados derivados',
//     completed: true
//   },
//   {
//     text: 'Tomar el Curso de intruccion a Reactjs',
//     completed: false
//   },
//   {
//     text: 'Llorar con la Llorona',
//     completed: false
//   },
//   {
//     text: 'Pelar la papa',
//     completed: true
//   },
//   {
//     text: 'Pelar la piña',
//     completed: true
//   },
//   {
//     text: 'Pelar la papaya',
//     completed: true
//   },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {
 
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const SearchedText = searchValue.toLowerCase()
      
      return todoText.includes(SearchedText)
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => {
        return todo.text === text
      }
    )
    newTodos[todoIndex].completed = true
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => {
        return todo.text === text
      }
    )
    newTodos.splice(todoIndex, 1) 
    saveTodos(newTodos);
  }

  return (
    <>
      <div className='mobile-container' >
        <TodoHero/>
        <div className='mobile' >
        <TodoCounter completed={completedTodos} total={totalTodos} />
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

export default App;
