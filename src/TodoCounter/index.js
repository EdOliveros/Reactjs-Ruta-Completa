import React from 'react';
import './TodoCounter.css';

function TodoCounter({
  completedTodos,
  totalTodos
}) {
  return (
    <>
      <div className='container'>
        <div className='fondo'>
        </div>
        <div className='title-container'>
          <h1>Hello, Ed!</h1>    
          <p>
            { completedTodos } de { totalTodos } ToDos Completados!
          </p>
        </div>
        <div className='img-container'>
        </div>
      </div>
    </>
  )
}

export { TodoCounter }