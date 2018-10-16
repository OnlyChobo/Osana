import { connect } from 'react-redux';
import SelectFavourite from './select_favourite';
import { openModal, closeModal } from '../../actions/ui_actions';
import { deleteProject } from '../../actions/project_actions';
import { deleteFavourite } from '../../actions/favourite_actions';

const mapStateToProps = (state) => ({
  project: state.entities.projects[state.session.projectId],
  favourite: Object.values(state.entities.favourites).filter(favourite => {
    return ((""+favourite.projectId) === state.session.projectId);
  })
});

const mapDispatchToProps = (dispatch) => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  deleteProject: id => dispatch(deleteProject(id)),
  deleteFavourite: id => dispatch(deleteFavourite(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectFavourite);
