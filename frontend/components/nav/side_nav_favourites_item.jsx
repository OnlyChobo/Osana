import React, { PropTypes } from 'react';

class SideNavFavouritesItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='SideNavItemRow NavPage'>
        <svg className='SideNavListIcon' viewBox='0 0 24 24'>
          <circle cx="50%" cy="50%" r="8" fill="#d5dce0" />
        </svg>
        <span className = "SideNavItemRow-name">{this.props.name}</span>
      </div>
    );
  }
}

export default SideNavFavouritesItem;
