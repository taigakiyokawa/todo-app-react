import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';


const TodoButtons = (props) => (
  <div>
    <IconButton size="small" onClick={ () => props.handleEdit(props.id) }>
      <Icon>{ props.isEdit ? "cancel" :  "edit_icon"}</Icon>
    </IconButton>
    <IconButton 
      size="small"
      aria-label="Delete"
      onClick={ () => props.deleteTodo(props.id) }
    >
      <DeleteIcon/>
    </IconButton>
  </div>
)

// Validate type of props
TodoButtons.propTypes = {
  id: PropTypes.number.isRequired,
  isEdit: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoButtons;