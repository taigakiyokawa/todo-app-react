import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Todo extends React.Component {

  // Render a todo title when "isEdit" is false
  renderDefaultView = () => {
    return (
      <p className="title">{ this.props.title }</p>
    )
  }

  // Render form for updating todo when "isEdit" is true
  renderEditView = () => {
    return (
      <form 
        className="editForm" 
        onSubmit={ this.props.updateTodo.bind(this, this.props.id) }
      >
        <TextField
          className="editText"
          variant="outlined"
          type="text" 
          name="title" 
          defaultValue={ this.props.title } 
          required
        />
        <Button 
          className="updateButton"
          size="large"
          variant="contained"
          color="primary"
          size="small"
          type="submit"
        >
          UPDATE
        </Button>
      </form>
    )
  }

  render() {
    return(
      <ListItem className="todoItem">
        <ListItemIcon>
          <Checkbox 
            type="checkbox"
            checked={ this.props.isDone }
            onChange={ () => this.props.handleDone(this.props.id) }
          />
        </ListItemIcon>
        { this.props.isEdit ? this.renderEditView() : this.renderDefaultView() }
        <ListItemSecondaryAction>
          <IconButton size="small" onClick={ () => this.props.handleEdit(this.props.id) }>
            <Icon>{ this.props.isEdit ? "cancel" :  "edit_icon"}</Icon>
          </IconButton>
          <IconButton 
            size="small"
            aria-label="Delete"
            onClick={ () => this.props.deleteTodo(this.props.id) }
          >
            <DeleteIcon/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

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