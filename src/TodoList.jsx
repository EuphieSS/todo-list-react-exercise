function TodoList(props) {
  const { todos } = props;

  return (
    <ul className='list'>
      {todos.length === 0 && 'Nothing on the list yet'}
      {todos.map(todo => {
        return (
          <li key={todo.id}>
            <label>
              <input
                type='checkbox'
                checked={todo.completed}
                // onChange={event => toggleTodo(todo.id, event.target.checked)}
              />
              {todo.title}
            </label>
            {/* <button className='btn btn-danger' onClick={() => deleteTodo(todo.id)}>Delete</button>                   */}
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList;