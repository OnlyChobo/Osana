import { connect } from 'react-redux';
import { createSection } from '../../actions/section_actions';
import { openModal, closeModal } from '../../actions/ui_actions';
import AddSection from './add_section';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createSection: section=>dispatch(createSection(section)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSection);
