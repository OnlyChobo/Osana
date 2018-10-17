import * as APIUtil from '../util/api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';

export const receiveTask = payload => ({
  type: RECEIVE_TASK,
  payload
});

export const receiveTasks = payload => ({
  type: RECEIVE_TASKS,
  payload
});

export const fetchTask = (id) => dispatch => (
  APIUtil.fetchTask(id)
    .then(payload => dispatch(receiveTask(payload)))
);

export const createTask = (task) => dispatch => (
  APIUtil.createTask(task)
    .then(payload => dispatch(receiveTask(payload)))
);

export const fetchTasks = (data) => dispatch => (
  APIUtil.fetchTasks(data)
    .then(payload => dispatch(receiveTasks(payload)))
);
