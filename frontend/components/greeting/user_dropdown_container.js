import { connect } from 'react-redux';
import UserDropdown from './user_dropdown';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/ui_actions';

const mapStateToProps = (state) => ({
  teams: Object.values(state.entities.teams)
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
