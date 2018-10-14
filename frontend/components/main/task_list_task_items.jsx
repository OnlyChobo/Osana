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
    return (
      <div
        className='sectionTaskRow'
        onMouseEnter={() => this.toggleChevron()}
        onMouseLeave={() => this.toggleChevron()}
        onClick={() => this.props.openCommentPane(task.id)}>
        <div className='sectionTaskRow-left'>
          <i className="far fa-check-circle fa-lg"></i>
          <div className='taskRow-text'>
           {task.name}
          </div>
        </div>
        <div className='sectionTaskRow-right'>
          {task.userAssignedId ? <div className='smallAvatar'>T</div> : <div></div>}
        </div>
      </div>
    );
  }
}

export default TaskListTaskItems;
