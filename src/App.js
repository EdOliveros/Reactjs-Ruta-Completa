import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreteTodoButton';
import { TodoHero } from './TodoHero'
import React from 'react';

const defaultTodos = [
  {
    text: 'Cortar cebolla',
    completed: true
  },
  {
    text: 'Tomar el Curso de intruccion a Reactjs',
    completed: false
  },
  {
    text: 'Llorar con la Llorona',
    completed: false
  },
  {
    text: 'Pelar la papa',
    completed: true
  },
  {
    text: 'Pelar la piña',
    completed: true
  },
  {
    text: 'Pelar la papaya',
    completed: true
  },
];

function App() {
  return (
    <>
      <div className='mobile-container' >
        <TodoHero/>
        <div className='mobile' >
        <TodoCounter completed={16} total={25} />
        <TodoSearch />

        <TodoList>
          { defaultTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed} />
          )) }
        </TodoList>

        <CreateTodoButton/>
        </div>
      </div>
    </>  
  );
}

export default App;
