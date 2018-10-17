import React from 'react';
import TaskListTasks from './task_list_tasks';
import CommentListContainer from './comment_list_container';
import { sortBy } from 'lodash';

class TaskList extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchTasks(this.props.filter).then (
      this.props.setHeader(this.props.header)
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.taskId !== nextProps.match.params.taskId) {
      this.props.fetchTasks(this.props.filter).then (
        this.props.setHeader(this.props.header)
      );
    }
  }

  componentWillUnmount() {
    this.props.closeCommentPane();
  }

  render() {

    return (
      <div className='taskContainer'>
        <div className='taskBox'>
          <div className='SectionTaskHeader'>
            <input
              className = 'button addTask-button'
              type='submit'
              value='Add Task'/>
            <input
              className = 'button addTask-button addTask-button-white'
              type='submit'
              value='Add Section'/>
          </div>
          <TaskListTasks tasks={this.props.tasks}/>

        </div>
        {this.props.commentPane ? <div className='commentBox'><CommentListContainer /></div> : <div></div>}

      </div>
    );
  }
}

export default TaskList;
