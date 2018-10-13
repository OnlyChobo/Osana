import { connect } from 'react-redux';
import CommentList from './comment_list';
import { closeCommentPane } from '../../actions/ui_actions';


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  closeCommentPane: () => dispatch(closeCommentPane())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
