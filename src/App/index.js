import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
import React from 'react';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
