import { connect } from 'react-redux';
import SearchBarDropdown from './search_bar_dropdown';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/ui_actions';

const mapStateToProps = (state) => ({
  projects: Object.values(state.entities.projects)
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarDropdown);
