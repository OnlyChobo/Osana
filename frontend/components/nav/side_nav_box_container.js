import { connect } from 'react-redux';
import { toggleLeftNav } from '../../actions/ui_actions';
import { login } from '../../actions/session_actions';
import SideNavBox from './side_nav_box';


const mapStateToProps = state => ({
  leftNavStatus: state.ui.leftNav
});

const mapDispatchToProps = (dispatch) => ({
  toggleLeftNav: () => dispatch(toggleLeftNav()),
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNavBox);
