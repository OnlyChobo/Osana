import { connect } from 'react-redux';
import SearchBarDropdown from './search_bar_dropdown';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/ui_actions';
import { fetchProjects } from '../../actions/project_actions';
import { fetchTasks } from '../../actions/task_actions';

const mapStateToProps = (state) => ({
  projects: Object.values(state.entities.projects),
  tasks: Object.values(state.entities.tasks),
  teamId: state.session.teamId,
  searchText: state.ui.searchBar
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  fetchProjects: project => dispatch(fetchProjects(project)),
  fetchTasks: task => dispatch(fetchTasks(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarDropdown);
