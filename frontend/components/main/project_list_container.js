import { connect } from 'react-redux';
import ProjectList from './project_list';
import { fetchTeam } from '../../actions/team_actions';
import { allFavourites } from '../../reducers/selectors';
import { openModal, setHeader } from '../../actions/ui_actions';


const mapStateToProps = state => ({
  projects: Object.values(state.entities.projects),
  members: Object.values(state.entities.users),
  favourites: allFavourites(state.entities)
});

const mapDispatchToProps = dispatch => ({
  fetchTeam: payload => dispatch(fetchTeam(payload)),
  openModal: modal => dispatch(openModal(modal)),
  setHeader: header => dispatch(setHeader(header))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
