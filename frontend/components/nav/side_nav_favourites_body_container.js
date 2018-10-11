import { connect } from 'react-redux';
import { allFavourites } from '../../reducers/selectors';
import SideNavFavouritesBody from './side_nav_favourites_body';


const mapStateToProps = state => ({
  favourites: allFavourites(state.entities)
});


export default connect(mapStateToProps, null)(SideNavFavouritesBody);
