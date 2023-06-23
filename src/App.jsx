import { useState } from 'react';

import './App.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

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
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App;
