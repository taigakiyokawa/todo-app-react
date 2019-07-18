import React from 'react';
import PropTypes from 'prop-types';

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

// Validate type of props
Form.propTypes = {
  isEmpty: PropTypes.bool.isRequired,
  createTodo: PropTypes.func.isRequired,
  checkEmpty: PropTypes.func.isRequired
}

export default Form;