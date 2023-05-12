import { TodoContext } from '../App/useTodos';
import './TodoSearch.css'
import React from 'react'

function TodoSearch({
  searchValue, 
  setSearchValue
}) {

  return (
    <div className='container-input'>
      <input 
      placeholder='Cortar cebolla'
      value={ searchValue }
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      />
    </div>
  );
}

export { TodoSearch }