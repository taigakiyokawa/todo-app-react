import React from 'react';

class Todo extends React.Component {
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
        <input 
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

export default Todo;