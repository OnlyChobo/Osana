import React from 'react';
import TaskListTaskItemsContainer from './task_list_task_items_container';

class TaskListTasks extends React.Component {
  render () {
    return (
      <div>
        {this.props.tasks.map(task => <TaskListTaskItemsContainer key={task.id} task={task} />)}
      </div>
    );
  }
}

export default TaskListTasks;
