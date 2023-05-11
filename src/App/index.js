import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
import React from 'react';

function App() {

  const [state, setState] = React.useState('My State')

  return (
    <>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>
      <TodoList>
        <TodoItem state={state} />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
    </>
  );
}

function TodoHeader({ children }) {
  return (
    <header>
      { children }
    </header>
  );
}

function TodoList({ children }) {
  return (
    <>
      { children }
    </>
  );
}

function TodoCounter() {
  return <p>Todo counter</p>;
}

function TodoSearch() {
  return <p>Todo Search</p>;
}

function TodoItem({state}) {
  return <p>Todo Item: { state }</p>;
}


// function App() {
//   return (
//     <TodoProvider>
//       <AppUI />
//     </TodoProvider>
//   );
// }

export default App;
