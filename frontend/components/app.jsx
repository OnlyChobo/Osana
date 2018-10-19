import React from 'react';
import HomeContainer from './home/home_container';
import Dashboard from './dashboard';
import { Switch, Route, Redirect } from 'react-router-dom';
import Modal from './modal/modal';
import ModalWithPosition from './modal/modal_with_position';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className='AppContainer'>
    <Modal />
    <ModalWithPosition />
    <Switch>
      <AuthRoute path='/' exact component={HomeContainer} />
      <ProtectedRoute path='/teams/:teamId' component={Dashboard} />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;
