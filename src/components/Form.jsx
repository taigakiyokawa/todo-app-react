import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';


const Form = (props) => (
  <form onSubmit={ props.createTodo } className="createForm">
    <Grid container spacing={1}>
      <Grid item xs={9}>
        <TextField
          className="createText"
          variant="outlined"
          name="title"
          onChange={ props.checkEmpty }
        />
      </Grid>
      <Grid item xs={3}>
        <Fab
          color="primary"
          aria-label="Add"
          type="submit"
          disabled={ props.isEmpty }
        >
          <AddIcon/>
        </Fab>
      </Grid>
    </Grid>
    
  </form>
)

// Validate type of props
Form.propTypes = {
  isEmpty: PropTypes.bool.isRequired,
  createTodo: PropTypes.func.isRequired,
  checkEmpty: PropTypes.func.isRequired
}

export default Form;