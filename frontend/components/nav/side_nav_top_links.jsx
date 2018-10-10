import React, { PropTypes } from 'react';

class SideNavTopLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className = 'SideNavTopLinks'>
        <a className = 'SideNavItemRow NavPage' href="#">Home</a>
        <a className = 'SideNavItemRow NavPage' href="#">My Tasks</a>
      </div>
    );
  }
}

export default SideNavTopLinks;
