import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import { openModal, closeModal } from '../../actions/ui_actions';
import AddProject from './add_project';

const mapStateToProps = state => ({
  teamId: state.session.teamId
});

const mapDispatchToProps = dispatch => ({
  createProject: project=>dispatch(createProject(project)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
