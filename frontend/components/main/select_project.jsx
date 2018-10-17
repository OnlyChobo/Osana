import React from 'react';

class SelectProject extends React.Component {
  render () {
    let html;
    if (this.props.favourite.length === 0) {
      html = (
      <li
        className="user-dd-team-list-item"
        onClick={()=>this.props.createFavourite({
          user_id: this.props.currentUserId,
          project_id: this.props.currentProjectId
        }).then(
          this.props.closeModal())}>
        Add to Favourites
      </li>);
    } else {
      html = (
      <li
        className="user-dd-team-list-item"
        onClick={()=> this.props.deleteFavourite(this.props.favourite[0].id).then(
          this.props.closeModal())}>
        Remove from Favourites
      </li>);
    }
    return (
      <div>
        <div
          className="user-dd-wrapper"
          style={{top: `${this.props.top + this.props.height+10}px`, left: `${this.props.left}px`}}
          onClick={e => e.stopPropagation()}>
          <ul className="user-dd-list">
            {html}
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
      </div>
    );
  }
}

export default SelectProject;
