function TodoItem(props) {
  const { completed, id, title, toggleTodo, deleteTodo } = props;

  return (
    <li>
      <label>
        <input
          type='checkbox'
          checked={completed}
          onChange={event => toggleTodo(id, event.target.checked)}
        />
        {title}
      </label>
      <button className='btn btn-danger' onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  )
}

export default TodoItem;