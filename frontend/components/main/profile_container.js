import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import { openModal, closeModal } from '../../actions/ui_actions';
import Profile from './profile';
import { updateUser } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUserId: state.session.id || null,
  currentUser: state.entities.users[state.session.id] || null
});

const mapDispatchToProps = dispatch => ({
  createProject: project=>dispatch(createProject(project)),
  closeModal: () => dispatch(closeModal()),
  updateUser: user => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
