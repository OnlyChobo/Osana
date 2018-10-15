import { connect } from 'react-redux';
import SideNavFavouritesItem from './side_nav_favourites_item';
import { openModal } from '../../actions/ui_actions';

const mapDispatchToProps = (dispatch) => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(null, mapDispatchToProps)(SideNavFavouritesItem);
