import React from 'react';
import Header from './Header';
import Form from './Form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
  }

  // Use in <Form/>: Create a new todo{title: string}
  createTodo = (e) => {
    // Prevent redirect
    e.preventDefault();
    const newTodo = e.target.title.value;
    console.log(`create: ${newTodo}`);
    const todoList = [...this.state.todoList, { title: newTodo }];
    // Update state
    this.setState({ todoList: todoList });
    // Reset <Form/>'s input value
    e.target.title.value = "";
  }

  render() {
    console.log("--- updated ---");
    console.log(this.state.todoList);
    return (
      <div>
        <Header/>
        <Form createTodo={ this.createTodo }/>
      </div>
    );
  }
}