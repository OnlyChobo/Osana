import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import AddProject from './add_project';

const mapDispatchToProps = dispatch => ({
  createProject: project=>dispatch(createProject(project))
});

export default connect(null, mapDispatchToProps)(AddProject);
