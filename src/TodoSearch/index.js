import { TodoContext } from '../TodoContext';
import './TodoSearch.css'
import React from 'react'

function TodoSearch() {

  const {
    searchValue, setSearchValue
  } = React.useContext(TodoContext)
  
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