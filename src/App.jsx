import { useState } from 'react';

import './App.css';

function App() {
  const [newItem, setNewItem] = useState('');
  const [todo, setTodo] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setTodo((currentTodo) => {
      return [
        ...currentTodo,
        { id:crypto.randomUUID(),
          title: newItem,
          complete: false
        }
      ]
    });

    setNewItem('');
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
        {todo.map(item => {
          return (
            <li key={item.id}>
              <label>
                <input type='checkbox' checked={item.completed} />
                {item.title}
              </label>
              <button className='btn btn-danger'>Delete</button>                  
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App;
