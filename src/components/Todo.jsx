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
      <form className="editForm">
        <input type="text"/>
        <input type="submit" value="UPDATE"/>
        <button>cancel</button>
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