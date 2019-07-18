import React from 'react';

const Form = (props) => (
  <form onSubmit={ props.createTodo }>
    <div>
      <input type="text" name="title"/>
      <input type="submit" value="CREATE"/>
    </div>
  </form>
)

export default Form;