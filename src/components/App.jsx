import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';
import AllDone from './AllDone';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      isAllDone: false,
    };
  }

  // Use in <Form/>: Create a new todo{title: string}
  createTodo = (e) => {
    // Prevent redirect
    e.preventDefault();
    const newTodo = e.target.title.value;
    console.log(`create: ${newTodo}`);
    const todoList = [...this.state.todoList, { title: newTodo, isDone: false }];
    // Update state
    this.setState({ todoList: todoList, isAllDone: false });
    // Reset <Form/>'s input value
    e.target.title.value = "";
  }

  // Use in <Todo/>: Delete "todoList[id]"
  deleteTodo = (id) => {
    const todoWillDelete = this.state.todoList[id];
    console.log(`delete: ${todoWillDelete.title}`);
    // Create a new todoList without "todoWillDelete"
    const todoList = this.state.todoList.filter(t => t !== todoWillDelete);
    // Update state
    this.setState({ todoList: todoList });
  }

  // Use in <Todo/>: Change todoList[id].isDone => true/false
  handleDone = (id) => {
    const todoList = this.state.todoList.map((t, i) => {
        return (i === id) ? {...t, isDone: !t.isDone} : t;
    });
    // Update state
    this.setState({ todoList: todoList });
  }

  render() {
    console.log("--- updated ---");
    console.log(this.state.todoList);
    return (
      <div>
        <Header/>
        <Form createTodo={ this.createTodo }/>
        <AllDone isAllDone={ this.state.isAllDone }/>
        <TodoList 
          todoList={ this.state.todoList }
          deleteTodo={ this.deleteTodo }
          handleDone={ this.handleDone }
        />
      </div>
    );
  }
}