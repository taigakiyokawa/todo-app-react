import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Render form for updating todo when "isEdit" is true
const EditForm = (props) => (
  <form 
    className="editForm" 
    onSubmit={ props.updateTodo.bind(this, props.id) }
  >
    <TextField
      className="editText"
      variant="outlined"
      name="title" 
      defaultValue={ props.title } 
      required
    />
    <Button 
      className="updateButton"
      size="large"
      variant="contained"
      color="primary"
      size="small"
      type="submit"
    >
      UPDATE
    </Button>
  </form>
)

// Validate type of props
EditForm.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default EditForm;