import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { toggleLeftNav, openModal, setModalPositions, searchBarText } from '../../actions/ui_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id] || {id: null},
  teams: Object.values(state.entities.teams),
  projects: Object.values(state.entities.projects),
  leftNavStatus: state.ui.navBar,
  header: state.ui.header
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  toggleLeftNav: () => dispatch(toggleLeftNav()),
  openModal: modal => dispatch(openModal(modal)),
  setModalPositions: element => dispatch(setModalPositions(element)),
  searchBarText: text => dispatch(searchBarText(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
