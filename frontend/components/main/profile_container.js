import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import { openModal, closeModal } from '../../actions/ui_actions';
import Profile from './profile';

const mapDispatchToProps = dispatch => ({
  createProject: project=>dispatch(createProject(project)),
  closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(Profile);
