import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Todo extends React.Component {

  // Render a todo title when "isEdit" is false
  renderDefaultView = () => {
    return (
      <span
        className="title" 
        onClick={ () => this.props.handleEdit(this.props.id) }
      >
        { this.props.title }
      </span>
    )
  }

  // Render form for updating todo when "isEdit" is true
  renderEditView = () => {
    return (
      <form 
        className="editForm" 
        onSubmit={ this.props.updateTodo.bind(this, this.props.id) }
      >
        <input 
          type="text"
          type="text" 
          name="title" 
          defaultValue={ this.props.title } 
          required
        />
        <input type="submit" value="UPDATE"/>
        <button onClick={ () => this.props.handleEdit(this.props.id) } >
          cancel
        </button>
      </form>
    )
  }

  render() {
    return(
      <li className="todoItem">
        <Checkbox 
          type="checkbox"
          checked={ this.props.isDone }
          onChange={ () => this.props.handleDone(this.props.id) }
        />
        { this.props.isEdit ? this.renderEditView() : this.renderDefaultView() }
        <button 
          className="delete"
          onClick={ () => this.props.deleteTodo(this.props.id) }
        >
          x
        </button>
      </li>
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