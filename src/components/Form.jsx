import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const Form = (props) => (
  <form onSubmit={ props.createTodo }>
    <div>
      <TextField
        variant="outlined"
        type="text"
        name="title"
        onChange={ props.checkEmpty }
      />
      <Fab
        color="primary"
        aria-label="Add"
        type="submit"
        value="CREATE" 
        disabled={ props.isEmpty }
      >
        <AddIcon/>
      </Fab>
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