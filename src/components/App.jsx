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

  // Use in <Form/>: Create a new todo{title: string, isDone: boolean, isEdit: boolean}
  createTodo = (e) => {
    // Prevent redirect
    e.preventDefault();
    const newTodo = e.target.title.value;
    console.log(`create: ${newTodo}`);
    const todoList = [...this.state.todoList, { title: newTodo, isDone: false, isEdit: false }];
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
    // If all "isDone" in "todoList" is true, "this.and(todoList)" will return true
    const isAllDone = this.and(todoList);
    // Update state
    this.setState({ todoList: todoList, isAllDone: isAllDone });
  }

  // Use in handleDone(): Return true/false result by AND for all "isDone" in todoList
  and = (todoList) => {
    if (todoList.length === 0) {
      return false;
    } else {
      // Create an Array has only {isDone: boolean}
      const isDoneList = todoList.map(t => { return t.isDone; });
      // If all of "isDoneList" is true, it will return true.
      return isDoneList.reduce((prev, current) => { return prev && current; });
    }
  }

  // Use in <Todo/>: Change todoList[id].isDone => true/false
  handleDone = (id) => {
    const todoList = this.state.todoList.map((t, i) => {
        return (i === id) ? {...t, isDone: !t.isDone} : t;
    });
    // If all "isDone" in todoList is true, "isAllDone" will be true.
    const isAllDone = this.and(todoList);
    // Update state
    this.setState({ todoList: todoList, isAllDone: isAllDone });
  }

  // Use in <AllDone/>: Change "isAllDone" => true/false
  handleAllDone = () => {
    const isAllDone = !this.state.isAllDone;
    const todoList = this.state.todoList.map(t => {
      // If "isAllDone" is true, all "isDone" in todoList will be true. Else, they will be false.
      return (isAllDone) ? {...t, isDone: true} : {...t, isDone: false};
    });
    // Update state
    this.setState({ todoList: todoList, isAllDone: isAllDone });
  }

  // Use in <Todo/>: Change "todoList[id].isEdit" => true/false
  handleEdit = (id) => {
    console.log(`TODO ${id} is Edit mode now.`);
    const todoList = this.state.todoList.map((t, i) => {
      return (i === id) ? {...t, isEdit: !t.isEdit} : t;
    });
    this.setState({ todoList: todoList });
  }

  // Use in <Todo/>: Update "title" of "todolist[id]"
  updateTodo = (id, e) => {
    e.preventDefault();
    const updateTodo = e.target.title.value
    console.log(`Update: ${updateTodo}`)
    const todoList = this.state.todoList.map((t, i) => {
      return (i === id) ? {...t, title: updateTodo, isEdit: false} : t;
    });
    this.setState({ todoList: todoList });
  }

  // Use in <Header/>: return number of todo which isDone is true
  doneCount = () => {
    const doneList = this.state.todoList.filter(t => t.isDone )
    console.log(`done: ${doneList.length}`)
    return doneList.length
  }

  


  render() {
    console.log("--- updated ---");
    console.log(this.state.todoList);
    return (
      <div>
        <Header
          total={ this.state.todoList.length }
          done={ this.doneCount() }/>
        <Form createTodo={ this.createTodo }/>
        <AllDone 
          isAllDone={ this.state.isAllDone }
          handleAllDone={ this.handleAllDone }
        />
        <TodoList 
          todoList={ this.state.todoList }
          deleteTodo={ this.deleteTodo }
          handleDone={ this.handleDone }
          handleEdit={ this.handleEdit }
          updateTodo={ this.updateTodo }
        />
      </div>
    );
  }
}