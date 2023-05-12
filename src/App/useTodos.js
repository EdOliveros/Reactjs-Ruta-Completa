import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {

    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
       } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
      
      const [openModal, setOpenModal] = React.useState(false)
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase()
          const SearchedText = searchValue.toLowerCase()
          
          return todoText.includes(SearchedText)
        }
      );

      const addTodo = (text) => {
        const newTodos = [...todos];
        
        newTodos.push({
          text,
          completed: false
        })
        saveTodos(newTodos)
      }
    
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => {
            return todo.text === text
          }
        )
        newTodos[todoIndex].completed = true
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => {
            return todo.text === text
          }
        )
        newTodos.splice(todoIndex, 1) 
        saveTodos(newTodos);
      }

    return (
      {
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo
      }
    );
}

export { useTodos }


{/* <TodoContext.Provider/>
<TodoContext.Consumer/> */}