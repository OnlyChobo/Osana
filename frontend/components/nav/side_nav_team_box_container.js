import { connect } from 'react-redux';
import SideNavTeamBox from './side_nav_team_box';


const mapStateToProps = state => ({
  projects: Object.values(state.entities.projects),
  teamMembers: Object.values(state.entities.users)
});


export default connect(mapStateToProps, null)(SideNavTeamBox);
