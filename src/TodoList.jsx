import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todos,toggleTodo,deleteTodo } = props;

  return (
    <ul className='list'>
      {todos.length === 0 && 'Nothing on the list yet'}
      {todos.map(todo => {
        return (
          <TodoItem
            completed={todo.completed}
            id={todo.id}
            title={todo.title}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}

export default TodoList;