import React from 'react';

const Header = (props) => (
  <div className="header">
    <h1 className="headline">TODO</h1>
    <div className="count">
      <h4 className="totalCount">total: { props.total }</h4>
      <h4 className="doneCount">done: { props.done }</h4>
    </div>
  </div>
)

export default Header;