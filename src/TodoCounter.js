function TodoCounter( { total, completed } ) {
    return (
      <h1>
        Has completado { completed } de { total } ToDos
      </h1>
    )
}

export { TodoCounter }