import React from 'react';
import merge from 'lodash/merge';

class TaskListTaskItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({open: false});
  }
  handleComplete() {
    return e => {
      e.stopPropagation();
      const updatedTask = merge({}, this.props.task);
      updatedTask.completed = true;
      updatedTask.user_completed_id = this.props.currentUserId;
      this.props.updateTask(updatedTask);
    };
  }

  render () {
    let {task} = this.props;
    const user = this.props.users.filter( user => user.id === task.userAssignedId);
    return (
      <div
        className='sectionTaskRow'
        onClick={() => this.props.openCommentPane(task.id)}>
        <div className='sectionTaskRow-left'>
          <i
            className="far fa-check-circle fa-lg taskCheck"
            onClick={this.handleComplete()}>
          </i>
          <div className='taskRow-text'>
           {task.name}
          </div>
        </div>
        <div className='sectionTaskRow-right'>
          {user.length > 0 && task.userAssignedId ?
            <div className='smallAvatar'>{user[0].fname[0]+user[0].lname[0]}</div> :
            <div></div>
          }
        </div>
      </div>
    );
  }
}

export default TaskListTaskItems;
