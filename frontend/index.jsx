import React from 'react';
import ReactDOM from 'react-dom';
import configuresStore from './store/store';
import Root from './components/root';
// import {receiveTasks, receiveTask} from './actions/task_actions';
import {receiveProjects, fetchAllProjects} from './actions/project_actions';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	const store = configuresStore();
	window.store = store;
	// window.receiveTasks = receiveTasks;
	// window.receiveTask = receiveTask;
	window.getState = store.getState;
	window.dispatch = store.dispatch;
	window.receiveProjects = receiveProjects;
	window.fetchAllProjects = fetchAllProjects;
	ReactDOM.render(<Root store={store} />, root);
});
