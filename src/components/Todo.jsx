import React from 'react';

const Todo = (props) => (
  <li>
    <input type="checkbox"/>
    <span>{ props.title }</span>
    <button>x</button>
  </li>
)

export default Todo;