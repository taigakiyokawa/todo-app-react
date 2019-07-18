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

  render() {
    return (
      <div>
        <Header/>
        <Form/>
      </div>
    );
  }
}