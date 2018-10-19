import React from 'react';
import SideNavBoxContainer from './nav/side_nav_box_container';
import TaskListContainer from './main/task_list_container';
import MyTaskListContainer from './main/my_task_list_container';
import MyAssignedTaskListContainer from './main/my_assigned_task_list_container';
import MyCompletedTaskListContainer from './main/my_completed_task_list_container';
import MyCreatedTaskListContainer from './main/my_created_task_list_container';
import ProjectListContainer from './main/project_list_container';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

class Dashboard extends React.Component {
  render () {
    return (
      <div className='app'>
        <SideNavBoxContainer/>
        <div className='body-content'>
          <GreetingContainer/>
          <Switch>
            <ProtectedRoute exact path='/teams/:teamId/home' component={ProjectListContainer}/>
            <ProtectedRoute exact path='/teams/:teamId/projects/:projectId' component={TaskListContainer}/>
            <ProtectedRoute exact path='/teams/:teamId/myTasks' component={MyTaskListContainer}/>
            <ProtectedRoute exact path='/teams/:teamId/tasksCreated' component={MyCreatedTaskListContainer}/>
            <ProtectedRoute exact path='/teams/:teamId/tasksAssigned' component={MyAssignedTaskListContainer}/>
            <ProtectedRoute exact path='/teams/:teamId/tasksCompleted' component={MyCompletedTaskListContainer}/>
            <Redirect to='/teams/:teamId/home' />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;
