import { connect } from 'react-redux';
import { toggleLeftNav } from '../../actions/ui_actions';
import { getUserInfo } from '../../actions/session_actions';
import { fetchTeam } from '../../actions/team_actions';
import SideNavBox from './side_nav_box';


const mapStateToProps = state => ({
  leftNavStatus: state.ui.navBar,
  currentUser: state.entities.users[state.session.id] || {id: null}
});

const mapDispatchToProps = (dispatch) => ({
  fetchTeam: payload => dispatch(fetchTeam(payload)),
  toggleLeftNav: () => dispatch(toggleLeftNav()),
  getUserInfo: (user) => dispatch(getUserInfo(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNavBox);
