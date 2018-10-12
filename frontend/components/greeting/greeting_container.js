import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { toggleLeftNav } from '../../actions/ui_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id] || {id: null},
  teams: Object.values(state.entities.teams),
  projects: Object.values(state.entities.projects),
  leftNavStatus: state.ui.navBar
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  toggleLeftNav: () => dispatch(toggleLeftNav())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
