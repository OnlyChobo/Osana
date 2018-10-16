import React from 'react';

class SelectFavourite extends React.Component {

  render () {
    return (
      <div className="user-dd-wrapper">
        <ul className="user-dd-list">
          <li
            className="user-dd-team-list-item"
            onClick={() =>
              this.props.deleteFavourite(this.props.favourite[0].id).then(
                this.props.closeModal()
            )}>
            Remove from Favourites
          </li>
          <li
            className="user-dd-team-list-item"
            onClick={() =>
              this.props.deleteProject(this.props.project.id).then(
                this.props.closeModal()
            )}>
            Delete Project
          </li>
        </ul>
      </div>
    );
  }
}

export default SelectFavourite;
