import React from 'react';
import './TodoItem.css'

function TodoItem(props) {

  return (
    <li className='item'>
        <span 
        className={`chulito ${props.completed && 'chuliado'}`} 
        onClick={props.onCompleted}>✓</span>
        <div className='item-text'>
          <p 
          className={props.completed && 'completado'}>
            {props.text}
            </p>
          <span className='eliminar' onClick={props.onDeleted}>X</span>
        </div>
    </li>
  )
}

export {TodoItem};
