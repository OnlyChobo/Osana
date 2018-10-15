import React from 'react';

class SelectFavourite extends React.Component {
  render () {
    return (
      <div className="user-dd-wrapper">
        <ul className="user-dd-list">
          <li className="user-dd-team-list-item">Remove from Favourites</li>
          <li className="user-dd-team-list-item">Delete Project</li>
        </ul>
      </div>
    );
  }
}

export default SelectFavourite;
