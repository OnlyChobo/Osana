import { connect } from 'react-redux';
import ProjectList from './project_list';

import { fetchAllProjects } from '../../actions/project_actions';
import { allProjects } from '../../reducers/selectors';

const mapStateToProps = state => ({
  projects: allProjects(state.entities)
});

const mapDispatchToProps = dispatch => ({
  fetchAllProjects: projects=>dispatch(fetchAllProjects(projects))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
