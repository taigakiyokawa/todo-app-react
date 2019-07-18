import React from 'react';
import PropTypes from 'prop-types';
import EditForm from './EditForm';
import TodoButtons from './TodoButtons';

import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';


const Todo = (props) => (
  <ListItem className="todoItem">
    <ListItemIcon>
      <Checkbox 
        type="checkbox"
        checked={ props.isDone }
        onChange={ () => props.handleDone(props.id) }
      />
    </ListItemIcon>
    { props.isEdit ? 
      <EditForm {...props}/> : 
      <p className="title">{ props.title }</p>
    }
    <TodoButtons {...props}/>
  </ListItem>
)

// Validate type of props
Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  isEdit: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
};

export default Todo;