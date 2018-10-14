import React from 'react';
import { sortBy } from 'lodash';

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
        <div className='commentBox-close'>
          <i onClick={this.props.closeCommentPane} className="fas fa-times"></i>
        </div>
        <div className='commentBox-taskName'>
          {this.props.task.name}
        </div>
        <div className='commentBox-assignedDueRow'>
          <div className=''>
            <div className='commentBox-tokenButton'>
              <i class="far fa-user-circle fa-2x"></i>
              Unassigned
            </div>
            <div className='commentBox-tokenButton'>
              <i class="far fa-calendar fa-2x"></i>
              Due Date
            </div>
          </div>
        </div>
        <div className='commentBox-descriptionBox'>
          <i class="fas fa-align-left fa-lg"></i>
          {this.props.task.description}
        </div>
        {this.props.comments.map(comment => comment.body)}
      </div>
    );
  }
}

export default CommentList;
