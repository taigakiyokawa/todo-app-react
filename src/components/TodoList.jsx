import React from 'react';

const TodoList = (props) => (
  <ul>
    { props.todoList.map((t, i) => {
      return (
        <li key={ i }>
          { t.title }
        </li>
      )
    })}
  </ul>
)

export default TodoList;