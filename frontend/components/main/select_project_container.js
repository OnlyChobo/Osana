import { connect } from 'react-redux';
import SelectProject from './select_project';
import { openModal, closeModal } from '../../actions/ui_actions';
import { deleteProject } from '../../actions/project_actions';
import { createFavourite, deleteFavourite } from '../../actions/favourite_actions';

const mapStateToProps = (state) => ({
  currentUserId: state.session.id,
  currentProjectId: state.session.projectId,
  project: state.entities.projects[state.session.projectId],
  favourite: Object.values(state.entities.favourites).filter(favourite => {
    return ((""+favourite.projectId) === state.session.projectId);
  })
});

const mapDispatchToProps = (dispatch) => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  deleteProject: id => dispatch(deleteProject(id)),
  deleteFavourite: id => dispatch(deleteFavourite(id)),
  createFavourite: favourite => dispatch(createFavourite(favourite))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectProject);
