import React from 'react';
import HomeContainer from './home/home_container';
import Dashboard from './dashboard';
import { Route } from 'react-router-dom';
import Modal from './modal/modal';
import ModalWithPosition from './modal/modal_with_position';

const App = () => (
  <div className='AppContainer'>
    <Modal />
    <ModalWithPosition />
    <Route path='/' exact component={HomeContainer} />
    <Route path='/teams/:teamId' component={Dashboard} />
  </div>
);

export default App;
