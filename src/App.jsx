import { useState } from 'react';

import './App.css';
import NewTodoForm from './NewTodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodo) => {
      return [
        ...currentTodo,
        { id:crypto.randomUUID(),
          title,
          completed: false
        }
      ]
    });
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodo => {
      return currentTodo.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo;
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id);
    })
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo}/>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        {todos.length === 0 && 'Nothing on the list yet'}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type='checkbox'
                  checked={todo.completed}
                  onChange={event => toggleTodo(todo.id, event.target.checked)}
                 />
                {todo.title}
              </label>
              <button className='btn btn-danger' onClick={() => deleteTodo(todo.id)}>Delete</button>                  
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App;
