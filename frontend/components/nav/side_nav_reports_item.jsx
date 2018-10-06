import React, { PropTypes } from 'react';

class SideNavReportsItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='NavPage'>
        <span className = "SideNavItems">{this.props.name}</span>
      </div>
    );
  }
}

export default SideNavReportsItem;
