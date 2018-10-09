import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {signup, login, logout} from './actions/session_actions';
// import {receiveTasks, receiveTask} from './actions/task_actions';
import {receiveProjects, fetchAllProjects} from './actions/project_actions';
import {fetchTeamMemberships} from './actions/team_membership_actions';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	const store = configureStore();
	window.store = store;
	// window.receiveTasks = receiveTasks;
	// window.receiveTask = receiveTask;
	window.getState = store.getState;
	window.dispatch = store.dispatch;
	window.receiveProjects = receiveProjects;
	window.fetchAllProjects = fetchAllProjects;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.fetchTeamMemberships = fetchTeamMemberships;
	ReactDOM.render(<Root store={store} />, root);
});
