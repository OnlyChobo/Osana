import React from 'react';
import { openModal, closeModal } from '../../actions/ui_actions';
import { deleteProject } from '../../actions/project_actions';
import { createFavourite, deleteFavourite } from '../../actions/favourite_actions';
import { connect } from 'react-redux';

class ModalAddProject extends React.Component {
  render() {
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
        <div className="modal-clear" onClick={closeModal}>
        </div>
        <div className="user-dd-wrapper" onClick={e => e.stopPropagation()}>
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


const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    currentUserId: state.session.id,
    currentProjectId: state.session.projectId,
    project: state.entities.projects[state.session.projectId],
    favourite: Object.values(state.entities.favourites).filter(favourite => {
      return ((""+favourite.projectId) === state.session.projectId);
    })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
    deleteProject: id => dispatch(deleteProject(id)),
    deleteFavourite: id => dispatch(deleteFavourite(id)),
    createFavourite: favourite => dispatch(createFavourite(favourite))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddProject);
