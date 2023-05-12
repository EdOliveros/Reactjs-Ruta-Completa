import './TodoList.css'

function TodoList(props) {

  const renderFunc = props.children || props.render

    return (
      <>
        <ul>
          {props.error && props.onError()}
          {props.loading && props.onLoading()}
          {(!props.loading && !props.totalTodos) && props.onEmpty()}
          
          {(!!props.totalTodos && !props.searchedTodos?.length && props.onEmptySearchResults(props.searchText))}
        
          {props.searchedTodos.map(renderFunc)}
        </ul>
      </>  
    )
}

export { TodoList }