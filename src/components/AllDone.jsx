import React from 'react';

const AllDone = (props) => (
  <div>
    <input 
      type="checkbox"
      checked={ props.isAllDone }
      onChange={ props.handleAllDone }/>
    <strong>All done</strong>
  </div>
)

export default AllDone;