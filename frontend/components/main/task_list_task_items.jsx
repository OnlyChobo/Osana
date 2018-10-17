import React from 'react';

class TaskListTaskItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({open: false});
    this.toggleChevron = this.toggleChevron.bind(this);
  }
  toggleChevron() {
    this.setState({open: !this.state.open});
  }

  render () {
    let {task} = this.props;
    const user = this.props.users.filter( user => user.id === task.userAssignedId);
    return (
      <div
        className='sectionTaskRow'
        onMouseEnter={() => this.toggleChevron()}
        onMouseLeave={() => this.toggleChevron()}
        onClick={() => this.props.openCommentPane(task.id)}>
        <div className='sectionTaskRow-left'>
          <i className="far fa-check-circle fa-lg taskCheck"></i>
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
