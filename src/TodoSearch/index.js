import './TodoSearch.css'
import React from 'react'

function TodoSearch({
  searchValue, 
  setSearchValue,
  loading
}) {

  return (
    <div className='container-input'>
      <input 
      placeholder='Cortar cebolla'
      value={ searchValue }
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      disabled={loading}
      />
    </div>
  );
}

export { TodoSearch }