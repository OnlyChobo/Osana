import { connect } from 'react-redux';
import AddDropdown from './add_dropdown';
import { openModal } from '../../actions/ui_actions';


const mapDispatchToProps = (dispatch) => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(null, mapDispatchToProps)(AddDropdown);
