import React from 'react';
import TaskListForm from './task_list_form';

class TaskList extends React.Component {
  render () {
    return (
      <div> Test
        <TaskListForm receiveTask={this.props.receiveTask}/>
        <ul>
          {this.props.tasks.map(task => <li>{task.name} - {task.description}</li>)}
        </ul>
      </div>
    );
  }
}

export default TaskList;
