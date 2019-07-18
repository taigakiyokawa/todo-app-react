import React from 'react';
import PropTypes from 'prop-types';
import EditForm from './EditForm';
import TodoButtons from './TodoButtons';

import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


const Todo = (props) => (
  <ListItem style={{padding: "8px 0"}}>
    <ListItemIcon style={{minWidth: 0}}>
      <Checkbox 
        type="checkbox"
        checked={ props.isDone }
        onChange={ () => props.handleDone(props.id) }
      />
    </ListItemIcon>
    { props.isEdit ? 
      <EditForm {...props}/> : 
      <p className="title" onClick={ () => props.handleDone(props.id) }>
        { props.title }
      </p>
    }
    <ListItemSecondaryAction style={{right: 0}}>
      <TodoButtons {...props}/>
    </ListItemSecondaryAction>
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