import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';


const TodoList = (props) => (
  <List>
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
  </List>
)

// Validate type of props
TodoList.propTypes = {
  todoList: PropTypes.array,
  handleEdit: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
};

export default TodoList;