import { connect } from 'react-redux';
import SideNavTeamItem from './side_nav_team_item';
import { openModal } from '../../actions/ui_actions';

const mapDispatchToProps = (dispatch) => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(null, mapDispatchToProps)(SideNavTeamItem);
