import React from 'react';
import './TodoCounter.css';

function TodoCounter({
  completedTodos,
  totalTodos,
  loading
}) {
  return (
    <>
      <div className='container'>
        <div className='fondo'>
        </div>
        <div className='title-container'>
          <h1>Hello, Ed!</h1>    
          <p className={!!loading && 'container--loading' }>
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