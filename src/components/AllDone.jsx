import React from 'react';
import PropTypes from 'prop-types';

const AllDone = (props) => (
  <div>
    <input 
      type="checkbox"
      checked={ props.isAllDone }
      onChange={ props.handleAllDone }/>
    <strong>All done</strong>
  </div>
)

// Validate type of props
AllDone.propTypes = {
  isAllDone: PropTypes.bool.isRequired,
  handleAllDone: PropTypes.func.isRequired
}

export default AllDone;