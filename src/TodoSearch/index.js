import React from 'react';
import './TodoSearch.css';
import {TodoContext} from '../TodoContext/index'


function TodoSearch() {
  const {search, setSearchValue} = React.useContext(TodoContext)
  
  const onSearchValue = (event) => {
    console.log(search)
    setSearchValue(event.target.value)
  }

  return (
    <div className='container-input'>
      <input
        id='input' 
        placeholder="Buscar..."
        value= {search}
        onChange={onSearchValue}
      />
    </div>
    
    
  )
}

export {TodoSearch};