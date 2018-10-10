import { connect } from 'react-redux';
import ProjectList from './project_list';

import { fetchTeam } from '../../actions/team_actions';
import { allProjects, allTeams } from '../../reducers/selectors';

const mapStateToProps = state => ({
  projects: Object.values(state.entities.projects),
  members: Object.values(state.entities.users)
});

const mapDispatchToProps = dispatch => ({
  fetchTeam: payload=>dispatch(fetchTeam(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
