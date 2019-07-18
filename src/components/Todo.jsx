import React from 'react';

const Todo = (props) => (
  <li className="todoItem">
    <input 
      type="checkbox"
      checked={ props.isDone }
      onChange={ () => props.handleDone(props.id) }/>
    <span>{ props.title }</span>
    <button 
      className="delete"
      onClick={ () => props.deleteTodo(props.id) }
    >
      x
    </button>
  </li>
)

export default Todo;