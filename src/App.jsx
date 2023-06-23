import { useState } from 'react';

import './App.css';

function App() {
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setTodos((currentTodo) => {
      return [
        ...currentTodo,
        { id:crypto.randomUUID(),
          title: newItem,
          completed: false
        }
      ]
    });

    setNewItem('');
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
      <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input
            value={newItem}
            onChange={event => setNewItem(event.target.value)}
            type='text'
            id='item'
          />
        </div>
        <button className='btn'>Add</button>
      </form>

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
