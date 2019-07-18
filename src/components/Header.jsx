import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
  <div className="header">
    <h1 className="headline">TODO</h1>
    <div className="count">
      <h4 className="totalCount">total: { props.total }</h4>
      <h4 className="doneCount">done: { props.done }</h4>
    </div>
  </div>
)

// Validate type of props
Header.propTypes = {
 total: PropTypes.number,
 done: PropTypes.number 
}

export default Header;