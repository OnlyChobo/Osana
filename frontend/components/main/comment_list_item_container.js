import { connect } from 'react-redux';
import CommentListItem from './comment_list_item';



const mapStateToProps = state => ({
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CommentListItem);
