import { connect } from 'react-redux';
import UserDropdown from './user_dropdown';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/ui_actions';
import { fetchTeam } from '../../actions/team_actions';

const mapStateToProps = (state) => ({
  teams: Object.values(state.entities.teams)
});

const mapDispatchToProps = (dispatch) => ({
  fetchTeam: (id) => dispatch(fetchTeam(id)),
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
