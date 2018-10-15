import { connect } from 'react-redux';
import SelectProject from './select_project';
import { openModal } from '../../actions/ui_actions';


const mapDispatchToProps = (dispatch) => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(null, mapDispatchToProps)(SelectProject);
