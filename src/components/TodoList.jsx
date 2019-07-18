import React from 'react';
import Todo from './Todo';

const TodoList = (props) => (
  <ul>
    { props.todoList.map((t, i) => {
      return (
        <Todo
          key={ i }
          id={ i }
          title={ t.title }
        />
      )
    })}
  </ul>
)

export default TodoList;