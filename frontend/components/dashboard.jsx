import React from 'react';
import SideNavBoxContainer from './nav/side_nav_box_container';
import TaskListContainer from './main/task_list_container';
import MyTaskListContainer from './main/my_task_list_container';
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
        </div>
      </div>
    );
  }
}

export default Dashboard;
