import React from 'react';
import HomeContainer from './home/home_container';
import Dashboard from './dashboard';
import { Route } from 'react-router-dom';
import Modal from './modal/modal';

const App = () => (
  <div className='AppContainer'>
    <Modal />
    <Route path='/' exact component={HomeContainer} />
    <Route path='/teams/:teamId' component={Dashboard} />
  </div>
);

export default App;
