import React from 'react';
import SideNavContainer from './nav/side_nav_container';
import TaskListContainer from './tasks/task_list_container';
import ProjectListContainer from './projects/project_list_container';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './users/login_container';

const App = () => (
  <div className='app'>
    <SideNavContainer/>
    <div className='body-content'>
      <GreetingContainer/>
      <ProjectListContainer/>
      <LoginContainer/>
    </div>
  </div>
);

export default App;
