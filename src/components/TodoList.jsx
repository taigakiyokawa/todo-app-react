import React from 'react';
import Todo from './Todo';

const TodoList = (props) => (
  <ul>
    { props.todoList.map((t, i) => {
      return (
        <Todo
          {...props}
          key={ i }
          id={ i }
          title={ t.title }
          isDone={ t.isDone }
          isEdit={ t.isEdit }
        />
      )
    })}
  </ul>
)

export default TodoList;