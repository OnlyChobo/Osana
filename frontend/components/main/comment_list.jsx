import React from 'react';
import { sortBy } from 'lodash';
import CommentListItemContainer from './comment_list_item_container';

class CommentList extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchTask(this.props.taskId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.taskId !== nextProps.taskId) {
      this.props.fetchTask(nextProps.taskId);
    }
  }

  getTasks (sectionId) {
    let tasks = this.props.tasks.filter(task => task.sectionId === sectionId);
    return sortBy(tasks, ['order']);
  }

  render() {

    return (
      <div className='commentBox-container'>
        <div>
          <div className='commentBox-close'>
            <i onClick={this.props.closeCommentPane} className="modal-close-button fas fa-times"></i>
          </div>
          <div className='commentBox-taskName'>
            {this.props.task.name}
          </div>
          <div className='commentBox-assignedDueRow'>
            <div className=''>
              <div className='commentBox-tokenButton'>
                <i className="far fa-user-circle fa-2x"></i>
                Unassigned
              </div>
              <div className='commentBox-tokenButton'>
                <i className="far fa-calendar fa-2x"></i>
                Due Date
              </div>
            </div>
          </div>
          <div className='commentBox-descriptionBox'>
            <i className="fas fa-align-left fa-lg"></i>
            {this.props.task.description}
          </div>
          {this.props.comments.map(comment =>
            <CommentListItemContainer
              key={comment.id}
              comment={comment}
              user={this.props.users[comment.userId]} />
          )}
        </div>
        <textarea />
      </div>
    );
  }
}

export default CommentList;
