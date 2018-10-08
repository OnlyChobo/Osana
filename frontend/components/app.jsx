import React from 'react';
import Home from './home/home';
import Dashboard from './dashboard';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Route path='/' exact component={Home} />
    <Route path='/teams/:teamId' component={Dashboard} />
  </div>
);

export default App;
