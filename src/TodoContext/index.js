import React from 'react';
import { useLocalStorage  } from './UseLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        Item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', [])
      
      const [search, setSearchValue] = React.useState('');
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
      const [openModal, setOpenModal] = React.useState(false)
    
    
      let searchedTodos = [];
    
      if(!search.length >= 1) {
        searchedTodos = todos
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase()
          const searchText = search.toLowerCase()
    
          return todoText.includes(searchText)
        })
      }

      const addTodo = (text) => {
    
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        });
    
        saveTodos(newTodos)
      };
    
      const completedTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
    
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
    
        saveTodos(newTodos)
    
        // todos[todoIndex] = {
        //   text: todos[todoIndex].text,
        //   complited: true,
        // }
      }; 
    
      const deletedTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
    
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
    
        saveTodos(newTodos)
      };
    
    return(
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            search,
            setSearchValue,
            searchedTodos,
            addTodo,
            completedTodo,
            deletedTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}


export {TodoContext, TodoProvider};