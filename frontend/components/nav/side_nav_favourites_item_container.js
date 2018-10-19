import { connect } from 'react-redux';
import SideNavFavouritesItem from './side_nav_favourites_item';
import { openModal } from '../../actions/ui_actions';
import { selectProject, setModalPositions, closeCommentPane } from '../../actions/ui_actions';

const mapDispatchToProps = (dispatch) => ({
  openModal: modal => dispatch(openModal(modal)),
  selectProject: project => dispatch(selectProject(project)),
  setModalPositions: element => dispatch(setModalPositions(element)),
  closeCommentPane: () => dispatch(closeCommentPane())
});

export default connect(null, mapDispatchToProps)(SideNavFavouritesItem);
