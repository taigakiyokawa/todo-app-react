import React from 'react';

const Todo = (props) => (
  <li className="todoItem">
    <input type="checkbox"/>
    <span>{ props.title }</span>
    <button className="delete">x</button>
  </li>
)

export default Todo;