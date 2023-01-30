import React from 'react';
import './Count.css'
import {TodoContext} from '../TodoContext/index';

function Count() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext)

    return(
        <div className='container-acount'>
            <h2 className='TodoCounter'>Completed {completedTodos} to {totalTodos}</h2>
        </div>
 )
}

export  {Count};