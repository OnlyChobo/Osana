import { connect } from 'react-redux';
import SelectFavourite from './select_favourite';
import { openModal } from '../../actions/ui_actions';


const mapDispatchToProps = (dispatch) => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(null, mapDispatchToProps)(SelectFavourite);
