import './TodoSearch.css'
import React from 'react'

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');

  console.log('los usuarios buscan todos de ' + searchValue)

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