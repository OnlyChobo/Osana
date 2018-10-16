import React from 'react';
import SideNavBoxContainer from './nav/side_nav_box_container';
import TaskListContainer from './main/task_list_container';
import MyTaskListContainer from './main/my_task_list_container';
import MyAssignedTaskListContainer from './main/my_assigned_task_list_container';
import MyCompletedTaskListContainer from './main/my_completed_task_list_container';
import MyCreatedTaskListContainer from './main/my_created_task_list_container';
import ProjectListContainer from './main/project_list_container';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';

class Dashboard extends React.Component {
  render () {
    return (
      <div className='app'>
        <SideNavBoxContainer/>
        <div className='body-content'>
          <GreetingContainer/>
          <Route exact path='/teams/:teamId/home' component={ProjectListContainer}/>
          <Route exact path='/teams/:teamId/projects/:projectId' component={TaskListContainer}/>
          <Route exact path='/teams/:teamId/myTasks' component={MyTaskListContainer}/>
          <Route exact path='/teams/:teamId/tasksCreated' component={MyCreatedTaskListContainer}/>
          <Route exact path='/teams/:teamId/tasksAssigned' component={MyAssignedTaskListContainer}/>
          <Route exact path='/teams/:teamId/tasksCompleted' component={MyCompletedTaskListContainer}/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
