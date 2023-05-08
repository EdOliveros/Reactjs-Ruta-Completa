import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
import React from 'react';

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
    <AppUI
    
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
  
    />
  );
}

export default App;
