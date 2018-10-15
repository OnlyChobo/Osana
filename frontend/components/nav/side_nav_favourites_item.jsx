import React, { PropTypes } from 'react';
import { Link, withRouter } from 'react-router-dom';
class SideNavFavouritesItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  toggleShow() {
    this.setState({show: !this.state.show});
  }

  render() {
    return (
      <div
        className='SideNavItemRow NavPage'
        onMouseEnter={ () => this.toggleShow() }
        onMouseLeave={ () => this.toggleShow() }>
        <svg className='SideNavListIcon' viewBox='0 0 24 24'>
          <circle cx="50%" cy="50%" r="8" fill="#d5dce0" />
        </svg>
        <span className = "SideNavItemRow-name">{this.props.favourite.name}</span>
        {(this.state.show) ?
          <i
            className="fas fa-ellipsis-h"
            onClick={e =>
              {
                e.stopPropagation();
                this.props.openModal('favouriteOptions');
              }}></i> :
          <div></div>}
      </div>
    );
  }
}

export default withRouter(SideNavFavouritesItem);
