import { connect } from 'react-redux';
import SearchBarDropdown from './search_bar_dropdown';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/ui_actions';
import { fetchProjects } from '../../actions/project_actions';

const mapStateToProps = (state) => ({
  projects: Object.values(state.entities.projects),
  searchText: state.ui.searchBar
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarDropdown);
