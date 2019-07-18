import React from 'react';

const Form = (props) => (
  <form onSubmit={ props.createTodo }>
    <div>
      <input
        type="text"
        name="title"
        onChange={ props.checkEmpty }
        required
      />
      <input
        type="submit"
        value="CREATE" 
        disabled={ props.isEmpty }
      />
    </div>
  </form>
)

export default Form;