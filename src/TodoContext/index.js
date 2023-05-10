import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider({ children }) {

    // Aqui puedo compartir informacion con todos mis componentes

    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
       } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase()
          const SearchedText = searchValue.toLowerCase()
          
          return todoText.includes(SearchedText)
        }
      );
    
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
        <TodoContext.Provider
            value={{
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }


{/* <TodoContext.Provider/>
<TodoContext.Consumer/> */}